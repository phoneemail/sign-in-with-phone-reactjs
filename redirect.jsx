// JWT Validation Code for React Js
import React, { useEffect } from 'react';
import { useJwt } from "react-jwt";
const token = "";
function Redirect() {
  const { decodedToken, isExpired } = useJwt(token);
  /*
    If is a valid jwt, 'decodedToken' will be a object
    it could look like:
    {
      "name": "Gustavo",
      "iat": 1596408259,
      "exp": 4752168259
    }

    'isExpired' will return a boolean
    true => your token is expired
    false => your token is not expired
  */
  
    return (
      <div>
        {/* Your component JSX */}
      </div>
    );
  }
  
  export default Redirect;