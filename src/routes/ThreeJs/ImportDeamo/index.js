import React,{Component} from 'react'
import {Scene, WebGLRenderer,PerspectiveCamera,AmbientLight,CubeGeometry,MeshLambertMaterial,Mesh} from 'three'

class ThreeImportDemo extends Component{
  state={
    scene:new Scene(),
    camera:new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000),
    renderer:new WebGLRenderer(),
    geometry:new CubeGeometry(1,1,1,1),
    material:new MeshLambertMaterial({color:0x00ff00}),
    cube:null
  }

  setCube=()=>{
    const {scene,camera,renderer,geometry,material} = this.state
    const cube = new Mesh(geometry,material)
    this.setState({
      cube:cube
    })
    scene.add(cube)
    camera.position.z = 5;
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.getElementById('canvas-frame').appendChild(renderer.domElement)
  }

  threeRender = ()=>{
    const {cube,renderer,camera,scene} = this.state
    requestAnimationFrame(this.threeRender)
    cube.rotation.x += 0.1
    cube.rotation.y +=0.1
    renderer.render(scene,camera)
  }


  componentDidMount(){
    this.setCube()
  }

  componentDidUpdate(){
    this.threeRender();
  }






    // constructor(props){
    //   super(props)
    // }

    // initThree(){
    //   let renderer,width,height,camera,scene,light ;

    //   threeStart()

    //   // 
    //   function init(){
    //     width = window.innerWidth
    //     height = window.innerHeight
    //     renderer = new WebGLRenderer(
    //       {antialias:true}
    //     )
    //     renderer.setSize(width,height)
    //     document.getElementById('canvas-frame').appendChild(renderer.domElement)
    //     renderer.setClearColor('0x000000',1.0)
    //   }

    //   function initCamera(){
    //     camera = new PerspectiveCamera(45,width/height,1,10000)
    //     camera.position.set(400,400,400)
    //     camera.up.set(0,1,0)
    //     camera.lookAt(0,0,0)
    //   }

    //   function initScene() {
    //     scene = new Scene ()
    //   }

    //   function initLight(){
    //     light = new AmbientLight(0xFFFFFFF)
    //     light.position.set(300,300,0)
    //     scene.add(light)
    //   }

    //   function initObject(){
    //     const geometry = new CubeGeometry(200,200,200)
    //     const material = new MeshLambertMaterial({ color: 0xFF0000 })
    //     const mesh = new Mesh(geometry,material)
    //     mesh.position.set(0,0,0)
    //     scene.add(mesh)
    //   }

    //   function threeStart(){
    //     init()
    //     initCamera()
    //     initScene()
    //     initLight()
    //     initObject()
    //     animation()
    //   }

    //   function animation(){
    //     renderer.render(scene,camera)
    //     requestAnimationFrame(animation)
    //   }

    // }

    // componentDidMount(){
    //   this.initThree()
    // }

    render(){
      return (
        <div id='canvas-frame'></div>
      )
    }
}

export default ThreeImportDemo