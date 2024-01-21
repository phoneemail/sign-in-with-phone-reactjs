
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import * as jose from 'jose';
  import { useLocation } from 'react-router-dom';
  const API_KEY = '********************************'   //Replace your API key 
  export default function Success() {
      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      // Access specific query parameters
      const param1 = queryParams.get('phtoken');
      const [data, setData] = useState({});
      const [count, setCount] = useState(0)
  
      useEffect(() => {
          const fetchCount = async (token) => {
              const dataToSend = new FormData();
              dataToSend.append('merchant_phone_email_jwt', token)
              const responsedata = await axios.post(`https://eapi.phone.email/email-count`, dataToSend);
              setCount(responsedata.data)
          }
          const decodeToken = async (token) => {
              const secret = new TextEncoder().encode(API_KEY)
              const { payload } = await jose.jwtVerify(token, secret, 'RS256');
              setData(payload)
          }
          fetchCount(param1)
          decodeToken(param1)
      }, []);
  
      const handleClick = () => {
          window.open('https://web.phone.email', '_blank')
      };
      return (
          <>
              <div className='container' style={{ position: 'absolute', top: '50%', left: '50%', width: '325px', height: '200px', margin: '-100px 0 0 -100px' }}>
                  <button onClick={handleClick} type="button" className="phem-nt-btn mr-20"
                      style={{ borderRadius: '4px', padding: '0px', fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji', fontSize: '14px', lineHeight: '20px', fontWeight: '400', textDecoration: 'none', position: 'relative', border: 'none', margin: '20px 16px', cursor: 'pointer', backgroundColor: '#fff', float: 'right' }}>
                      <span>
                          <svg width="32" height="23" viewBox="0 0 32 23" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M30.4594 0H1.60313C0.734767 0 0 0.734767 0 1.60313V20.7071C0 21.5754 0.734767 22.3102 1.60313 22.3102H30.3926C31.261 22.3102 31.9958 21.5754 31.9958 20.7071V1.60313C32.0626 0.734767 31.3278 0 30.4594 0ZM16.0313 14.7621L2.2711 1.33594H29.7915L16.0313 14.7621ZM10.4871 11.2219L1.33594 20.1059V2.2711L10.4871 11.2219ZM11.4223 12.1571L15.5637 16.1649C15.8309 16.4321 16.2317 16.4321 16.4989 16.1649L20.6403 12.0903L29.7247 20.9743H2.3379L11.4223 12.1571ZM21.5754 11.2219L30.7266 2.2711V20.1059L21.5754 11.2219Z"
                                  fill="#024430" />
                          </svg>
                      </span>
  
                      <span className="phem-pill-badge phem-blink" id="btn_view_email"
                          style={{ top: '0', left: '100%', transform: 'translate(-50%, -50%)', display: 'block', lineHeight: '1', textAlign: 'center', verticalAlign: 'baseline', color: '#fff', fontSize: '12px', borderRadius: '100px', whiteSpace: 'nowrap', padding: '2px 3px', fontWeight: 'bold', backgroundColor: 'red', height: '20px', width: '20px', position: 'absolute' }}>{count}
                      </span>
                  </button>
                  <div className="card" style={{ width: '18rem', background: '#FEECB5', padding: '20px' }}>
                      <div className="card-body">
                          <h5 className="card-title">You are logged in with</h5>
                          <p className="card-text">{data.country_code}{data.phone_no}</p>
                      </div>
                  </div>
              </div>
  
          </>
      )
  }
  
