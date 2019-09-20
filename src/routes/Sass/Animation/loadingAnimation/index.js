import React from 'react'
import './index.scss'

export default class loadingAnimation extends React.Component {

  render() {
    return (
      <div className="body">
        <div class="preloader loading">
        <span class="slice"></span>
        <span class="slice"></span>
        <span class="slice"></span>
        <span class="slice"></span>
        <span class="slice"></span>
        <span class="slice"></span>
        </div>
      </div>
    )
  }
}