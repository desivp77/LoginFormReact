import * as React from "react"; 
import styles from "./LoginForm.module.scss";
 
export default function LoginForm({ cards = []}) {

  return (
 
     <div className="form">
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="username" /> 
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="password" /> 
       </div>
 
         <input type="submit" />

     </form>
   </div> 
  );
}
