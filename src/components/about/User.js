import { useState } from 'react'

const User = (props) => {
    const [count,setCount] = useState(0);
    const {name} = props;
    const handlechange =() =>{
        setCount(count+1);
    }
    return(
        <div className="detailsContainer">
            <h2>Name : {name}</h2>
            <h3>Location: Manglore</h3>
            <p>{count}</p>
            <button onClick={handlechange}>click</button>
        </div>
    )
}

export default User;