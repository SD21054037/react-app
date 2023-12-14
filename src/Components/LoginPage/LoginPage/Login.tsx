import "./LogIn.css";

export interface ILogInProps {
  className?: string;
}

export const LogIn = ({ className, ...props }: ILogInProps): JSX.Element => {
  return (
    <div
      className={"log-in " + className}
      
    >
      <div className="content">
        <div className="header">
          <div className="text-and-supporting-text">
            <div className="logo">
              <img className="logo-image" src="/Images/logo-image0.png" /*alt ="Logo"*/ />

            </div>
            <div className="text">Inloggen </div>
            <div className="supporting-text">
              Welkom terug, vul uw details in{" "}
            </div>
          </div>
        </div>
        <div className="content2">
          <div className="form">
            <div className="input-field">
              <div className="input-field-base">
                <div className="input-with-label">
                  <div className="label">Email </div>
                  <div className="input">
                    <div className="content3">
                      <svg
                        className="mail"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8334 5.00004C18.8334 4.08337 18.0834 3.33337 17.1667 3.33337H3.83341C2.91675 3.33337 2.16675 4.08337 2.16675 5.00004M18.8334 5.00004V15C18.8334 15.9167 18.0834 16.6667 17.1667 16.6667H3.83341C2.91675 16.6667 2.16675 15.9167 2.16675 15V5.00004M18.8334 5.00004L10.5001 10.8334L2.16675 5.00004"
                          stroke="#667085"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <div className="text2">Vul uw email in </div>
                    </div>
                    <div className="help-icon">
                      <svg
                        className="help-circle"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.55992 6.00004C6.71665 5.55449 7.02602 5.17878 7.43322 4.93946C7.84042 4.70015 8.31918 4.61267 8.7847 4.69252C9.25022 4.77236 9.67246 5.01439 9.97664 5.37573C10.2808 5.73706 10.4473 6.19439 10.4466 6.66671C10.4466 8.00004 8.44659 8.66671 8.44659 8.66671M8.49992 11.3334H8.50659M15.1666 8.00004C15.1666 11.6819 12.1818 14.6667 8.49992 14.6667C4.81802 14.6667 1.83325 11.6819 1.83325 8.00004C1.83325 4.31814 4.81802 1.33337 8.49992 1.33337C12.1818 1.33337 15.1666 4.31814 15.1666 8.00004Z"
                          stroke="#98A2B3"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-field">
              <div className="input-field-base">
                <div className="input-with-label">
                  <div className="label">Wachtwoord </div>
                  <div className="input">
                    <div className="content3">
                      <div className="text2">Vul uw wachtwoord in </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="button">
              <div className="button-base">
                <div className="text3">Wachtwoord vergeten? </div>
              </div>
            </div>
          </div>
          <div className="actions">
            <div className="button2">
              <div className="button-base2">
                <div className="text4">Log in </div>
              </div>
            </div>
            <div className="social-button-groups">
              <div className="social-button">
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
              </div>
            </div>
            <div className="microsoft-login">
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

              <div className="sign-in-with-microsoft">
                Log in met Microsoft{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="text6">
            <span>
              <span className="text-6-span">Geen</span>
              <span className="text-6-span2"> </span>
              <span className="text-6-span3">account?</span>
              <span className="text-6-span4"> </span>
            </span>{" "}
          </div>
          <div className="button3">
            <div className="button-base">
              <div className="text7">Registreer </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
