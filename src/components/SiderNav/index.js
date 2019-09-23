import React from 'react'
import CustomMenu from '../CustomMenu/index'

const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: 'AntdUI',
    icon: 'laptop',
    key: '/AntdUI',
    subs: [
      {
        key: '/AntdUI/general', title: '基本组件', icon: '',
        subs: [
          { key: '/Antd/general/button', title: '按钮', icon: '', },
          { key: '/Antd/general/icon', title: '图标', icon: '', },
        ]
      },
      {
        key: '/AntdUI/navigation', title: '导航组件', icon: '',
        subs: [
          { key: '/Antd/navigation/dropdown', title: '下拉菜单', icon: '' },
          { key: '/Antd/navigation/menu', title: '导航菜单', icon: '' },
          { key: '/Antd/navigation/steps', title: '步骤条', icon: '' },
        ]
      },
      {
        key: '/AntdUI/entry', title: '输入组件', icon: '',
        subs: [
          { key: '/Antd/entry/basic-form', title: '基础表单', icon: '' },
          { key: '/Antd/entry/step-form', title: '分步表单', icon: '' },
          { key: '/Antd/entry/upload', title: '上传', icon: '' },
        ]
      }
    ]
  },
  {
    title: 'Sass应用',
    icon: 'laptop',
    key: '/Sass',
    subs: [
      { key: '/Sass/Animation/loadingAnimation', title: '加载动画', icon: '', },
      { key: '/Sass/Animation/circleMenu', title: '圆形菜单', icon: '', },
      { key: '/Sass/Animation/flowers', title: '小花加载动画', icon: '', }
    ]
  },
  {
    title: '数据可视化',
    icon: 'laptop',
    key: '/Ksh',
    subs: [
      { key: '/Ksh/Map/Loca', title: '高德Loca', icon: '', },
    ]
  },
  {
    title:'React学习',
    icon:'bars',
    key:'React/doc',
    subs:[
      {key:'/React/doc/state',title:'state&生命周期',icon:''}
    ]
  },
  {
    title:'threeJs学习',
    icon:'edit',
    key:'threeJs/doc',
    subs:[
      {key:'/threeJs/doc/import',title:'threeJs',icon:''},
      {key:'/threeJs/doc/chair',title:'椅子',icon:''}
    ]
  },
  {
    title:'CSS学习',
    icon:'edit',
    key:'Css',
    subs:[
      {key:'/Css/Animation',title:'动画',icon:'',subs:[
        {key:'/Css/Animation/circleLoding',title:'圆球加载',icon:''}
      ]}
    ]
  },
  {
    title:'D3',
    icon:'desktop',
    key:'D3/doc',
    subs:[
      {key:'/D3/doc/state',title:'D3',icon:''}
    ]
  },
  {
    title: '一题',
    icon: 'laptop',
    key: '/DailyInterviewQuestion',
    subs: [
      {
        key: 'DailyInterviewQuestion/DCss', title: 'Css', icon: '',
        subs: [
           {key: '/DailyInterviewQuestion/DCss/BFC', title: 'BFC及其应用', icon: '', }
        ]
      },
      {
        key: 'DailyInterviewQuestion/DJS', title: 'Css', icon: '',
        subs: [
           {key: '/DailyInterviewQuestion/DJS/mapParseInt', title: 'map和parseInt', icon: '', }
        ]
      },
  
    ]
  },
  {
    title: '其它',
    icon: 'bulb',
    key: '/home/other',
    subs: [
      { key: '/home/other/animation', title: '动画', icon: '', },
      { key: '/home/other/gallery', title: '画廊', icon: '', },
      { key: '/home/other/draft', title: '富文本', icon: '' },
      { key: '/home/other/chart', title: '图表', icon: '' },
      { key: '/home/other/loading', title: '加载动画', icon: '' },
      { key: '/home/other/404', title: '404', icon: '' },
      { key: '/home/other/springText', title: '弹性文字', icon: '' },
    ]
  },
  {
    title: '关于',
    icon: 'info-circle-o',
    key: '/home/about'
  }
]


class SiderNav extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', overflowY: 'scroll' }} >
        <div style={styles.logo}> </div>
        <CustomMenu menus={menus} />
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255,255,255,.2)',
    margin: '16px'
  }
}

export default SiderNav