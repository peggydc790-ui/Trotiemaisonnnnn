import {useRef} from 'react'
import {Canvas,useFrame} from '@react-three/fiber'
import {MeshDistortMaterial,Float} from '@react-three/drei'
function Scene(){
 const g=useRef(),r=useRef()
 useFrame(({pointer,clock},d)=>{
  g.current.rotation.y+=(pointer.x*.6-g.current.rotation.y)*Math.min(1,d*3)
  g.current.rotation.x+=(-pointer.y*.4-g.current.rotation.x)*Math.min(1,d*3)
  r.current.rotation.z=clock.elapsedTime*.25;r.current.rotation.x=1.2+Math.sin(clock.elapsedTime*.3)*.2})
 return <group ref={g}>
  <Float speed={1.4} floatIntensity={.6}><mesh>
   <icosahedronGeometry args={[1.25,24]}/>
   <MeshDistortMaterial color="#8f7bff" roughness={.15} metalness={.9} distort={.38} speed={1.6}/></mesh></Float>
  <mesh ref={r}><torusGeometry args={[2.1,.015,8,128]}/><meshBasicMaterial color="#d9ccff"/></mesh>
  <mesh rotation={[.4,0,0]}><torusGeometry args={[2.6,.008,8,128]}/><meshBasicMaterial color="#5b8cff"/></mesh>
  <ambientLight intensity={.4}/><directionalLight position={[3,3,4]} intensity={2.2} color="#ffd9f2"/><pointLight position={[-4,-2,2]} intensity={25} color="#4f7cff"/>
 </group>}
export default function Hero3D(){
 return <Canvas dpr={[1,1.5]} camera={{position:[0,0,6],fov:42}} gl={{antialias:false,powerPreference:'high-performance'}} aria-hidden="true"><Scene/></Canvas>}
