import React from "react";

// import Data from './data.json'

function Card(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card border shadow mt-4">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{props.firstName}</li>
                            <li className="list-group-item">{props.lastName}</li>
                            <li className="list-group-item">{props.email}</li>
                            <li className="list-group-item">{props.country}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;