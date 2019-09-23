import React, { Component } from 'react'
import './index.scss'

export default class circleMenu extends Component {

  render() {
    return (
      <div className="body">
        <div className="menu">
          <input type="checkbox" id="btn" />
          <label className="btn" htmlFor="btn"></label>
          <ul className="list">
            <li className="item" title="Codepen"></li>
            <li className="item" title="Codrops"></li>
            <li className="item" title="Github"></li>
            <li className="item" title="WDL"></li>
            <li className="item" title="noupe"></li>
            <li className="item" title="Magzine"></li>
            <li className="item" title="Awwwards"></li>
            <li className="item" title="Tricks"></li>
            <li className="item" title="WebPlatForm"></li>
            <li className="item" title="etc."></li>
          </ul>
        </div>
      </div>
    )
  }
}