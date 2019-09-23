import React,{Component} from 'react'
import PropTypes from 'prop-types'
import AMapLoad from '../../../../utils/LoadAMap'

const data = require('./data.json')
// const data = require('./china.json')
console.log(data)
const Children  = React.Children

export default class kshAMapLoca extends Component{

  state={
    mapLoaded:false,
    layer:null,
    map:null,
  }

  // 如果传递 该属性 ,该属性必须为 对象Object
  static childContextTypes = {
    layer:PropTypes.object,
    map:PropTypes.object
  }

  constructor(props){
    super(props)
    new AMapLoad().loadAll().then(()=>{
      this.createInstance()
    })
  }

  getChildContext=()=>({
    layer:this.state.layer
  })

  createInstance(){
    const AMap = window.AMap
    const Loca = window.Loca
    const colors = ["#08519c"]
    console.log(Loca)
    this.map = new AMap.Map('map',{
      mapStyle: 'amap://styles/grey', // 样式URL
      center: [120.19382669582967, 30.258134],
      pitch: 50,
      rotation: 0,
      viewMode: '3D',
      zoom: 8,
      features: ['bg', 'road','building']
    })

    this.layer = new Loca.PolygonLayer(
      {
        map:this.map,
        fitView:true
      }
    )
    this.layer.setData(data,{
      lnglat:'lnglat'
    })

    let idex = 0;

    this.layer.setOptions({
      style:{
        height:function(){
          return Math.random*20000
        },
        opacity:0.9,
        color:function(){
          return colors[idex++ % colors.length]
        }
      }
    })

    this.layer.render()

    
    // @eslint-ignore
    console.log(window.AMap,window.Loca)
  }

  renderChildren() {
    // return Children.map(this.props.children, child => {
    //   if (child) {
    //     return React.cloneElement(child, {
    //       layer: this.layer
    //     })
    //   }
    //   return child
    // })
  }

  render(){
    return (
      <div style={{width:'100%',height:'100%'}}>
        <div id='map' style={{width:'100%',height:'100%'}} ref={div=>{this.mapWrapper = div}}>
        {this.state.mapLoaded ? null : this.props.loading || null}
        </div>
        <div>{this.state.mapLoaded ? this.renderChildren() : null}</div>
      </div>
    )
  }
}