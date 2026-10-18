'use strict';
(()=>{
  const root=document.documentElement;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const stage=document.querySelector('.flight-stage');
  const balloon=document.querySelector('.service-float');
  const toggle=document.querySelector('.character-toggle');
  const scenes=[stage,balloon].filter(Boolean);
  const visible=new Set();
  let paused=false,scheduled=false;
  try{paused=localStorage.getItem('william-character-paused')==='true';}catch(_){}
  function label(){
    const en=root.lang==='en';
    const text=paused?(en?'Play character animation':'播放人物动态'):(en?'Pause character animation':'暂停人物动态');
    toggle.setAttribute('aria-label',text);toggle.title=text;
    toggle.setAttribute('aria-pressed',String(paused));
  }
  function sync(){
    const inactive=paused||reduced.matches||document.hidden;
    root.classList.toggle('character-paused',inactive);
    scenes.forEach(scene=>scene.classList.toggle('character-active',visible.has(scene)&&!inactive));
    toggle.hidden=reduced.matches||visible.size===0;
    label();
  }
  toggle.addEventListener('click',()=>{
    paused=!paused;
    try{localStorage.setItem('william-character-paused',String(paused));}catch(_){}
    sync();
    if(!paused) update();
  });
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>entry.isIntersecting?visible.add(entry.target):visible.delete(entry.target));
      sync();schedule();
    },{threshold:.05});
    scenes.forEach(scene=>observer.observe(scene));
  }else scenes.forEach(scene=>visible.add(scene));
  function update(){
    scheduled=false;
    if(paused||reduced.matches||document.hidden||!visible.has(stage)) return;
    const rect=stage.getBoundingClientRect();
    const progress=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height)));
    stage.style.setProperty('--fly-x',`${(progress-.5)*rect.width*.72}px`);
    stage.style.setProperty('--fly-y',`${-Math.sin(progress*Math.PI)*24}px`);
    stage.style.setProperty('--fly-roll',`${(progress-.5)*16}deg`);
  }
  function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(update);}}
  addEventListener('scroll',schedule,{passive:true});
  addEventListener('resize',schedule,{passive:true});
  document.addEventListener('visibilitychange',()=>{sync();schedule();});
  reduced.addEventListener('change',()=>{sync();schedule();});
  new MutationObserver(label).observe(root,{attributes:true,attributeFilter:['lang']});
  sync();schedule();
})();
