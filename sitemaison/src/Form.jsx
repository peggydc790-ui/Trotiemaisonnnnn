import {useRef,useState} from 'react'
const K=import.meta.env.VITE_WEB3FORMS_KEY
export default function ContactForm(){
 const [s,setS]=useState(''),[bad,setBad]=useState(false),wait=useRef(0)
 async function send(e){e.preventDefault();const f=e.currentTarget,d=new FormData(f)
  const n=String(d.get('name')||'').trim(),m=String(d.get('email')||'').trim(),g=String(d.get('message')||'').trim()
  const err=n.length<2?'Please enter your name.':!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m)?'Please enter a valid email address.':g.length<10?'Please tell us a little more (at least 10 characters).':Date.now()<wait.current?'Please wait a moment before sending again.':!K?'The form is not configured yet. Please use Fiverr.':''
  if(err){setBad(true);setS(err);return}
  setBad(false);setS('Sending…');d.set('name',n);d.set('email',m);d.set('message',g);d.append('access_key',K);d.append('subject','New SiteMaison enquiry')
  try{const j=await(await fetch('https://api.web3forms.com/submit',{method:'POST',body:d})).json()
   if(j.success){wait.current=Date.now()+15000;f.reset();setS('Thank you. Your enquiry was sent and we will reply soon.')}else{setBad(true);setS('Something went wrong. Please try again or use Fiverr.')}}
  catch{setBad(true);setS('Network error. Please try again.')}}
 return <form onSubmit={send} noValidate>
  <label>Name<input name="name" autoComplete="name" maxLength="80" aria-required="true"/></label>
  <label>Email<input name="email" type="email" autoComplete="email" maxLength="120" aria-required="true"/></label>
  <label>Your project<textarea name="message" rows="4" maxLength="2000" aria-required="true"/></label>
  <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" className="hp" aria-hidden="true"/>
  <button className="btn f" type="submit">Send message</button><p role={bad?'alert':'status'} aria-live="polite" className="mut">{s}</p></form>}
