const Child = ({ change}) => {
    const onChange = () => {
        change()
    }
    return <input onChange={onChange}/>
}

const Parent = () => {
    const change = () => {
        console.log("child notify me")
    }

    return <Child change={change}/>
}

// In a typical parent/child relationship in React, it's recommended that a prop value should
// not be changed by the child. Instead, it should be done through a function prop.