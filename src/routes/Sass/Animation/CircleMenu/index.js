import React, { Component } from 'react'
import './index.scss'

export default class circleMenu extends Component {

  render() {
    return (
      <div className="body">
        <div class="menu">
          <input type="checkbox" id="btn" />
          <label class="btn" for="btn"></label>
          <ul class="list">
            <li class="item" title="Codepen"></li>
            <li class="item" title="Codrops"></li>
            <li class="item" title="Github"></li>
            <li class="item" title="WDL"></li>
            <li class="item" title="noupe"></li>
            <li class="item" title="Magzine"></li>
            <li class="item" title="Awwwards"></li>
            <li class="item" title="Tricks"></li>
            <li class="item" title="WebPlatForm"></li>
            <li class="item" title="etc."></li>
          </ul>
        </div>
      </div>
    )
  }
}