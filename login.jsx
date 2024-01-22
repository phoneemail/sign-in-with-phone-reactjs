import React, { useState } from 'react';
export default function Login() {
  const userInfo = {
    "iss": "phmail",
    "aud": "user",
    "country_code": "+91",   //Replace with your country code
    "phone_no": "**********" // Replace with your phone number
  }
  const URL = `https://auth.phone.email/sign-in?countrycode=${userInfo.country_code}&phone_no=${userInfo.phone_no}&redirect_url=https://dashing-concha-578106.netlify.app/success&auth_type=`;
  const [windowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const openUrl = (url) => {
    const popupFeatures = 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0, width=500,height=560,scrollbars=yes,top=' + (windowDimensions.height - 300) / 2 + ',left=' + (windowDimensions.width - 500) / 2;
    window.open(url, '_blank', popupFeatures);
  };
  return (
    <div className="App">
      <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <button style={{ alignItems: "center", backgroundColor: "#02BD7E", color: "#ffffff", justifyContent: "space-between", padding: "10px 15px", fontWeight: "bold", border: "none", borderRadius: "3px", fontSize: "inherit", cursor: "pointer" }}
          id="btn_ph_login"
          name="btn_ph_login"
          type="button" onClick={() => openUrl(URL)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "5px", fill: "#ffffff" }}
            height="24"
            viewBox="0 -960 960 960"
            width="24">
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
          </svg> Sign in with Phone Number </button>
      </div>

    </div>
  );
}