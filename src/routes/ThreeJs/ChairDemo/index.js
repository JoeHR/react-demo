import React,{Component} from 'react'
import ThreeChair from './ThreeChair'

class ThreeChairDemo extends Component{


  componentDidMount(){
    new ThreeChair({
      element:document.getElementById('threeChair')
    })
  }



  render(){
    return (
      <div id="threeChair"></div>
    )
  }
} 


export default ThreeChairDemo