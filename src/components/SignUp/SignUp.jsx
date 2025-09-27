import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase_config_init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = e => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email, password, terms);

        setErrorMessage('');
        setSuccess(false);

        if(!terms){
            setErrorMessage('Please Accept Our Terms and conditions');
            return;
        }

        const passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (passwordRegEx.test(password) === false) {
            setErrorMessage('Password must have one lowercase, one digit and 6 characters or longer')
            return;
        }

        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                setSuccess(true);
            })
            .catch(error => {
                console.log(error);
                setErrorMessage(error.message)
            })

    }
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-bold">Please SignUp now!</h1>
                <form onSubmit={handleSignUp}>
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label mt-4">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            className="input"
                            placeholder="Password"

                        />
                        <button
                            onClick={() => { setShowPassword(!showPassword) }}
                            className="btn btn-xs absolute top-2 right-8">
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </button>
                    </div>
                    <div><a className="link link-hover">Forgot password?</a></div>

                    <label className="label">
                        <input type="checkbox" name="terms"
                        className="checkbox" />
                        Accept terms and condition!
                    </label>
                    <br />
                    <button className="btn btn-neutral mx-auto mt-4">SignUp</button>
                </form>
                {
                    errorMessage && <p className="text-shadow-red-500">{errorMessage}</p>
                }
                {
                    success && <p className="text-indigo-600">User has create successfully </p>
                }
            </div>
        </div>
    )
}
export default SignUp;