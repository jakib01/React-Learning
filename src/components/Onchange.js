import React, {Component} from 'react';

class OnChange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            changedValue: ''
        }
    }

    handleOnchange = (e) => {
        this.setState({
            changedValue: e.target.value
        })
    }

    render() {
        return (
            <div className="container mt-4">

                <div className="row">
                    <div className="col-md-12">
                        <h1>OnChane Text input value show</h1>
                    </div>
                </div>
                <br/>

                <div className="form-group row mt-4">
                    <label className="col-md-2 col-form-label"><b>Text Field :</b></label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" placeholder="type something"
                               onChange={this.handleOnchange}/>
                    </div>
                </div>

                <div className="form-group row mt-4">
                    <label className="col-md-2 col-form-label"><b>Text Field Output :</b></label>
                    <div className="col-md-10 ">
                        <h3>{this.state.changedValue}</h3>
                    </div>
                </div>

            </div>
        )
    }
}

export default OnChange;