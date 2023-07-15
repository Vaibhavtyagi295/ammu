import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./login.css";

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otpTimer, setOtpTimer] = useState(120);
  const [otpExpired, setOtpExpired] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const history = useNavigate();

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const checkUserExists = async () => {
    try {
      const response = await axios.post('/api/user/check', { phoneNumber });
      if (response.data.exists) {
        setUserExists(true);
      } else {
        setUserExists(false);
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
    }
  };

  const handleGenerateOtp = async () => {
    try {
      if (userExists) {
        const response = await axios.post('/api/user/login',{ phoneNumber });
        if (response.data.success) {
          // Login successful, redirect to the desired page
          history('/user');
        } else {
          console.log('Login failed');
        }
        return;
      }

      const response = await axios.post('/api/otp/generate', { phoneNumber });
      if (response.data.success) {
        setShowOtpSection(true);
        startTimer();
      } else {
        console.log('Failed to generate and send OTP');
      }
    } catch (error) {
      console.error('Error generating and sending OTP:', error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('/api/otp/verify', { phoneNumber, otp });
      if (response.data.success) {
        // OTP verified successfully, perform desired action (e.g., user creation or additional verification)
        console.log('OTP verified successfully');
      } else {
        console.log('Invalid OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const startTimer = () => {
    setOtpTimer(120);
    setOtpExpired(false);

    const interval = setInterval(() => {
      setOtpTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          setOtpExpired(true);
          setShowOtpSection(false);
          return prevTimer;
        }
      });
    }, 1000);
  };

  useEffect(() => {
    if (showOtpSection) {
      startTimer();
    }
  }, [showOtpSection]);

  useEffect(() => {
    checkUserExists();
  }, [phoneNumber]);

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: '185px' }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
            </div>
            {!showOtpSection && (
              <>
                <p>Please enter your mobile number</p>
                <MDBInput wrapperClass='mb-4' label='Mobile number' id='form1' type='tel' value={phoneNumber} onChange={handlePhoneNumberChange} />
                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleGenerateOtp}>
                    Send OTP
                  </MDBBtn>
                  <a className="text-muted" href="#!">Forgot password?</a>
                </div>
              </>
            )}
            {showOtpSection && (
              <div className="text-center pt-1 mb-5 pb-1">
                <p>Enter OTP received on your mobile number:</p>
                <MDBInput wrapperClass='mb-4' label='OTP' id='form2' type='text' value={otp} onChange={handleOtpChange} />
                {otpExpired ? (
                  <p>OTP has expired. Please generate a new OTP.</p>
                ) : (
                  <>
                    <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleVerifyOtp}>
                      Verify OTP
                    </MDBBtn>
                    <p>{otpTimer} seconds left to verify</p>
                  </>
                )}
              </div>
            )}
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='danger'>
                Danger
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
