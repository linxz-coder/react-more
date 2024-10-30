import React, { Component } from 'react'
import './index.css'

/* render相当于vue里面的slot插槽 */

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        {/* <A>Hello</A>  要想显示Hello，需要在A组件中显示props.children{this.props.children} */}
        <A render={(name)=><B name={name}/>}/>
      </div>
    )
  }
}

class A extends Component {
    state = {name: 'Tom'}

  render() {
    console.log(this.props);
    const {name} = this.state
    return (
      <div className='a'>
        <h3>我是A组件</h3>
        {this.props.render(name)}
        {/* {this.props.children} */}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='b'>
        <h3>我是B组件,收到的是{this.props.name}</h3>
      </div>
    )
  }
}