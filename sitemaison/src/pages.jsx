import {createContext,useContext,useEffect,useRef,useState} from 'react'
import {useLocation,useParams} from 'react-router-dom'
import ContactForm from './Form.jsx'
import {services,projects,tech,FIVERR} from './data.js'
export const Go=createContext(()=>{})
export function A({to,children,...p}){const go=useContext(Go),{pathname:c}=useLocation()
 return <a href={to} aria-current={c===to?'page':undefined} onClick={e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;e.preventDefault();go(to)}} {...p}>{children}</a>}
const Ln=({children})=><span className="ln"><span>{children}</span></span>
export const Hire=({children='Hire us on Fiverr',cls='btn f'})=><a className={cls} href={FIVERR} target="_blank" rel="noopener noreferrer">{children} ↗</a>
export function seo(t,d){useEffect(()=>{document.title=t;document.querySelector('meta[name=description]')?.setAttribute('content',d)},[t,d])}
export function Panel({p}){
 const mv=e=>{const r=e.currentTarget.getBoundingClientRect(),s=e.currentTarget.style;s.setProperty('--mx',(e.clientX-r.left)/r.width-.5);s.setProperty('--my',(e.clientY-r.top)/r.height-.5)}
 return <A to={'/projects/'+p.id} className="pn rv" style={{'--pa':p.pa,'--pb':p.pb}} onPointerMove={mv}><i className={'art art-'+p.id}/><span className="lb">{p.cat}</span><h2>{p.name}</h2><span className="vw">View project →</span></A>}
const Head=({k,t,d})=>{seo(t+' — SiteMaison',d);return <header className="ph"><p className="lb rv">{k}</p><h1 className="disp"><Ln>{t}</Ln></h1></header>}
export function About(){
 return <main id="main"><Head k="The studio" t="About" d="SiteMaison is a creative development studio building exceptional, fast, accessible digital experiences."/>
  <section className="sec"><p className="man in">Beautiful is not enough. Every SiteMaison build is art directed, engineered for speed and tested on real phones, then made simple to maintain.</p>
   {[['Performance is a design material','3D and motion earn their place, and never cost the visitor speed.'],['Accessible by default','Keyboard, screen-reader and reduced-motion support are built in, not bolted on.'],['Mobile first','We design for the phone in your hand, then scale up.']].map(([t,d],i)=><div className="row2 rv" key={t}><span className="lb">0{i+1}</span><span><b className="st">{t}</b><p>{d}</p></span></div>)}
   <div className="rv" style={{marginTop:'3rem'}}><Hire>Start a project</Hire></div></section></main>}
export const Services=()=><main id="main"><Head k="Capabilities" t="Services" d="Website development, UI/UX design, e-commerce, landing pages, redesigns, maintenance and bug fixing."/>
 <section className="sec">{services.map(([t,d],i)=><details className="sv rv" key={t}><summary><span className="lb">0{i+1}</span><span className="st">{t}</span><span className="pl">+</span></summary><p>{d}</p></details>)}</section></main>
export const Portfolio=()=><main id="main"><Head k="Selected work" t="Portfolio" d="Selected SiteMaison projects including Exodus and Nexus."/>
 <section className="sec">{projects.map(p=><Panel p={p} key={p.id}/>)}<A to="/contact" className="row2 rv"><span className="lb">Next</span><span className="st">Your project could be next</span><span>→</span></A></section></main>
export const Projects=()=><main id="main"><Head k="Index" t="Projects" d="Index of SiteMaison projects."/>
 <section className="sec">{projects.map(p=><A to={'/projects/'+p.id} className="row2 rv" key={p.id}><span className="st">{p.name}</span><span className="mut">{p.cat}</span><span>→</span></A>)}</section></main>
export function Project(){
 const {id}=useParams(),p=projects.find(x=>x.id===id),nx=p&&projects[(projects.indexOf(p)+1)%projects.length]
 seo(p?p.name+' — SiteMaison':'Not found — SiteMaison',p?p.blurb:'Page not found')
 if(!p)return <main id="main"><Head k="404" t="Not found" d=""/><section className="sec"><A to="/" className="btn">Back home</A></section></main>
 return <main id="main" style={{'--pa':p.pa,'--pb':p.pb}}>
  <section className="pn big"><i className={'art art-'+p.id}/><p className="lb">{p.cat}</p><h1><Ln>{p.name}</Ln></h1></section>
  <section className="sec"><p className="lead rv">{p.blurb}</p><dl className="meta">{p.meta.map(([k,v])=><div className="rv" key={k}><dt className="lb">{k}</dt><dd>{v}</dd></div>)}</dl>
   <A to={'/projects/'+nx.id} className="row2 rv"><span className="lb">Next project</span><span className="st">{nx.name}</span><span>→</span></A></section></main>}
export const Tech=()=><main id="main"><Head k="Our stack" t="Technologies" d="The technologies SiteMaison builds with: React, Three.js, GSAP, Cloudflare and Supabase."/>
 <section className="sec">{tech.map(([g,l])=><div className="tg rv" key={g}><span className="lb">{g}</span><p>{l.map(x=><span key={x}>{x}</span>)}</p></div>)}</section></main>
export const Contact=()=><main id="main"><Head k="Let's talk" t="Contact" d="Contact SiteMaison to start your website, UI/UX or e-commerce project."/><section className="sec narrow"><ContactForm/><p className="rv mut">Prefer Fiverr?</p><div className="rv"><Hire/></div></section></main>
