import "./LogIn.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import { loginUser } from '../../../Services/apiUtils';
import React from 'react';

import { Link, Navigate, useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email({ message: "Invalid email adress" }),
  password: z
    .string()
    .min(8, { message: "Password is be at least 8 characters" }),
});

type Formdata = z.infer<typeof schema>;

export const LogIn = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Formdata>({
    resolver: zodResolver(schema),
  });

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisible((prevVisible) => !prevVisible);
  }, []);



  const onSubmit: SubmitHandler<Formdata> = async (data) => {
    const { email, password } = data;
    const encryptedPassword = btoa(password);

    const navigate = useNavigate();

    const user = {
      email: email,
      password: encryptedPassword,
    };
    const loginSuccessful = await loginUser(user);


    console.log("Login button clicked");
    console.log("User:", user);
    if (loginSuccessful) {
      // Handle successful login, e.g., redirecting to a dashboard or showing a success message
      console.log('Login successful!');
    } else {
      // Handle failed login, e.g., displaying an error message to the user
      console.error('Login failed!');
    }
    
    navigate("/mainpage")
  };

  return (
    <div className="Login-log-in">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Login-content">
          <div className="Login-header">
            <div className="Login-text-and-supporting-text">
              <div className="Login-logo">
                <img
                  className="Login-logo-image"
                  src="public/Images/logo.png"
                  aria-label="logo accessibility"
                />
              </div>
              <h1 className="Login-text">Inloggen </h1>
              <p className="Login-supporting-text">
                Welkom terug, vul uw details in
              </p>
            </div>
          </div>
          <div className="Login-content2">
            <form className="Login-form">
              <div className="Login-input-field">
                <div className="Login-input-field-base">
                  <div className="Login-input-with-label">
                    <label className="Login-label" htmlFor="Email">
                      Email{" "}
                    </label>
                    <div className="Login-input-base">
                      <div className="Login-content3">
                        <div className="Login-text2">
                          <input
                            id="Email"
                            type="text"
                            placeholder="Vul uw email in"
                            {...register("email")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {errors.email && (
                    <p className="Login-error-message">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="Login-input-field">
                <div className="Login-input-field-base">
                  <div className="Login-input-with-label">
                    <label className="Login-label" htmlFor="Password">
                      Wachtwoord
                    </label>
                    <div className="Login-input-base">
                      <div className="Login-content3">
                        <div className="Login-text2">
                          <input
                            id="Password"
                            type={passwordVisible ? "text" : "password"}
                            placeholder="vul uw wachtwoord in"
                            {...register("password")}
                          />
                        </div>
                      </div>
                      <button
                        className="Login-show-password"
                        onClick={togglePasswordVisibility}
                        type="button"
                      >
                        {passwordVisible ? (
                          <img
                            className="Login-password-visibility"
                            src="/public/images/hide.png"
                            alt="Hide Password"
                          />
                        ) : (
                          <img
                            className="Login-password-visibility"
                            src="/public/images/visible.png"
                            alt="Show Password"
                          />
                        )}
                      </button>
                    </div>
                  </div>
                  {errors.password && (
                    <p className="Login-error-message">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
            </form>
            <div className="Login-row">
              <button className="Login-WwVergeten-button">
                <h3 className="Login-text3">Wachtwoord vergeten? </h3>
              </button>
            </div>
            <div className="Login-actions">
              <button className="Login-loginbutton" type="submit">
                <h3 className="Login-text4">Log in </h3>
              </button>
              <div className="Login-social-button-groups">
                <button className="Login-Google-login">
                  <svg
                    className="Login-social-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_82_553)">
                      <path
                        d="M23.766 12.2765C23.766 11.4608 23.6999 10.6406 23.5588 9.83813H12.24V14.4591H18.7217C18.4528 15.9495 17.5885 17.2679 16.323 18.1056V21.104H20.19C22.4608 19.014 23.766 15.9274 23.766 12.2765Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.50253 14.3002C4.99987 12.8099 4.99987 11.196 5.50253 9.70569V6.61475H1.51649C-0.18551 10.0055 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3002Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_82_553">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3 className="Login-text5">Log in met Google </h3>
                </button>
              </div>
              <button className="Login-microsoft-login">
                <svg
                  className="Login-icon-microsoft"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 1H1V10H10V1Z" fill="#F25022" />
                  <path d="M10 11H1V20H10V11Z" fill="#00A4EF" />
                  <path d="M20 1H11V10H20V1Z" fill="#7FBA00" />
                  <path d="M20 11H11V20H20V11Z" fill="#FFB900" />
                </svg>
                <h3 className="Login-sign-in-with-microsoft">
                  Log in met Microsoft
                </h3>
              </button>
            </div>
          </div>
          <div className="Login-row2">
            <div className="Login-text6">
              <h3 className="Login-text-6-span">Geen account?</h3>
            </div>
            <button className="Login-Registreer-button">
              <Link to={"/register"} className="Login-text7">
                Registreer
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LogIn;
