import React, {useState} from "react";

function Form() {

    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [phoneNumber,setPhoneNumber]= useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleSubmit = (e) =>{
        let userInfo={
            name: name,
            email: email,
            phoneNumber: phoneNumber
        }
        console.log(userInfo)
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
                           onChange={handleNameChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                           id="email"
                           name="email"
                           value={email}
                           onChange={handleEmailChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" className="form-control" placeholder="phone number"
                           id="phoneNumber"
                           name="phoneNumber"
                           value={phoneNumber}
                           onChange={handlePhoneChange}
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