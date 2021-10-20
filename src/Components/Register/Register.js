// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import { Form } from 'react-bootstrap';
// import './Register.css'
// import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";



// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [user, setUser] = useState({});

//     const handelEmail = e => {
//         setEmail(e.target.value)
//     }
//     const handelPassword = e => {
//         setPassword(e.target.value)
//     }

//     const auth = getAuth();
//     const handelRegister = e => {
//         e.preventDefault();
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in 
//                 setUser(userCredential.user);
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 // ..
//             });
//         console.log(user);
//     }

//     const signInWithEmailPassword = () => {
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in 
//                 setUser(userCredential.user);
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//             });

//     }

//     return (
//         <Form className="form" onSubmit={handelRegister}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" onBlur={handelEmail} />
//                 <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                 </Form.Text>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" onBlur={handelPassword} />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//                 Submit
//             </Button>
//         </Form>
//     );
// };

// export default Register

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";


const Register = () => {
    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password Must contain 1 upper case');
            return;
        }
        
        if(isLogin){
            processLogIn(email,password)
        }else{
            registerNewUser(email,password)
        }

    }
    
    const processLogIn=(email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          setError(error.message);
        });
      
    }


    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName=()=>{
        updateProfile(auth.currentUser,{displayName:name})
        .then(result=>{ })
    }
    return (
        <div className="login-form">
            <div>
                <form onSubmit={handleRegistration}>
                    <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                    </div>}
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already Registered?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-primary">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;