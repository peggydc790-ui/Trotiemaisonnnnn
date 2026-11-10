import {Component,lazy,Suspense,useEffect,useRef,useState} from 'react'
import {BrowserRouter,Routes,Route,useLocation,useNavigate} from 'react-router-dom'
import gsap from 'gsap'
import {S} from './data.js'
import {Go,A,Hire,Home,About,Services,Portfolio,Projects,Project,Tech,Contact} from './pages.jsx'
const Scene=lazy(()=>import('./Scene.jsx'))
class EB extends Component{state={e:0};static getDerivedStateFromError(){return{e:1}};render(){return this.state.e?null:this.props.children}}
const links=[['/','Home'],['/about','About'],['/services','Services'],['/portfolio','Portfolio'],['/projects','Projects'],['/technologies','Technologies'],['/contact','Contact']]
function Shell(){
 const {pathname}=useLocation(),nav=useNavigate(),[open,setOpen]=useState(false),[ready,setReady]=useState(false),[min,setMin]=useState(false),[live,setLive]=useState(false),[done,setDone]=useState(false)
 const ct=useRef(),cnt=useRef(),cu=useRef(),busy=useRef(false),rm=useRef(matchMedia('(prefers-reduced-motion: reduce)').matches)
 S.rm=rm.current;S.route=pathname==='/'?'/':'/x'
 useEffect(()=>{const o={v:0};gsap.to(o,{v:100,duration:rm.current?.1:1.4,ease:'power2.inOut',onUpdate:()=>{if(cnt.current)cnt.current.textContent=Math.round(o.v)},onComplete:()=>setMin(true)})
  const t=setTimeout(()=>setReady(true),4500);return()=>clearTimeout(t)},[])
 useEffect(()=>{if(!(ready&&min))return;setLive(true)
  if(rm.current)return setDone(true)
  gsap.to('.ld',{yPercent:-100,duration:1,ease:'expo.inOut',onComplete:()=>setDone(true)})},[ready,min])
 useEffect(()=>{const f=()=>{S.scroll=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)};addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
 useEffect(()=>{if(!live)return
  const io=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){e.target.style.setProperty('--d',i*70+'ms');e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'})
  const t=setTimeout(()=>document.querySelectorAll('.ln,.rv').forEach(el=>io.observe(el)),60)
  return()=>{clearTimeout(t);io.disconnect()}},[pathname,live])
 useEffect(()=>{if(!matchMedia('(hover:hover) and (pointer:fine)').matches||rm.current)return
  const x=gsap.quickTo(cu.current,'x',{duration:.4}),y=gsap.quickTo(cu.current,'y',{duration:.4})
  const m=e=>{x(e.clientX);y(e.clientY);cu.current.classList.toggle('h',!!e.target.closest('a,button,summary'))}
  cu.current.style.display='block';addEventListener('pointermove',m);return()=>removeEventListener('pointermove',m)},[])
 const go=to=>{if(to===pathname||busy.current)return;setOpen(false)
  if(rm.current){nav(to);scrollTo(0,0);return}
  busy.current=true
  gsap.timeline({onComplete:()=>{busy.current=false}}).set(ct.current,{transformOrigin:'bottom'}).to(ct.current,{scaleY:1,duration:.6,ease:'expo.inOut'})
   .add(()=>{nav(to);scrollTo(0,0)}).set(ct.current,{transformOrigin:'top'}).to(ct.current,{scaleY:0,duration:.7,ease:'expo.inOut',delay:.15})}
 return <Go.Provider value={go}>
  <a className="skip" href="#main">Skip to content</a>
  <header className="hd"><A to="/" className="logo" aria-label="SiteMaison home">SITE<i>MAISON</i></A>
   <button className="mb" aria-expanded={open} aria-controls="mn" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button></header>
  <nav id="mn" className={'mn'+(open?' o':'')} aria-label="Primary" aria-hidden={!open}>
   {links.map(([p,l],i)=><A key={p} to={p} tabIndex={open?0:-1} style={{'--d':i*55+'ms'}}><span>{l}</span></A>)}</nav>
  <div className={'gl'+(pathname==='/'?'':' dim')}><EB><Suspense fallback={null}><Scene onReady={()=>setReady(true)}/></Suspense></EB></div>
  <div className="pg"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/>
   <Route path="/portfolio" element={<Portfolio/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:id" element={<Project/>}/>
   <Route path="/technologies" element={<Tech/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Project/>}/></Routes>
   <footer><p className="wm" aria-hidden="true">SITEMAISON</p><p className="mut">© {new Date().getFullYear()} SiteMaison</p><Hire cls="btn">Hire us on Fiverr</Hire></footer></div>
  <div className="ct" ref={ct}/><div className="cu" ref={cu}/>
  {!done&&<div className="ld" role="status" aria-label="Loading"><span className="lb">SiteMaison</span><b ref={cnt}>0</b></div>}</Go.Provider>}
export default function App(){return <BrowserRouter><Shell/></BrowserRouter>}