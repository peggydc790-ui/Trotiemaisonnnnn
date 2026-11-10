import {useEffect,useRef} from 'react'
import '@fontsource-variable/exo-2'
import '@fontsource-variable/public-sans'
import {A,Hire,seo} from './pages.jsx'
import {projects} from './data.js'
import Sections from './Sections.jsx'
const C='https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/'
const V1080=C+'e02bb27f-80d8-445f-a03e-1b609dac4261.mp4',V720=C+'e8eb434f-d097-4b1b-b9e6-c8b46fa43040.mp4',POSTER=C+'5e018553-cb8a-420a-819f-fcdfa08e5df0.jpg'
const W='#F9F9F9',D='#0a0b0c',sv={viewBox:'0 0 40 40','aria-hidden':'true'}
const ring=<circle cx="20" cy="20" r="18.5" fill="none" stroke={W} strokeWidth="1.6" strokeDasharray="0.1 4.2" strokeLinecap="round"/>
const F=[
['a1',<svg {...sv}>{ring}<circle cx="20" cy="20" r="10" fill={W}/><ellipse cx="20" cy="20" rx="4" ry="10" fill="none" stroke={D} strokeWidth="1.2"/><path d="M10 20h20" stroke={D} strokeWidth="1.2"/></svg>,['PREMIUM','WEBSITE DESIGN'],['Art-directed websites with a distinctive identity,','refined typography and careful detail, built to','make a lasting first impression.']],
['b1',<svg {...sv}><g fill={W}><rect x="4" y="26" width="9" height="9"/><rect x="15.5" y="17" width="9" height="18"/><rect x="27" y="8" width="9" height="27"/></g></svg>,['UI/UX','EXPERIENCES'],['Interfaces shaped around clarity and flow, from','first wireframe to polished interaction, designed','to feel effortless on every screen.']],
['a2',<svg {...sv}>{ring}<circle cx="20" cy="20" r="10" fill={W}/><path d="M15 20.5l3.6 3.6L25.5 16" fill="none" stroke={D} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,['WEB','DEVELOPMENT'],['Fast, secure, accessible code on a modern stack,','built for search visibility and dependable','performance on every device.']],
['b2',<svg {...sv}><path d="M27 12.5C25.5 8 13 8 13 15.5S27 21 27 27.5 14.5 33 12 27.5M20 5v30" fill="none" stroke={W} strokeWidth="3.4" strokeLinecap="round"/></svg>,['E-COMMERCE','SOLUTIONS'],['Storefronts that feel premium and check out','without friction, from product pages through','to payment.']],
['c',<svg {...sv}><path d="M9 8l11 12L9 32M21 8l11 12-11 12" fill="none" stroke={W} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,['3D WEB','EXPERIENCES'],['Immersive, interactive 3D with Three.js, tuned so','it stays smooth on phones and never costs','the visitor speed.']]]
const bz=x=>{let a=0,b=1,t=.5;for(let i=0;i<20;i++){3*(1-t)*(1-t)*t*.45+3*(1-t)*t*t*.55+t*t*t<x?a=t:b=t;t=(a+b)/2}return 3*(1-t)*(1-t)*t*.05+3*(1-t)*t*t*.95+t*t*t}
export default function Home(){
 seo('SiteMaison — Premium Digital Experience Studio','SiteMaison is a premium digital design and development studio: premium website design, UI/UX, web development, 3D web experiences and e-commerce.')
 const tr=useRef(),ct=useRef(),vd=useRef()
 useEffect(()=>{
  const t=tr.current,v=vd.current,k=matchMedia('(prefers-reduced-motion: reduce)').matches?1:.22
  v.src=matchMedia('(max-width:900px)').matches||navigator.connection?.saveData?V720:V1080;v.muted=true
  let dur=5.04,end=1,knee=1,top=0,cur=0,tgt=0,raf=0
  const prog=p=>p<knee?p/knee*.46:.46+(p-knee)/(1-knee)*.54,pr=()=>Math.min(1,Math.max(0,(scrollY-top)/end))
  const lay=()=>{const vh=innerHeight,r=t.getBoundingClientRect(),lb=ct.current.querySelector('.c').getBoundingClientRect().bottom-r.top
   top=r.top+scrollY;end=lb+.75*vh;knee=lb/end;t.style.height=end+vh+'px'}
  const tick=()=>{tgt=prog(pr())*(dur-1/48);cur+=(tgt-cur)*k
   if(!v.seeking&&Math.abs(v.currentTime-cur)>1/60)v.currentTime=cur
   raf=Math.abs(tgt-cur)>.002?requestAnimationFrame(tick):0}
  const kick=()=>{if(!raf)raf=requestAnimationFrame(tick)}
  const seeked=()=>{if(Math.abs(v.currentTime-cur)>1/60)v.currentTime=cur}
  const meta=()=>{dur=v.duration||dur;lay();kick()},rs=()=>{lay();kick()}
  v.addEventListener('loadedmetadata',meta);v.addEventListener('seeked',seeked)
  addEventListener('scroll',kick,{passive:true});addEventListener('resize',rs);document.fonts?.ready.then(rs);lay();kick()
  document.body.classList.add('nf')
  if(location.search.includes('rec=1')){
   window.__recTime=(vid,s)=>{const f=Math.min(1,Math.max(0,s/6.5)),q=f<.05?.03:f>.95?.94:.03+.91*bz((f-.05)/.9)
    scrollTo(0,top+q*(end+.9*innerHeight));const r=prog(pr())*((vid.duration||dur)-1/48);cur=r;vid.currentTime=r;return r}
   const t0=performance.now(),step=()=>{const s=(performance.now()-t0)/1000;window.__recTime(v,s);if(s<6.5)requestAnimationFrame(step)};step()}
  return()=>{cancelAnimationFrame(raf);v.removeEventListener('loadedmetadata',meta);v.removeEventListener('seeked',seeked)
   removeEventListener('scroll',kick);removeEventListener('resize',rs);document.body.classList.remove('nf');delete window.__recTime}},[])
 const hl=[...projects.map(p=>[p.name,p.cat,p.blurb,'/projects/'+p.id]),['More to come','Selected work','New projects and case studies are added as they are finalised.','/portfolio']]
 return <main id="main">
  <section className="trk" ref={tr}>
   <div className="scn"><video ref={vd} poster={POSTER} muted playsInline preload="auto" aria-hidden="true"/></div>
   <div className="cnt" ref={ct}>
    <div className="f0"><p>WHY US</p><h1><span>SITES</span><span>THAT WORK</span><span>AS HARD AS</span><span>YOUR AMBITION.</span></h1></div>
    {F.map(([c,i,t,b])=><div className={'fb '+c} key={c}>{i}<h3>{t.map(x=><span key={x}>{x}</span>)}</h3><p>{b.map(x=><span key={x}>{x}</span>)}</p></div>)}
   </div></section>
  <section className="tr"><div className="tw">
   <div className="th"><h2><span>Selected</span><span>project</span><span>highlights</span></h2><p>A look at the work behind SiteMaison. Full case studies are published as each project is finalised.</p></div>
   {hl.map(([n,r,d,to])=><A to={to} className="q" key={n}><span><b>{n}</b><small>{r}</small></span><p>{d}</p></A>)}
   <div className="tcta"><Hire/><A to="/contact" className="btn">Start a project</A></div></div></section><Sections/></main>}
