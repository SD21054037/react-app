import "./GegevensInvullenUser.modules.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  voornaam: z.string().min(1).max(255),
  achternaam: z.string().min(1).max(255),
  telefoonnummer: z.string().min(1).max(15),
  postcode: z.string().min(1).max(10),
  aandoeningZiekte: z.string().min(1).max(255),
  hulpmiddelen: z.string(),
  onderzoekWensen: z.object({
    interview: z.boolean(),
    groepsgesprekken: z.boolean(),
    onlineOnderzoek: z.boolean(),
    engelstaligOnderzoek: z.boolean(),
  }),
  benaderingVoorkeur: z.object({
    telefonisch: z.boolean(),
    viaPortalAlleen: z.boolean(),
    nvt: z.boolean(),
  }),
  commercieleBenadering: z.boolean(),
  leeftijd: z.date(),
  verstandelijkeBeperking: z.boolean(),
  beperkingen: z.array(z.string()),
});

type FormData = z.infer<typeof schema>;

export const GegevensInvullenUser = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="gegevens-invullen-user">
      <div className="gevensinvullen">
        <div className="content">
          <div className="header">
            <div className="text-and-supporting-text">
              <div className="logo">
                <img
                  className="logo-image"
                  src="/public/Images/logo.png"
                  aria-label="logo accessibility"
                />
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="mainbox">
              <h1 className="gebruiker">Gebruiker </h1>
            </div>
            <form className="gegevens-boxes">
              <div className="leftbox">
                <div className="leftboxLEFT">
                  <div className="input-field">
                    <div className="input-field-base">
                      <div className="input-with-label">
                        <label className="label">Voornaam </label>
                        <div className="input">
                          <div className="content3">
                            <input
                              type="text"
                              placeholder="Vul uw voornaam in"
                              className="text"
                              {...register("voornaam")}
                            ></input>
                          </div>
                        </div>
                        <div className="error-message">
                          {errors.voornaam && <p>{errors.voornaam.message}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-field">
                    <div className="input-field-base">
                      <div className="input-with-label">
                        <label className="label">Achternaam </label>
                        <div className="input">
                          <div className="content3">
                            <input
                              type="text"
                              placeholder="Vul uw achternaam in"
                              className="text"
                              {...register("achternaam")}
                            ></input>
                          </div>
                        </div>
                        <div className="error-message">
                          {errors.achternaam && (
                            <p>{errors.achternaam.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-field">
                    <div className="input-field-base">
                      <div className="input-with-label">
                        <label className="label">Telefoonnummer </label>
                        <div className="input">
                          <div className="content3">
                            <input
                              type="tel"
                              placeholder="+316123456"
                              className="text"
                              {...register("telefoonnummer")}
                            ></input>
                          </div>
                        </div>
                        <div className="error-message">
                          {errors.telefoonnummer && (
                            <p>{errors.telefoonnummer.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-field">
                    <div className="input-field-base">
                      <div className="input-with-label">
                        <label className="label">Postcode </label>
                        <div className="input">
                          <div className="content3">
                            <input
                              type="text"
                              placeholder="0000AA"
                              className="text"
                              {...register("postcode")}
                            ></input>
                          </div>
                        </div>
                        <div className="error-message">
                          {errors.postcode && <p>{errors.postcode.message}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="leftboxRIGHT">
                  <div className="input-field">
                    <div className="input-field-base">
                      <div className="input-with-label">
                        <div className="label">Aandoening/Ziekte </div>
                        <div className="input">
                          <div className="content3">
                            <input
                              type="text"
                              placeholder="vul uw aandoening/ziekte in"
                              className="text"
                              {...register("aandoeningZiekte")}
                            ></input>
                          </div>
                        </div>
                        <div className="error-message">
                          {errors.aandoeningZiekte && (
                            <p>{errors.aandoeningZiekte.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="textarea-input-field">
                    <div className="textarea-input-field-base">
                      <div className="input-with-label2">
                        <label className="label2">Hulpmiddelen </label>
                        <div className="input2">
                          <textarea
                            placeholder="vul de hulpmiddelen in die u gebruikt"
                            className="text"
                            {...register("hulpmiddelen")}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="leeftijd-checkbox">
                    <label className="leeftijd">Leeftijd </label>
                    <input type="date" {...register("leeftijd")} />
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="checkboxes-onderzoek-benadering">
                  <div className="onderzoek-checkboxes">
                    <h4 className="onderzoek-waar-u-aan-wilt-meedoen">
                      Onderzoek waar u aan wilt meedoen
                    </h4>
                    <div className="interview-checkbox">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          className="checkbox-base"
                          {...register("onderzoekWensen.interview")}
                        ></input>
                      </div>
                      <h5 className="Interview">Interview </h5>
                    </div>
                    <div className="groepsgesprekken-checkbox">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          className="checkbox-base"
                          {...register("onderzoekWensen.groepsgesprekken")}
                        ></input>
                      </div>
                      <h5 className="Groepsgesprekken">Groepsgesprekken </h5>
                    </div>
                    <div className="online-onderzoek-checkbox">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          className="checkbox-base"
                        ></input>
                      </div>
                      <h5 className="OnlineOnderzoek">Online onderzoek </h5>
                    </div>
                    <div className="engelstalig-onderzoek-checkbox">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          className="checkbox-base"
                          {...register("onderzoekWensen.engelstaligOnderzoek")}
                        ></input>
                      </div>
                      <h5 className="EngelstaligOnderzoek">
                        Engelstalig onderzoek
                      </h5>
                    </div>
                    <div className="verstandelijke-beperking-checkbox">
                      <label className="heeft-uw-kind-client-een-verstandelijke-beperking">
                        Heeft uw kind/client een verstandelijke beperking?
                        <br></br>(niet van toepassing? vink niks aan!)
                      </label>
                      <div className="VerstandelijkeBeperkingCheckbox">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            className="checkbox-base"
                          ></input>
                        </div>
                        <h5 className="Ja">Ja </h5>
                      </div>
                      <div className="VerstandelijkeBeperkingCheckbox">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            className="checkbox-base"
                          ></input>
                        </div>
                        <h5 className="Nee">nee </h5>
                      </div>
                    </div>
                  </div>
                  <div className="benadering-checkboxes">
                    <h4 className="voorkeur-benadering">Voorkeur benadering</h4>
                    <div className="telefonish-checkbox">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          className="checkbox-base"
                          {...register("benaderingVoorkeur.telefonisch")}
                        ></input>
                      </div>
                      <h5 className="Telefonisch">Telefonisch </h5>
                    </div>
                    <div className="portal-checkbox">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          className="checkbox-base"
                          {...register("benaderingVoorkeur.viaPortalAlleen")}
                        ></input>
                      </div>
                      <h5 className="ViaPortalAlleen">Via portal alleen </h5>
                    </div>
                    <div className="nvt-checkbox">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          className="checkbox-base"
                          {...register("benaderingVoorkeur.nvt")}
                        ></input>
                      </div>
                      <h5 className="nvt">niet van toepassing </h5>
                    </div>
                    <h4 className="mogen-commerciele-partijen-u-benaderen">
                      mogen commerciele partijen u benaderen?
                    </h4>
                    <div className="checkbox2">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          className="checkbox-base"
                          {...register("commercieleBenadering")}
                        ></input>
                      </div>
                      <h5 className="Ja">Ja </h5>
                    </div>
                    <div className="nee-checkbox">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          className="checkbox-base"
                          {...register("commercieleBenadering")}
                        ></input>
                      </div>
                      <h5 className="Nee">Nee </h5>
                    </div>
                  </div>
                </div>
                <div className="beperkinglijstbox"></div>
              </div>
            </form>
          </div>
          <footer className="footer">
            <button className="TerugButton">
              <p className="text6">Terug </p>
            </button>
            <div className="button">
              <button
                className="VerderButton"
                type="button"
                onClick={handleSubmit(onSubmit)}
              >
                <p className="text6">Verder</p>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
