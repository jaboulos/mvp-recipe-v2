// import React, { Component } from 'react';
// import { reduxForm, Field } from 'redux-form';

// class SignUp extends Component {
//   render() {
//     return (
//       <div>
//         <form>

//           <fieldset>
//             <Field
//               name="email"
//               type="text"
//               id="email"
//               component="input" />
//           </fieldset>

//           <fieldset>
//             <Field
//               name="password"
//               type="password"
//               id="password"
//               component="input" />
//           </fieldset>

//           <button type="submit" className="btn btn-primary">Sign Up</button>

//         </form>
//       </div>
//     );
//   }
// }

// //export the reduxForm and wrap the Signup component inside of it
// //inside of reduxForm({}) as an argument, pass in an object with a property called form and specifiy the name of the form that
// //redux-form will register in redux
// export default reduxForm({ form: "signup" })(SignUp)

import React, { Component } from 'react';
import '../App.css';
class SignUp extends Component {
  render() {
    return (
      <div className="signin">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input type='text' name='email' onChange={this.handleEmail}></input>
          </div>
          <div>
            <label>Password:</label>
            <input type='text' name='password' onChange={this.handlePassword}></input>
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type='text' name='password' onChange={this.handlePassword}></input>
          </div>
          <div>
            <input type='submit' value='Register Account'></input>
          </div>
        </form>

      </div>
    )
  }
}

export default SignUp

