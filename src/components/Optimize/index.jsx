import React, { memo,PureComponent, useState } from 'react'
import './index.css'

// export default class Parent extends PureComponent {
//     state = {carName: '奔驰c63'}

//     changeCar = () => {
//         this.setState({carName: '迈巴赫'})
//     }

// /*     shouldComponentUpdate(nextProps, nextState) {
//         // console.log(this.props, this.state); //目前的props和state
//         // console.log(nextProps, nextState); //接下要变化的目标props和state
//         //return true // true: 更新  false: 不更新
//         return this.state.carName !== nextState.carName;
//     } */

//   render() {
//     console.log('Parent---render');
//     const {carName} = this.state
//     return (
//       <div className='parent'>
//         <h3>我是Parent组件</h3>
//         <span>我的车名字是：{carName}</span><br/>
//         <button onClick={this.changeCar}>点我换车</button>
//         <Child />
//       </div>
//     )
//   }
// }

// class Child extends PureComponent {

// /*   shouldComponentUpdate(nextProps, nextState) {
//         console.log(this.props, this.state); //目前的props和state
//         console.log(nextProps, nextState); //接下要变化的目标props和state
//         // return true // true: 更新  false: 不更新

//         return this.props.carName !== nextProps.carName
//     } */
  
//   render() {
//     console.log('Child---render');
//     return (
//       <div className='child'>
//         <h3>我是Child组件</h3>
//         {/* <span>我接收到的车是：{this.props.carName}</span> */}
//       </div>
//     )
//   }
// }

export default memo(function Parent() {
    const [carName, setCarName] = useState('奔驰c63')

    const changeCar = () => {
      setCarName('迈巴赫')
    }

    console.log('Parent---render');

    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        <span>我的车名字是：{carName}</span><br/>
        <button onClick={changeCar}>点我换车</button>
        <Child />
      </div>
    )
})

const Child = memo(function Child() {
    console.log('Child---render');
    return (
      <div className='child'>
        <h3>我是Child组件</h3>
      </div>
    )
});