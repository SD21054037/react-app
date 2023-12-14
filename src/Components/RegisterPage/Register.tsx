/* Code generated with AutoHTML Plugin for Figma */
import "./Register.css";

export interface IRegisterProps {
  className?: string;
}

export const Register = ({
  className,
  ...props
}: IRegisterProps): JSX.Element => {
  return (
    <div className={"register " + className}>
      <div
        className="register2"
        style={{
          background: "url(./public/Images/log-in.png) center",
          backgroundSize: "cover",
        }}
      >
        <div className="content">
          <div className="header">
            <div className="text-and-supporting-text">
              <div className="logo">
                <img className="logo-image" src="./public/Images/logo-image0.png" />
              </div>
              <div className="text">Registreer </div>
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
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.3333 5.00004C18.3333 4.08337 17.5833 3.33337 16.6666 3.33337H3.33329C2.41663 3.33337 1.66663 4.08337 1.66663 5.00004M18.3333 5.00004V15C18.3333 15.9167 17.5833 16.6667 16.6666 16.6667H3.33329C2.41663 16.6667 1.66663 15.9167 1.66663 15V5.00004M18.3333 5.00004L9.99996 10.8334L1.66663 5.00004"
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
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_155_940)">
                            <path
                              d="M6.06004 6.00004C6.21678 5.55449 6.52614 5.17878 6.93334 4.93946C7.34055 4.70015 7.8193 4.61267 8.28483 4.69252C8.75035 4.77236 9.17259 5.01439 9.47676 5.37573C9.78093 5.73706 9.94741 6.19439 9.94671 6.66671C9.94671 8.00004 7.94671 8.66671 7.94671 8.66671M8.00004 11.3334H8.00671M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00004C1.33337 4.31814 4.31814 1.33337 8.00004 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004Z"
                              stroke="#98A2B3"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_155_940">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
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
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <div className="label">Wachtwoord Bevestigen </div>
                    <div className="input">
                      <div className="content3">
                        <div className="text2">
                          Vul uw wachtwoord opnieuw in{" "}
                        </div>
                      </div>
                      <div className="help-icon">
                        <svg
                          className="help-circle2"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_155_663)">
                            <path
                              d="M6.06004 6.00004C6.21678 5.55449 6.52614 5.17878 6.93334 4.93946C7.34055 4.70015 7.8193 4.61267 8.28483 4.69252C8.75035 4.77236 9.17259 5.01439 9.47676 5.37573C9.78093 5.73706 9.94741 6.19439 9.94671 6.66671C9.94671 8.00004 7.94671 8.66671 7.94671 8.66671M8.00004 11.3334H8.00671M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00004C1.33337 4.31814 4.31814 1.33337 8.00004 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004Z"
                              stroke="#98A2B3"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_155_663">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="actions">
              <div className="button">
                <div className="button-base">
                  <div className="text3">Registreer </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="al-een-account">Al een account? </div>
            <div className="button2">
              <div className="button-base2">
                <div className="text4">Log in </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;