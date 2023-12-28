import "./GegevensInvullenUser.css";

export interface IGegevensInvullenUserProps {
  className?: string;
}

export const GegevensInvullenUser = ({
  className,
  ...props
}: IGegevensInvullenUserProps): JSX.Element => {
  return (
    <div className={"gegevens-invullen-user " + className}>
      <div
        className="gevensinvullen"
        style={{
          background: "/public/images/GegevensInvullen.png center",
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
            <div className="mainbox">
              <div className="gebruiker">Gebruiker </div>
            </div>
            <div className="gegevens-boxes">
              <div className="leftbox">
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
                <div className="input-field">
                  <div className="input-field-base">
                    <div className="input-with-label">
                      <div className="label">Postcode </div>
                      <div className="input">
                        <div className="content3">
                          <div className="text2">3244 TS </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-field">
                  <div className="input-field-base">
                    <div className="input-with-label">
                      <div className="label">Aandoening/Ziekte </div>
                      <div className="input">
                        <div className="content3">
                          <div className="text">
                            vul uw aandoening/ziekte in{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="textarea-input-field">
                  <div className="textarea-input-field-base">
                    <div className="input-with-label2">
                      <div className="label2">Hulpmiddelen </div>
                      <div className="input2">
                        <div className="text3">Vul uw hulpmiddelen in </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="checkboxes-onderzoek-benadering">
                  <div className="onderzoek-checkboxes">
                    <div className="onderzoek-waar-u-aan-wilt-meedoen">
                      Onderzoek waar u aan wilt meedoen{" "}
                    </div>
                    <div className="interview-checkbox">
                      <div className="checkbox">
                        <div className="checkbox-base"></div>
                      </div>
                      <div className="text4">Interview </div>
                    </div>
                    <div className="groepsgesprekken-checkbox">
                      <div className="checkbox">
                        <div className="checkbox-base"></div>
                      </div>
                      <div className="text4">Groepsgesprekken </div>
                    </div>
                    <div className="online-onderzoek-checkbox">
                      <div className="checkbox">
                        <div className="checkbox-base"></div>
                      </div>
                      <div className="text4">Online onderzoek </div>
                    </div>
                    <div className="engelstalig-onderzoek-checkbox">
                      <div className="checkbox">
                        <div className="checkbox-base"></div>
                      </div>
                      <div className="text4">Engelstalig onderzoek </div>
                    </div>
                  </div>
                  <div className="benadering-checkboxes">
                    <div className="voorkeur-benadering">
                      Voorkeur benadering{" "}
                    </div>
                    <div className="telefonish-checkbox">
                      <div className="checkbox">
                        <div className="checkbox-base"></div>
                      </div>
                      <div className="text4">Telefonisch </div>
                    </div>
                    <div className="portal-checkbox">
                      <div className="checkbox">
                        <div className="checkbox-base"></div>
                      </div>
                      <div className="text4">Via portal alleen </div>
                    </div>
                    <div className="mogen-commerciele-partijen-u-benaderen">
                      mogen commerciele partijen u benaderen?{" "}
                    </div>
                    <div className="checkbox2">
                      <div className="checkbox">
                        <div className="checkbox-base">
                          <svg
                            className="check"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3.5L4.5 9L2 6.5"
                              stroke="#7F56D9"
                              strokeWidth="1.6666"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text4">Ja </div>
                    </div>
                    <div className="nee-checkbox">
                      <div className="checkbox">
                        <div className="checkbox-base"></div>
                      </div>
                      <div className="text4">Nee </div>
                    </div>
                  </div>
                </div>
                <div className="leeftijd-verstandelijke-beperking-boxes">
                  <div className="leeftijd-checkbox">
                    <div className="leeftijd">Leeftijd </div>
                    <div className="boven-18-checkbox">
                      <div className="checkbox">
                        <div className="checkbox-base"></div>
                      </div>
                      <div className="text4">Boven 18 </div>
                    </div>
                    <div className="onder-18-checkbox">
                      <div className="checkbox">
                        <div className="checkbox-base"></div>
                      </div>
                      <div className="text4">Onder 18 </div>
                    </div>
                  </div>
                  <div className="verstandelijke-beperking-checkbox">
                    <div className="heeft-uw-kind-client-een-verstandelijke-beperking">
                      Heeft uw kind/client een verstandelijke beperking?{" "}
                    </div>
                    <div className="boven-18-checkbox">
                      <div className="checkbox">
                        <div className="checkbox-base"></div>
                      </div>
                      <div className="text4">Ja </div>
                    </div>
                    <div className="boven-18-checkbox">
                      <div className="checkbox">
                        <div className="checkbox-base"></div>
                      </div>
                      <div className="text4">Nee </div>
                    </div>
                  </div>
                </div>
                <div className="beperkinglijstbox">
                  <div className="beperking-dropdown">
                    <div className="type-beperking-en">Type beperking(en) </div>
                    <div className="input-dropdown">
                      <div className="input-dropdown-base">
                        <div className="input-with-label">
                          <div className="label2">Beperkingen </div>
                          <div className="input3">
                            <div className="content3">
                              <div className="text5">
                                Selecteer uw berperking(en){" "}
                              </div>
                            </div>
                            <svg
                              className="chevron-down"
                              width="20"
                              height="21"
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 8L10 13L15 8"
                                stroke="#667085"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="geselecteerde-beperkingen"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="button">
              <div className="button-base">
                <div className="text6">Terug </div>
              </div>
            </div>
            <div className="button">
              <div className="button-base">
                <div className="text6">Verder </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
