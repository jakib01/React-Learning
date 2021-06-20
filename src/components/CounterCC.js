import React, {Component} from 'react'

class CounterCC extends Component{

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleIncrement = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(

            <div className="container mt-4">

                <div className="row">
                    <div className="col-md-12">
                        <h1>Counter using class components </h1>
                    </div>
                </div>
                <br/>

                <h3>Count: {this.state.count}</h3>
                <button className="btn btn-primary" onClick={this.handleIncrement} >Increment</button>
            </div>
        )
    }
}

export default CounterCC;

