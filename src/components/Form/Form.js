import React, {useState} from "react";

function Form() {

    const [user,setUser]= useState({name:"", email:"", phoneNumber:"" })
    const {name,email,phoneNumber} = user;

    const handleChange = (e) =>{
        setUser({...user,[e.target.name]: e.target.value })
    }

    const handleSubmit = (e) =>{
        console.log(user)
        e.preventDefault()
    }


    return (

        <div className="container mt-4">
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" placeholder="Enter name"
                           id="name"
                           name="name"
                           value={name}
                           onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                           id="email"
                           name="email"
                           value={email}
                           onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" className="form-control" placeholder="phone number"
                           id="phoneNumber"
                           name="phoneNumber"
                           value={phoneNumber}
                           onChange={handleChange}
                    />
                </div>

                <div className="form-group mt-4">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Form;