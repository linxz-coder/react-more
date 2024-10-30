import {useState, useEffect, useRef} from 'react'

export default function Demo(root) {
    console.log(root);

    const [count, setCount] = useState(0)
    const myRef = useRef()


    // 模拟componentDidMount和componentDidUpdate，到底要模拟哪个，看第二个参数怎么传
    // 不写空数组，指谁也不监测，渲染后、更新后都会执行
    // 写空数组，只监测第一次渲染，只执行一次
    // 写Count，监测Count，只要Count变化，就会执行
    useEffect(() => {
        console.log('useEffect()')
    }, [count])

    const add = () => {
        setCount(count + 1);
    }

    const show = () => {
        alert(myRef.current.value)
    }

  return (
    <div>
        <input type="text" ref={myRef} />
        <h2>当前求和为：{count}</h2>
        <button onClick={add}>点我加1</button>
        <button onClick={show}>点我提示数据</button>
    </div>
  )
}
