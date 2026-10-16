'use strict';

// Project data comes from the existing portfolio. No analytics or third-party runtime.
const archiveProjects = [{"src": "portfolio_images/page_11.jpg", "title": "医美抗衰 · 国际化 IP — 联合国展示", "tag": "Brand · IP", "category": "brand"}, {"src": "portfolio_images/page_12.jpg", "title": "大型会议案例 · 50w → 510w", "tag": "Event", "category": "brand"}, {"src": "portfolio_images/page_08.jpg", "title": "BAIWEI · 游戏人物设计", "tag": "Design", "category": "visual"}, {"src": "portfolio_images/page_09.jpg", "title": "BAIWEI · 啤酒海报", "tag": "AI · Design", "category": "visual"}, {"src": "portfolio_images/page_10.jpg", "title": "MEDTURE · 护肤不对 美丽白费", "tag": "Makeup", "category": "brand"}, {"src": "portfolio_images/page_13.jpg", "title": "VASELINE · 凡士林 精唇呵护", "tag": "Makeup", "category": "brand"}, {"src": "portfolio_images/page_14.jpg", "title": "直播 · 姐姐的好物分享", "tag": "Live", "category": "brand"}, {"src": "portfolio_images/page_15.jpg", "title": "黄油猫 · 跨界潮玩出动", "tag": "Tide Play", "category": "visual"}, {"src": "portfolio_images/page_16.jpg", "title": "AUDI · 美丽真我跨界大师赛", "tag": "Crossover", "category": "brand"}, {"src": "portfolio_images/page_17.jpg", "title": "LONGINES · 搜城记", "tag": "Connect", "category": "brand"}, {"src": "portfolio_images/page_18.jpg", "title": "RADO · Captain Cook", "tag": "Connect", "category": "brand"}, {"src": "portfolio_images/page_19.jpg", "title": "RADO · Feel It", "tag": "Connect", "category": "brand"}, {"src": "portfolio_images/page_20.jpg", "title": "NIO · 媒介规划创新营销奖 — 大师 TED", "tag": "Award", "category": "brand"}, {"src": "portfolio_images/page_21.jpg", "title": "HAVAL F5 · 品牌全案", "tag": "Brand", "category": "brand"}, {"src": "portfolio_images/page_22.jpg", "title": "奇瑞瑞虎 8 · 品牌全案", "tag": "Brand", "category": "brand"}, {"src": "portfolio_images/page_23.jpg", "title": "SENIA R9 · 星空下最美", "tag": "Launch", "category": "brand"}, {"src": "portfolio_images/page_24.jpg", "title": "RADO · 艺人 TVC 拍摄", "tag": "Artist", "category": "brand"}, {"src": "portfolio_images/page_25.jpg", "title": "LONGINES · 艺人 TVC 拍摄", "tag": "Artist Cooperation", "category": "brand"}, {"src": "portfolio_images/page_26.jpg", "title": "JÄGERMEISTER · 潮出圈 野出格", "tag": "Display", "category": "brand"}, {"src": "portfolio_images/page_27.jpg", "title": "荣获公司 · 品牌榜样人物", "tag": "Brand Planning", "category": "brand"}, {"src": "portfolio_images/page_28.jpg", "title": "商业插画 · 古风系列", "tag": "Classical", "category": "visual"}, {"src": "portfolio_images/page_29.jpg", "title": "商业插画 · 潮流系列", "tag": "Popular", "category": "visual"}];
const englishTitles = {
  '08':'BAIWEI · Game character design','09':'BAIWEI · Beer campaign visuals',
  '10':'MEDTURE · Skincare campaign','11':'Easebell · International brand presentation',
  '12':'Conference & event campaign','13':'Vaseline · Lip care campaign',
  '14':'Live commerce · Content production','15':'Butter Cat · Crossover campaign',
  '16':'Audi · Cross-brand campaign','17':'Longines · City stories',
  '18':'Rado · Captain Cook','19':'Rado · Feel It','20':'NIO · Media & innovation',
  '21':'HAVAL F5 · Brand campaign','22':'Chery Tiggo 8 · Brand campaign',
  '23':'Senia R9 · Launch campaign','24':'Rado · Artist TVC',
  '25':'Longines · Artist TVC','26':'Jägermeister · Brand experience',
  '27':'Brand recognition · Personal archive','28':'Commercial illustration · Classical',
  '29':'Commercial illustration · Contemporary'
};
archiveProjects.forEach(p => {
  const number = p.src.match(/page_(\d+)/)[1];
  p.id = `archive-${number}`;
  p.en = englishTitles[number] || p.title;
  p.description = '过往参与的项目案例，具体工作内容及项目背景见作品原页。';
  p.descriptionEn = 'A past collaborative project. See the original portfolio page for the project context and scope.';
});
const aiProjects = [
  {id:'ai-flowpilot',title:'FlowPilot · AI 工作流键盘',en:'FlowPilot · AI workflow keyboard',src:'assets/hardware/flowpilot.webp',demoSrc:'assets/hardware/flowpilot-demo.webp',tag:'Hardware · AI',category:'ai',photo:true,summary:'实体按键、旋钮与 AI 工作流的连接实践。',summaryEn:'Physical keys and knobs, connected to AI workflows.',description:'个人硬件实践：围绕实体按键、旋钮和桌面工作流进行改造与 AI 辅助开发，将常用操作放到触手可及的位置。下方为实际设备与电脑界面的演示截图。',descriptionEn:'A personal hardware project using adaptation and AI-assisted development to connect physical keys and knobs to desktop workflows. The image below shows the device alongside the actual computer interface.'},
  {id:'ai-moss',title:'MOSS · 桌面语音助手',en:'MOSS · Desktop voice assistant',src:'assets/hardware/moss.webp',demoSrc:'assets/hardware/moss-demo.webp',tag:'Hardware · Voice AI',category:'ai',photo:true,coverFit:'contain',summary:'从科幻造型，到语音打开 B 站与播放音乐。',summaryEn:'A sci-fi-inspired build for opening apps and playing music by voice.',description:'个人制作与调试的桌面原型，采用《流浪地球》MOSS 的造型，探索语音与电脑操作的连接。已有演示包括打开 B 站、打开网易云音乐并播放歌曲。首图为项目封面，下方为现场演示截图。',descriptionEn:'A personally built and tested desktop prototype inspired by MOSS from The Wandering Earth. Demonstrations include opening Bilibili and NetEase Cloud Music, and requesting music by voice. The first image is the project cover; the image below is a frame from the live demonstration.'},
  {id:'ai-content',title:'小红书 · 内容运营自动化',en:'Content workflow · Automation',src:'portfolio_images/page_04.jpg',tag:'AI · Automation',category:'ai',url:'https://my.feishu.cn/base/ZaUdbFi6DaL9o4s1TeAcJaqzndh',description:'个人开发实践：将内容采集、整理、分析与运营流程连接起来，探索重复工作的自动化。',descriptionEn:'A personal project connecting content collection, organization and analysis into an automated workflow.'},
  {id:'ai-health',title:'健康报告 · 信息分析工具',en:'Health reports · Information analysis',src:'portfolio_images/page_05.jpg',tag:'AI · Healthcare',category:'ai',url:'https://williamleo0369-ux.github.io/health-analyzer/',description:'个人产品原型：整理健康报告中的指标与信息，辅助理解和沟通。',descriptionEn:'A personal prototype for organizing health-report indicators and supporting clearer communication.'},
  {id:'ai-quant',title:'量化投研 · 数据看板',en:'Quant research · Data dashboard',src:'portfolio_images/page_06.jpg',tag:'AI · Data',category:'ai',url:'https://williamleo0369-ux.github.io/quant-monitor/',description:'个人开发实践：整合自选股、行情可视化与研究信息，探索数据驱动的投研工作流。',descriptionEn:'A personal exploration of market visualization, watchlists and data-driven research workflows.'},
  {id:'ai-space',title:'旧房改造 · AI 空间探索',en:'Home renovator · AI space exploration',src:'portfolio_images/page_07.jpg',tag:'AI · Spatial Design',category:'ai',url:'https://old-house-renovation-design1-0.vercel.app/',description:'个人产品原型：基于空间照片探索不同风格的改造方案与视觉表达。',descriptionEn:'A personal prototype exploring renovation styles and visual possibilities from room photographs.'}
];
const appProjects = [
  {id:'app-alarm',title:'Workday Alarm · 工作日闹钟',en:'Workday Alarm · Workday-aware alarms',src:'assets/apps/workday-alarm.webp',demoSrc:'assets/apps/workday-alarm-detail.webp',demoCaption:'功能说明图',demoCaptionEn:'Feature illustration',tag:'App · iOS',category:'app',background:'#edf4ee',summary:'法定节假日与调休，交给闹钟记住。',summaryEn:'An alarm designed around holidays and adjusted workdays.',description:'个人开发的工作日闹钟项目，围绕中国法定节假日与调休安排，管理工作日起床提醒。图片为已有项目宣传图与功能说明图。',descriptionEn:'A personal alarm app project designed around Chinese public holidays and adjusted workdays. Images are existing project promotional and feature illustrations.'},
  {id:'app-lingorole',title:'LingoRole · 跨语言通话助手',en:'LingoRole · Cross-language call assistant',src:'assets/apps/lingorole.webp',tag:'App · macOS · AI',category:'app',background:'#e8effa',summary:'实时理解对话，按角色准备英文回答。',summaryEn:'Understand conversations and prepare role-aware English replies.',description:'原生 macOS 跨语言通话助手原型，结合语音转写、翻译、角色背景与英文回答草稿，并提供语音播放。当前图片为已有项目宣传图。',descriptionEn:'A native macOS prototype combining speech transcription, translation, role context, English reply drafts and speech playback. The image is an existing project promotional visual.'},
  {id:'app-renovation',title:'Smart Renovation · 智能装修工作室',en:'Smart Renovation · Interior redesign app',src:'assets/apps/smart-renovation.webp',tag:'App · iOS / Android / Web',category:'app',background:'#f3eee4',summary:'上传房间照片，探索风格、改造约束与预算。',summaryEn:'Explore renovation styles, practical constraints and budgets.',description:'基于 React Native 与 Expo 的室内改造 App 原型，支持上传空间照片、选择装修风格、设置工程约束与预算估算，并接入 AI 图片服务。会员与项目历史采用本地状态管理。当前展示图为项目 App 图标。',descriptionEn:'A React Native and Expo interior-redesign prototype with room photos, style selection, renovation constraints, budget estimates and an AI image-service integration. Membership and project history currently use local state. The image is the project app icon.'},
  {id:'app-spacetime',title:'时空盘 · 命盘、占事与择时',en:'Spacetime · Traditional calendar & charts',src:'assets/apps/spacetime.webp',demoSrc:'assets/apps/spacetime-interface.webp',demoCaption:'网页运行界面',demoCaptionEn:'Running web interface',tag:'App · Web / Desktop / iOS',category:'app',background:'#e9edf2',url:'https://shikongpan.leowilliam26.chatgpt.site/',summary:'把时间、节气与九宫结构放进同一个工具。',summaryEn:'Time, solar terms and nine-palace charts in one workspace.',description:'个人开发的传统文化学习工具，整合八字命盘、奇门排盘、黄历择时与罗盘，并支持盘例记录与学习笔记。首图为项目宣传图，下方为网页运行截图。',descriptionEn:'A personal traditional-culture learning tool combining birth charts, Qimen charts, calendar selection, a compass, records and learning notes. The cover is a promotional image; the additional image shows the running web app.'},
  {id:'app-lirae',title:'Liræ · 无错琴 App',en:'Liræ · Guided musical expression',src:'assets/apps/lirae.webp',demoSrc:'assets/apps/lirae-stage.webp',demoCaption:'Stage 演奏界面',demoCaptionEn:'Stage performance interface',tag:'App · Music · MIDI',category:'app',background:'#efe9df',summary:'用简单输入推进旋律，让音乐表达更容易。',summaryEn:'Simple inputs move the melody forward, making music more accessible.',description:'基于 Expo 与 React Native 的无错琴软件 MVP。支持屏幕按键、电脑键盘与 MIDI 输入，通过旋律推进、节奏保护、曲库与回放，探索更低门槛的音乐表达。图片分别为 iOS 模拟器首页与 Stage 演奏界面。',descriptionEn:'An Expo and React Native music MVP with on-screen, computer-keyboard and MIDI input, guided melodies, rhythm protection, a song library and playback. Images show the iOS Simulator home screen and Stage interface.'}
];
const allProjects = [...archiveProjects, ...aiProjects, ...appProjects];
const selectedIds = ['ai-flowpilot','ai-moss',...appProjects.map(p=>p.id),'archive-16','archive-18','ai-content','archive-10','archive-20'];
let language = 'zh';
try { if (localStorage.getItem('william-language') === 'en') language = 'en'; } catch (_) {}
let activeFilter = 'selected';
let archiveExpanded = false;
let openedProject = null;
const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
const archiveToggle = document.querySelector('#archive-toggle');
const languageButton = document.querySelector('#language');
const t = (zh, en) => language === 'zh' ? zh : en;

function updateArchiveLabel() {
  archiveToggle.textContent = archiveExpanded
    ? t('收起作品档案 ↑', 'Show selected works ↑')
    : t('查看完整作品档案 ↗', 'Explore the full archive ↗');
  archiveToggle.hidden = activeFilter !== 'selected';
}

function renderProjects() {
  let shown;
  if (activeFilter === 'selected') {
    shown = archiveExpanded ? allProjects : selectedIds.map(id => allProjects.find(p => p.id === id)).filter(Boolean);
  } else shown = allProjects.filter(p => p.category === activeFilter);
  grid.replaceChildren();
  shown.forEach((p, index) => {
    const article = document.createElement('article'); article.className = 'project';
    if(p.category==='app') article.classList.add('project-app');
    const preview = document.createElement('button'); preview.className = 'project-preview';
    if(p.background) preview.style.background=p.background;
    if(p.photo) preview.classList.add('project-photo');
    preview.type = 'button'; preview.setAttribute('aria-label', t('查看项目：','View project: ') + t(p.title,p.en));
    const image = document.createElement('img'); image.src = p.src.replace('portfolio_images/', 'assets/projects/').replace('.jpg', '.webp'); image.alt = t(p.title,p.en); image.loading = 'lazy'; image.decoding = 'async';
    if(p.coverFit) image.style.objectFit=p.coverFit;
    const tag = document.createElement('span'); tag.className = 'project-tag'; tag.textContent = p.tag.toUpperCase();
    const arrow = document.createElement('span'); arrow.className = 'project-open'; arrow.textContent = '↗'; arrow.setAttribute('aria-hidden','true');
    preview.append(image,tag,arrow); preview.addEventListener('click',()=>openProject(p));
    const caption = document.createElement('div'); caption.className = 'project-caption';
    const captionText = document.createElement('div');
    const title = document.createElement('h3'); title.textContent = t(p.title,p.en);
    const subtitle = document.createElement('p'); subtitle.textContent = p.category === 'ai' ? t('个人实践 / AI & DIGITAL','PERSONAL EXPLORATION / AI & DIGITAL') : t('项目档案 / '+p.tag.toUpperCase(),'PROJECT ARCHIVE / '+p.tag.toUpperCase());
    if(p.summary) subtitle.textContent=t(p.summary,p.summaryEn);
    const number = document.createElement('span'); number.className = 'project-number'; number.textContent = String(index+1).padStart(2,'0');
    captionText.append(title,subtitle); caption.append(captionText,number); article.append(preview,caption); grid.append(article);
  });
  document.querySelector('#project-count').textContent = `${String(shown.length).padStart(2,'0')} ${t('件作品','PROJECTS')}`;
  updateArchiveLabel();
}

function fillProjectDialog(p) {
  document.querySelector('#dialog-title').textContent = t(p.title,p.en);
  document.querySelector('#dialog-tag').textContent = p.tag.toUpperCase();
  const image = document.querySelector('#dialog-image'); image.src = p.src; image.alt = t(p.title,p.en);
  const demo=document.querySelector('#dialog-demo');
  const demoImage=document.querySelector('#dialog-demo-image');
  demo.hidden=!p.demoSrc;
  document.querySelector('#dialog-demo figcaption').textContent=t(p.demoCaption||'现场演示截图',p.demoCaptionEn||'Live demonstration frame');
  if(p.demoSrc){demoImage.src=p.demoSrc;demoImage.alt=t(p.title+' — '+(p.demoCaption||'现场演示截图'),p.en+' — '+(p.demoCaptionEn||'live demonstration frame'));}
  else demoImage.removeAttribute('src');
  document.querySelector('#dialog-description').textContent = t(p.description,p.descriptionEn);
  const link = document.querySelector('#dialog-link');
  if (p.url) {link.href = p.url; link.hidden = false;} else {link.removeAttribute('href');link.hidden = true;}
}

function openProject(p) {
  openedProject = p; fillProjectDialog(p); dialog.showModal(); document.body.classList.add('modal-open');
}
document.querySelector('#dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');openedProject=null;});
dialog.addEventListener('click',event=>{
  if(event.target !== dialog) return;
  const r=dialog.getBoundingClientRect();
  if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) dialog.close();
});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  activeFilter=button.dataset.filter;
  document.querySelectorAll('.filter').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  renderProjects();
}));
archiveToggle.addEventListener('click',()=>{
  archiveExpanded=!archiveExpanded;renderProjects();
  if(!archiveExpanded) document.querySelector('#works').scrollIntoView({behavior: reducedMotion.matches ? 'instant' : 'smooth'});
});

function applyLanguage() {
  document.documentElement.lang=language==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-zh][data-en]').forEach(el=>el.textContent=el.dataset[language].replace(/\\n/g,'\n'));
  languageButton.textContent = language === 'zh' ? 'EN ↗' : '中文 ↗';
  languageButton.setAttribute('aria-label',t('Switch to English','切换为中文'));
  document.querySelector('#dialog-close').setAttribute('aria-label',t('关闭项目预览','Close project preview'));
  renderProjects();if(openedProject) fillProjectDialog(openedProject);
}
languageButton.addEventListener('click',()=>{
  language=language==='zh'?'en':'zh';
  try{localStorage.setItem('william-language',language);}catch(_){}
  applyLanguage();
});

const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window && !reducedMotion.matches){
  document.documentElement.classList.add('motion-ready');
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
  }),{threshold:.08,rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
const header=document.querySelector('#header');
const hero=document.querySelector('.hero');
const sections=[...document.querySelectorAll('main>section')];
let scheduled=false;
function updateScroll(){
  scheduled=false;
  if(!reducedMotion.matches) document.documentElement.style.setProperty('--scroll',String(Math.min(1.5,window.scrollY/window.innerHeight)));
  const paperUnderHeader=sections.some(s=>{
    if(!s.classList.contains('light-section')) return false;
    const r=s.getBoundingClientRect();return r.top<header.offsetHeight && r.bottom>0;
  });
  header.classList.toggle('on-paper',paperUnderHeader);
}
addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateScroll);}},{passive:true});
addEventListener('resize',updateScroll,{passive:true});
if(matchMedia('(pointer: fine)').matches && !reducedMotion.matches){
  hero.addEventListener('pointermove',e=>{
    document.documentElement.style.setProperty('--mouse-x',`${(e.clientX/innerWidth-.5)*10}px`);
    document.documentElement.style.setProperty('--mouse-y',`${(e.clientY/innerHeight-.5)*6}px`);
  },{passive:true});
  hero.addEventListener('pointerleave',()=>{
    document.documentElement.style.setProperty('--mouse-x','0px');document.documentElement.style.setProperty('--mouse-y','0px');
  });
}
document.querySelector('#year').textContent=new Date().getFullYear();
applyLanguage();updateScroll();
