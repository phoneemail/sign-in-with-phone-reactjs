import React from 'react';

function YourComponent() {
  const COUNTRY_CODE = 'your_country_code';
  const PHONE_NO = 'your_phone_number';
  const REDIRECT_URL = 'your_redirect_url';

  const openLoginWindow = () => {
    window.open(
      `https://auth.phone.email/sign-in?countrycode=${COUNTRY_CODE}&phone_no=${PHONE_NO}&redirect_url=${REDIRECT_URL}`,
      'peLoginWindow',
      'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0, width=500, height=500, top=' + (window.screen.height - 500) / 2 + ', left=' + (window.screen.width - 500) / 2
    );
  };

  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 15px',
        backgroundColor: '#02BD7E',
        fontWeight: 'bold',
        color: '#ffffff',
        border: 'none',
        borderRadius: '3px',
        fontSize: 'inherit',
        cursor: 'pointer',
      }}
      id="btn_ph_login"
      name="btn_ph_login"
      type="button"
      onClick={openLoginWindow}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: '5px', fill: '#ffffff' }}
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
      </svg>
      Sign in with Phone Number
    </button>
  );
}

export default YourComponent;
