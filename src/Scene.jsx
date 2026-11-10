import {useRef,useMemo} from 'react'
import {Canvas,useFrame} from '@react-three/fiber'
import {Environment,Lightformer} from '@react-three/drei'
import {S} from './data.js'
const L=(a,b,k)=>a+(b-a)*Math.min(1,k)
function Knot({mob}){
 const g=useRef(),p=useRef()
 const dust=useMemo(()=>{const a=new Float32Array(1500);for(let i=0;i<500;i++){const r=3+Math.random()*5,t=Math.random()*6.283,u=Math.acos(2*Math.random()-1);a.set([r*Math.sin(u)*Math.cos(t),r*Math.sin(u)*Math.sin(t),r*Math.cos(u)],i*3)}return a},[])
 useFrame(({pointer:m,clock,viewport:v},d)=>{
  const h=S.route==='/',t=S.rm?0:clock.elapsedTime,k=d*2.5,o=g.current
  o.position.x=L(o.position.x,h?(mob?0:v.width*.2):(mob?v.width*.28:v.width*.32),k)
  o.position.y=L(o.position.y,h?(mob?v.height*.17:0):(mob?v.height*.36:0),k)
  o.scale.setScalar(L(o.scale.x,h?(mob?.7:1.1):(mob?.28:.6),k))
  o.rotation.y=L(o.rotation.y,t*.25+S.scroll*6+(S.rm?0:m.x*.7),d*3)
  o.rotation.x=L(o.rotation.x,t*.12+S.scroll*3-(S.rm?0:m.y*.5),d*3)
  p.current.rotation.y=t*.02+S.scroll})
 return <>
  <group ref={g}><mesh><torusKnotGeometry args={[1,.3,mob?110:240,mob?20:32,2,3]}/>
   <meshStandardMaterial color="#d9cfbf" metalness={1} roughness={.07} envMapIntensity={1.6}/></mesh></group>
  <points ref={p}><bufferGeometry><bufferAttribute attach="attributes-position" count={500} array={dust} itemSize={3}/></bufferGeometry>
   <pointsMaterial size={.022} color="#efe9df" transparent opacity={.55} depthWrite={false}/></points>
  <Environment resolution={128} frames={1}>
   <Lightformer form="rect" intensity={4} position={[0,4,-3]} scale={[10,2,1]} color="#fff0d8"/>
   <Lightformer form="ring" intensity={3} position={[-4,0,2]} scale={4} rotation-y={Math.PI/2} color="#8fb4ff"/>
   <Lightformer intensity={2.2} position={[4,-2,3]} scale={[3,6,1]} rotation-y={-Math.PI/2} color="#d8b98a"/>
  </Environment></>}
export default function Scene({onReady}){
 const mob=useMemo(()=>innerWidth<700,[])
 return <Canvas dpr={[1,mob?1.5:2]} camera={{position:[0,0,7],fov:38}} gl={{powerPreference:'high-performance'}} onCreated={onReady} aria-hidden="true"><Knot mob={mob}/></Canvas>}