import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstNameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const createUser = (e) => {
        e.preventDefault();  /* to prevent default bahavior refreshing the page*/
        /* to bring all filed together declare a new object */
        const newUser = { firstname, lastname, email, password, confirmpassword };

        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const firstName = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        }
        else {
            setFirstNameError("");
        }

    };

    const lastName = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last Name is required!");
        }
        else {
            setFirstNameError("");
        }

    };

    const emailAddress = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        }
        else {
            setEmailError("");
        }

    };

    const userPassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password is required it must be 8 character!");
        }
        else {
            setPasswordError("");
        }

    };

    const userConfirmpassword = (e) => {
        setConfirmPassword(e.target.value);
        if (confirmpassword != password) {
            setConfirmPasswordError("Password must match and it must be 8 character!");
        }
        else {
            setConfirmPasswordError("");
        }

    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <div>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                        <h3>Thank you for submitting the form!</h3> :
                        <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>FirstName: </label>
                    <input type="text" onChange={firstName} />
                    {
                        firstnameError ?
                            <p style={{ color: 'red' }}>{firstnameError}</p> :
                            ''                             /* treat empty string being falsy*/
                    }
                </div>
                <div>
                    <label>LastName: </label>
                    <input type="text" onChange={lastName} />
                    {
                        firstnameError ?
                            <p style={{ color: 'red' }}>{lastnameError}</p> :
                            ''                             /* treat empty string being falsy*/
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={emailAddress} />
                    {
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={userPassword} />
                    {
                        passwordError ?
                            <p style={{ color: "red" }}>{passwordError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type="text" onChange={userConfirmpassword} />
                    {
                        confirmpasswordError ?
                            <p style={{ color: 'red' }}>{confirmpasswordError}</p> :
                            ''
                    }
                </div>
                <input type="submit" on value="Create User" />
            </form>
            <div>
                <h4> Form Data</h4>
                <p> First Name: {firstname}</p>
                <p> Last Name:{lastname}</p>
                <p> Email: {email} </p>
                <p> Password: {password}</p>
                <p> Confirm Password: {confirmpassword}</p>
            </div>
        </div>
    );
}


export default UserForm;
