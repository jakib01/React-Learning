import React, {Component} from 'react';

class OnChange extends Component{

    constructor(props) {
        super(props);
        this.state = {
            changedValue : ''
        }
    }

    handleOnchange = (e) =>{
        this.setState({
            changedValue: e.target.value
        })
    }

    render() {
        return(
            <div className="container mt-3">

                <div className="form-group row mt-4">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label"><b>Text Field :</b></label>
                    <div className="col-md-10">
                        <input type="text" className="form-control"  placeholder="type something"  onChange={this.handleOnchange} />
                    </div>
                </div>


                <div className="form-group row mt-4">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label"><b>Text Field Output :</b></label>
                    <div className="col-md-10 ">
                        <h3>{this.state.changedValue}</h3>

                        {/*<input type="text" className="form-control"  placeholder="type something"  onChange={this.handleOnchange} />*/}
                    </div>
                </div>

            </div>
        )
    }
}

export default OnChange;