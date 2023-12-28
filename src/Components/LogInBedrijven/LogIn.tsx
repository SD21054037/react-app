/* Code generated with AutoHTML Plugin for Figma */
import "./LogIn.css";

export interface ILogInProps {
  className?: string;
}

export const LogIn = ({ className, ...props }: ILogInProps): JSX.Element => {
  return (
    <div
      className={"log-in " + className}
      style={{ background: "url(log-in.png) center", backgroundSize: "cover" }}
    >
      <div className="content">
        <div className="header">
          <div className="text-and-supporting-text">
            <div className="logo">
              <img className="logo-image" src="logo-image0.png" />
            </div>
            <div className="text">Inlog bedrijven portal </div>
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
                  <div className="label">Uw Bedrijf </div>
                  <div className="input">
                    <div className="content3">
                      <div className="text2">
                        Vul de naam van uw bedrijf in{" "}
                      </div>
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
                        <g clipPath="url(#clip0_214_687)">
                          <path
                            d="M6.05992 6C6.21665 5.55444 6.52602 5.17873 6.93322 4.93942C7.34042 4.7001 7.81918 4.61262 8.2847 4.69247C8.75022 4.77232 9.17246 5.01434 9.47664 5.37568C9.78081 5.73702 9.94729 6.19434 9.94659 6.66666C9.94659 8 7.94659 8.66666 7.94659 8.66666M7.99992 11.3333H8.00659M14.6666 8C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8C1.33325 4.3181 4.31802 1.33333 7.99992 1.33333C11.6818 1.33333 14.6666 4.3181 14.6666 8Z"
                            stroke="#98A2B3"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_214_687">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-field2">
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
                          d="M18.3334 5C18.3334 4.08334 17.5834 3.33334 16.6667 3.33334H3.33341C2.41675 3.33334 1.66675 4.08334 1.66675 5M18.3334 5V15C18.3334 15.9167 17.5834 16.6667 16.6667 16.6667H3.33341C2.41675 16.6667 1.66675 15.9167 1.66675 15V5M18.3334 5L10.0001 10.8333L1.66675 5"
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
                        className="help-circle2"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_214_1028)">
                          <path
                            d="M6.05992 6C6.21665 5.55445 6.52602 5.17874 6.93322 4.93942C7.34042 4.70011 7.81918 4.61263 8.2847 4.69248C8.75022 4.77233 9.17246 5.01435 9.47664 5.37569C9.78081 5.73702 9.94729 6.19435 9.94659 6.66667C9.94659 8 7.94659 8.66667 7.94659 8.66667M7.99992 11.3333H8.00659M14.6666 8C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8C1.33325 4.3181 4.31802 1.33334 7.99992 1.33334C11.6818 1.33334 14.6666 4.3181 14.6666 8Z"
                            stroke="#98A2B3"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_214_1028">
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
          </div>
        </div>
        <div className="row2">
          <div className="text5">
            <span>
              <span className="text-5-span">Geen</span>
              <span className="text-5-span2"> </span>
              <span className="text-5-span3">account?</span>
              <span className="text-5-span4"> </span>
            </span>{" "}
          </div>
          <div className="button3">
            <div className="button-base">
              <div className="text6">Registreer </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
