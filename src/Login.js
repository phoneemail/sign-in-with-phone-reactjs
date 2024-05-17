import React, { useEffect, useState } from "react";

const App = () => {
 
  // Use state to manage user details
  const [userDetails, setUserDetails] = useState({
    countryCode: "",
    phoneNo: ""
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);


    
  const SignInButton = () => {

      // Create a script element
      const script = document.createElement('script');
      script.src = 'https://www.phone.email/sign_in_button_v1.js';
      script.async = true;

      // Append the script to the document body
      document.body.appendChild(script);
      

      const phoneEmailListener = (userObj) => {
        const { user_json_url, user_country_code, user_phone_number } = userObj;
        setIsAuthenticated(true);

        setUserDetails({
          countryCode: user_country_code,
          phoneNo: user_phone_number
        });
        
      // Send Email: We reccomend you to send welcome email to the user.
      //curl --location --request POST "https://api.phone.email/v1/sendmail" --ssl-no-revoke --header "Content-Type: application/json" --data-raw "{'apiKey':'API_KEY','fromCountryCode':'XXX','fromPhoneNo':'XXXXXXXXXX', 'toCountrycode':'XX','toPhoneNo':'XXXXXXXXXX','subject': 'Welcome to YOUR_BUSINESS_NAME','tinyFlag':true,'messageBody':'V2VsY29tZSB0byB5b3VyIEJVU0lORVNTX05BTUU='}"

      // Create Session: Store verified user phone number in session variable.

      // Redirect: Redirect user to the page of your choice as the user has successfully logged in.

      // Handle Logout (Optional): You can create logout button on your website as required.In the event of logout you must clear delete ph_email_jwt cookie and clear your session variables.  To delete cookie simply set it to blank -> setcookie("ph_email_jwt", "", time()-3600);

      
      };

      window.phoneEmailListener = phoneEmailListener;

      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
  };
  
  useEffect(() => {
    if (!isAuthenticated) {
      SignInButton();
    }
  }, [isAuthenticated]);



  return (
    <React.Fragment>
      {!isAuthenticated && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '50px 30px' }}>
          <div style={{ color: '#024430 !important', textAlign: 'center', backgroundColor: '#fff', padding: '30px', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(17, 24, 39, .09)', width: '100%', maxWidth: '420px', margin: '0 auto', fontFamily: 'sans-serif, serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif', lineHeight: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img className="phe-login-img" width="250px" src="https://storage.googleapis.com/prod-phoneemail-prof-images/phem-widgets/phe-signin-box.svg"
              alt="phone email login demo" />
            <h1 style={{ margin: "10px" }}>Sign In</h1>
            <p style={{ color: "#a6a6a6" }}>Welcome to Sign In with Phone</p>
            <div className="pe_signin_button" data-client-id="YOUR_CLIENT_ID"></div>  
          </div>
        </div>
      )}

      {isAuthenticated && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '50px 30px' }}>
          <div style={{ color: '#024430 !important', textAlign: 'center', backgroundColor: '#fff', padding: '30px', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(17, 24, 39, .09)', width: '100%', maxWidth: '420px', margin: '0 auto', fontFamily: 'sans-serif, serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif', lineHeight: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
            <img className="phe-login-img" width="250px" src="https://storage.googleapis.com/prod-phoneemail-prof-images/phem-widgets/phe-signin-success.svg" alt="phone email login demo" />
            <div className="phem-card-body">
              <h1>Welcome!</h1>
              <h4 style={{ lineHeight: "36px" }}>You are logged in successfully with <br />
                {userDetails.countryCode} {userDetails.phoneNo}
              </h4>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px 20px', backgroundColor: '#02BD7E', fontWeight: 'bold', color: '#ffffff', border: 'none', borderRadius: '3px', fontSize: 'inherit', cursor: 'pointer', maxWidth: '320px', width: '100%', }} onClick={() => window.location.href = '/'}>Back</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
