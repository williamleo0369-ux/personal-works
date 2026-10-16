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
  {id:'ai-content',title:'小红书 · 内容运营自动化',en:'Content workflow · Automation',src:'portfolio_images/page_04.jpg',tag:'AI · Automation',category:'ai',url:'https://my.feishu.cn/base/ZaUdbFi6DaL9o4s1TeAcJaqzndh',description:'个人开发实践：将内容采集、整理、分析与运营流程连接起来，探索重复工作的自动化。',descriptionEn:'A personal project connecting content collection, organization and analysis into an automated workflow.'},
  {id:'ai-health',title:'健康报告 · 信息分析工具',en:'Health reports · Information analysis',src:'portfolio_images/page_05.jpg',tag:'AI · Healthcare',category:'ai',url:'https://williamleo0369-ux.github.io/health-analyzer/',description:'个人产品原型：整理健康报告中的指标与信息，辅助理解和沟通。',descriptionEn:'A personal prototype for organizing health-report indicators and supporting clearer communication.'},
  {id:'ai-quant',title:'量化投研 · 数据看板',en:'Quant research · Data dashboard',src:'portfolio_images/page_06.jpg',tag:'AI · Data',category:'ai',url:'https://williamleo0369-ux.github.io/quant-monitor/',description:'个人开发实践：整合自选股、行情可视化与研究信息，探索数据驱动的投研工作流。',descriptionEn:'A personal exploration of market visualization, watchlists and data-driven research workflows.'},
  {id:'ai-space',title:'旧房改造 · AI 空间探索',en:'Home renovator · AI space exploration',src:'portfolio_images/page_07.jpg',tag:'AI · Spatial Design',category:'ai',url:'https://old-house-renovation-design1-0.vercel.app/',description:'个人产品原型：基于空间照片探索不同风格的改造方案与视觉表达。',descriptionEn:'A personal prototype exploring renovation styles and visual possibilities from room photographs.'}
];
const allProjects = [...archiveProjects, ...aiProjects];
const selectedIds = ['archive-16','archive-18','ai-content','archive-10','archive-20','ai-space'];
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
    const preview = document.createElement('button'); preview.className = 'project-preview';
    preview.type = 'button'; preview.setAttribute('aria-label', t('查看项目：','View project: ') + t(p.title,p.en));
    const image = document.createElement('img'); image.src = p.src.replace('portfolio_images/', 'assets/projects/').replace('.jpg', '.webp'); image.alt = t(p.title,p.en); image.loading = 'lazy'; image.decoding = 'async';
    const tag = document.createElement('span'); tag.className = 'project-tag'; tag.textContent = p.tag.toUpperCase();
    const arrow = document.createElement('span'); arrow.className = 'project-open'; arrow.textContent = '↗'; arrow.setAttribute('aria-hidden','true');
    preview.append(image,tag,arrow); preview.addEventListener('click',()=>openProject(p));
    const caption = document.createElement('div'); caption.className = 'project-caption';
    const captionText = document.createElement('div');
    const title = document.createElement('h3'); title.textContent = t(p.title,p.en);
    const subtitle = document.createElement('p'); subtitle.textContent = p.category === 'ai' ? t('个人实践 / AI & DIGITAL','PERSONAL EXPLORATION / AI & DIGITAL') : t('项目档案 / '+p.tag.toUpperCase(),'PROJECT ARCHIVE / '+p.tag.toUpperCase());
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
