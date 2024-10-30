import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    state = {
        hasError: false //用于标识子组件是否产生错误
    }

    // 当子组件抛出错误，会触发调用并携带错误信息
    static getDerivedStateFromError(error) {
        console.log('@@@', error);
        return {hasError: true}
    }

    // 此处统计错误，反馈给服务器
    componentDidCatch(error, info) {
        console.log('catch', error, info);
    }

  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError ? <h2>网络不稳定，稍后再试</h2> : <Child/>}
      </div>
    )
  }
}
