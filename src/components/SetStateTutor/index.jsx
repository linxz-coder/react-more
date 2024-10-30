import React, { Component } from 'react'

export default class Demo extends Component {
    state = {count: 0}

    increment = () => {
/*         // 对象式的setState
        // 获取原来的count值
        const {count} = this.state
        // 更新状态
        // this.setState({count: count + 1}) //react状态更新是异步的。
        this.setState({count: count + 1}, ()=>{
            console.log(this.state.count)
        }) //react状态更新是异步的, 但是回调函数是在render结束之后执行的。如果使用useState，需要配合useEffect来实现回调函数的功能。 */

        // 函数式的setState
        this.setState((state, props) => {
            return {count: state.count + 1}
        })
    
    }
  
    render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.increment}>点我+1</button>
      </div>
    )
  }
}
