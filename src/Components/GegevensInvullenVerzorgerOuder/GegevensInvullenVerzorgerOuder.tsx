/* Code generated with AutoHTML Plugin for Figma */
import "./GegevensInvullenVerzorgerOuder.css";

export interface IGegevensInvullenVerzorgerOuderProps {
  className?: string;
}

export const GegevensInvullenVerzorgerOuder = ({
  className,
  ...props
}: IGegevensInvullenVerzorgerOuderProps): JSX.Element => {
  return (
    <div className={"gegevens-invullen-verzorger-ouder " + className}>
      <div
        className="gevensinvullen"
        style={{
          background: "url(gevensinvullen0.png) center",
          backgroundSize: "cover",
        }}
      >
        <div className="content">
          <div className="header">
            <div className="text-and-supporting-text">
              <div className="logo">
                <img className="logo-image" src="logo-image0.png" />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="box">
              <div className="verzorger-ouder">
                <span>
                  <span className="verzorger-ouder-span">Verzorger/Ouder</span>
                  <span className="verzorger-ouder-span2"> </span>
                </span>{" "}
              </div>
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <div className="label">Voornaam </div>
                    <div className="input">
                      <div className="content3">
                        <div className="text">vul uw voornaam in </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <div className="label">Achternaam </div>
                    <div className="input">
                      <div className="content3">
                        <div className="text">vul uw achternaam in </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <div className="label">Telefoonnummer </div>
                    <div className="input">
                      <div className="content3">
                        <div className="text2">+31 06123456 </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field"></div>
            </div>
          </div>
          <div className="footer">
            <div className="button">
              <div className="button-base">
                <div className="text3">Terug </div>
              </div>
            </div>
            <div className="button">
              <div className="button-base">
                <div className="text3">Verder </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
