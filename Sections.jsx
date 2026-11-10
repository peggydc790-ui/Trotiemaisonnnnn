import ContactForm from './Form.jsx'
import {Hire,Panel} from './pages.jsx'
import {services,projects} from './data.js'
const steps=[['Discovery','We learn your goals, audience and constraints.'],['Strategy','We define structure, content and what success looks like.'],['Design','We art direct the look, typography and motion.'],['Development','We build it fast, secure and accessible.'],['Testing','We check devices, performance and every interaction.'],['Launch','We deploy, verify and hand over.']]
const H=({k,t})=><header className="sh"><p className="lb">{k}</p><h2>{t}</h2></header>
const Rows=({list})=><div className="lg">{list.map(([t,d],i)=><div className="lr" key={t}><span className="lb">0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
export default function Sections(){return <>
 <section className="lt"><div className="tw"><H k="The studio" t="Experiences, not ordinary websites."/>
  <p className="big">SiteMaison is a premium digital design and development studio. We combine editorial design, motion and engineering so every site is memorable, fast and accessible, especially on the phone in your hand.</p></div></section>
 <section className="lt"><div className="tw"><H k="Services" t="What we build"/><Rows list={services}/></div></section>
 <section className="lt wk"><div className="tw"><H k="Selected work" t="Projects"/>{projects.map(p=><Panel p={p} key={p.id}/>)}</div></section>
 <section className="lt"><div className="tw"><H k="Process" t="How we work"/><Rows list={steps}/></div></section>
 <section className="dk"><div className="tw n2"><H k="Contact" t="Start a project"/><ContactForm/><div className="tcta"><Hire/></div></div></section></>}
