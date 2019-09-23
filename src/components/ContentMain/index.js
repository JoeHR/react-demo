import React from 'react'
import {withRouter,Switch,Redirect} from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

// 首页
const Home = LoadableComponent(()=>import('../../routes/Home/index'))   //参数一定要是函数，否则不会懒加载，只会代码拆分

// antd-基本组件 demo
const AntdButtonDemo = LoadableComponent(()=>import('../../routes/Antd/General/ButtonDemo/index'))
const AntdIconDemo = LoadableComponent(()=>import('../../routes/Antd/General/IconDemo/index'))

const AntdDropdownDemo = LoadableComponent(()=>import('../../routes/Antd/Navigation/DropdownDemo/index'))
const AntdMenuDemo = LoadableComponent(()=>import('../../routes/Antd/Navigation/MenuDemo/index'))
const AntdStepDemo = LoadableComponent(()=>import('../../routes/Antd/Navigation/StepDemo/index'))

const AntdBasicFormDemo = LoadableComponent(()=>import('../../routes/Antd/Entry/BasicFormDemo/index'))

// sass 
const loadingAnimation = LoadableComponent(()=>import('../../routes/Sass/Animation/loadingAnimation'))
const circleMenu = LoadableComponent(()=>import('../../routes/Sass/Animation/CircleMenu'))
const flowers = LoadableComponent(()=>import('../../routes/Sass/Animation/flowers'))

// Css
const CSSAniCircleLoading = LoadableComponent(()=>import('../../routes/Css/Animation/circleLoading'))

// 可视化
const KshAMapLoca = LoadableComponent(()=>import('../../routes/Ksh/Map/kshAMapLoca'))

// const AntdStepFromDemo = LoadableComponent(()=>import('../../routes/Antd/Entry/StepFormDemo/index'))
// const AntdUploadDemo = LoadableComponent(()=>import('../../routes/Antd/Entry/UploadDemo/index'))

// threeJs
const ThreeImportDemo = LoadableComponent(()=>import('../../routes/ThreeJs/ImportDeamo/index'))
// const ThreeChairDemo = LoadableComponent(()=>import('../../routes/ThreeJs/ChairDemo/index'))

// 一题
 
//关于
// const About = LoadableComponent(()=>import('../../routes/About/index'))

@withRouter
class ContentMain extends React.Component{
  render(){
    return (
      <div style={{padding:16,position:'relative',width:'100%',height:'100%'}}>
        <Switch>
          <PrivateRoute exact path='/home' component={Home}/>

          <PrivateRoute exact path='/Antd/general/button' component={AntdButtonDemo}/>
          <PrivateRoute exact path='/Antd/general/icon' component={AntdIconDemo}/>

          <PrivateRoute exact path='/Antd/navigation/dropdown' component={AntdDropdownDemo}/>
          <PrivateRoute exact path='/Antd/navigation/menu' component={AntdMenuDemo}/>
          <PrivateRoute exact path='/Antd/navigation/steps' component={AntdStepDemo}/>

          <PrivateRoute exact path='/Antd/entry/basic-form' component={AntdBasicFormDemo}/>

          {/* sass */}
          <PrivateRoute exact path='/Sass/Animation/loadingAnimation' component={loadingAnimation} />
          <PrivateRoute exact path='/Sass/Animation/circleMenu' component={circleMenu} />
          <PrivateRoute exact path='/Sass/Animation/flowers' component={flowers} />

          {/* CSS */}
          <PrivateRoute exact path='/Css/Animation/circleLoding' component={CSSAniCircleLoading} />

          {/* 可视化 */}
          <PrivateRoute exact path='/Ksh/Map/Loca' component={KshAMapLoca} />

          {/* threeJS */}
          <PrivateRoute exact path='/threeJs/doc/import' component={ThreeImportDemo} />
          {/* <PrivateRoute exact path='/threeJs/doc/chair' component={ThreeChairDemo} /> */}
          {/* <PrivateRoute exact path='/Antd/entry/step-form' component={AntdStepFromDemo}/>
          <PrivateRoute exact path='/Antd/entry/upload' component={AntdUploadDemo}/> */}

          {/* <PrivateRoute exact path='/home/about' component={About}/> */}

          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain