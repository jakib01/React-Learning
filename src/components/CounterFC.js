import React, {useState} from 'react'

function CounterFC() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count +1)
    }

    return (
        <div className="container mt-4">

            <div className="row">
                <div className="col-md-12">
                    <h1>Counter using functional components</h1>
                </div>
            </div>
            <br/>

            <h3>Count: {count}</h3>
            <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default CounterFC;