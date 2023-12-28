import "./LogIn.css";
import { useState } from "react";
export interface ILogInProps {
  className?: string; 
}

export const LogIn = ({ className, ...props }: ILogInProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginClick = () => {
    console.log("Login button clicked");
    console.log("Email:", email);
    console.log("Password:", password);
    /*hier komen de api stuff*/
  };
  return (
    <div className={"log-in " + className}>
      <div className="content">
        <div className="header">
          <div className="text-and-supporting-text">
            <div className="logo">
              <img className="logo-image" src="/Images/logo-image0.png" />
            </div>
            <div className="text">Inloggen </div>
            <div className="supporting-text">
              Welkom terug, vul uw details in
            </div>
          </div>
        </div>
        <div className="content2">
          <form className="form">
            <div className="input-field">
              <div className="input-field-base">
                <div className="input-with-label">
                  <div className="label">Email </div>
                  <div className="input-base">
                    <div className="content3">
                      <div className="text2">
                        <input
                          type="text"
                          placeholder="Vul uw email in"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-field">
              <div className="input-field-base">
                <div className="input-with-label">
                  <div className="label">Wachtwoord</div>
                  <div className="input-base">
                    <div className="content3">
                      <div className="text2">
                        <input
                          type={passwordVisible ? "text" : "password"}
                          placeholder="vul uw wachtwoord in"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      className="show-password"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <img
                          className="password-visibility"
                          src="/public/images/hide.png"
                          alt="Hide Password"
                        />
                      ) : (
                        <img
                          className="password-visibility"
                          src="/public/images/visible.png"
                          alt="Show Password"
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="row">
            <button className="WwVergeten-button">
              <div className="text3">Wachtwoord vergeten? </div>
            </button>
          </div>
          <div className="actions">
            <button className="loginbutton" onClick={handleLoginClick}>
              <div className="text4">Log in </div>
            </button>

            <div className="social-button-groups">
              <button className="Google-login">
                <svg
                  className="social-icon"
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

                <div className="text5">Log in met Google </div>
              </button>
            </div>
            <button className="microsoft-login">
              <svg
                className="icon-microsoft"
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

              <div className="sign-in-with-microsoft">Log in met Microsoft</div>
            </button>
          </div>
        </div>
        <div className="row2">
          <div className="text6">
            <p className="text-6-span">Geen account?</p>
          </div>
          <button className="Registreer-button">
            <div className="text7">Registreer </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
