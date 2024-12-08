import { useRef, useState } from 'react';

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

  const email = useRef('email');
  const password = useRef('password');

  function handleSubmit(event) {
    event.preventDefault(); // prevents the default browser form submission

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    // const emailIsInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail);
    const emailIsvalid = enteredEmail.includes('@' && '.');
    const passwordIsInvalid = enteredPassword.trim().length < 6;

    if (!emailIsvalid) {
      setEmailIsInvalid(true);
      return;
    }
    if (passwordIsInvalid) {
      setPasswordIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);

    console.log("sending data to the server...");
    // console.log(enteredEmail, enteredPassword);
  } 


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            ref={email}
            />
            <div className="control-error">
              {emailIsInvalid && 'Please enter a valid email address'}
            </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            ref={password}
            />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* default type is submit on a button element inside a form element */}
        <button className="button">Login</button> 
      </p>
    </form>
  );
}
