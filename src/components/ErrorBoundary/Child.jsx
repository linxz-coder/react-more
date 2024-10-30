import React, { Component } from 'react'

export default class Child extends Component {
    state = {
/*         users: [
            { id: '001', name: 'Tom', age: 18 },
            { id: '002', name: 'Jerry', age: 21 },
            { id: '003', name: 'Jack', age: 25 }
        ] */

            users : 'abc'
    }

  render() {
    return (
      <div>
        <h2>我是Child组件</h2>
        <ul>
            {
                this.state.users.map((userObj) => {
                    return <li key={userObj.id}>{userObj.name}---{userObj.age}</li>
                })
            }
        </ul>
      </div>
    )
  }
}
