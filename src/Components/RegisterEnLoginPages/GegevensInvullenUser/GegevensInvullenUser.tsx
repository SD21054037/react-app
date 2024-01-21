import "./GegevensInvullenUser.modules.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import React from 'react';

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
  geboortedatum: z.date(),
  verstandelijkeBeperking: z.enum(['ja', 'nee', 'nvt']),
  beperkingen: z.array(z.string()),
  commercieleBenadering: z.enum(['ja', 'nee']),
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
  
  const [commercieleBenaderingJa, setCommercieleBenaderingJa] = React.useState(true);
  const [commercieleBenaderingNee, setCommercieleBenaderingNee] = React.useState(false);

  const [verstandelijkeBeperking, setVerstandelijkeBeperking] = React.useState(''); // Changed to string type
  const [benaderingVoorkeurBeide, setBenaderingVoorkeurBeide] = React.useState(false);
  const [benaderingVoorkeur, setBenaderingVoorkeur] = React.useState({
    telefonisch: false,
    viaPortalAlleen: false,
    nvt: false,
  });

  const handleBenaderingVoorkeur = (type: string) => {
    setBenaderingVoorkeur((prev) => ({
      telefonisch: type === "telefonisch",
      viaPortalAlleen: type === "viaPortalAlleen",
      nvt: type === "nvt" ? !prev.nvt : false, // Set "Beide" to false when either "Telefonisch" or "Via portal alleen" is selected
    }));
  }


  const onSubmit: SubmitHandler<FormData> = (data) => {
    const {
      voornaam,
      achternaam,
      telefoonnummer,
      postcode,
      aandoeningZiekte,
      hulpmiddelen,
      onderzoekWensen,
      benaderingVoorkeur,
      geboortedatum,
      verstandelijkeBeperking,
      beperkingen,
      commercieleBenadering,
    } = data;

    function calculateAge(geboortedatum: Date, currentDate: Date): number {
      const birthYear = geboortedatum.getFullYear();
      const currentYear = currentDate.getFullYear();
    
      const age = currentYear - birthYear;
    
      const birthdateThisYear = new Date(currentDate);
      birthdateThisYear.setFullYear(birthYear);
    
      if (birthdateThisYear > currentDate) {
        return age - 1;
      } else {
        return age;
      }
    }

    const currentdate = new Date();
    const leeftijd = calculateAge(geboortedatum, currentdate);

    const user = {
      voornaam: voornaam,
      achternaam: achternaam,
      telefoonnummer: telefoonnummer,
      postcode: postcode,
      aandoeningZiekte: aandoeningZiekte,
      hulpmiddelen: hulpmiddelen,
      onderzoekWensen: onderzoekWensen,
      benaderingVoorkeur: benaderingVoorkeur,
      commercieleBenadering: commercieleBenadering,
      leeftijd: leeftijd,
      verstandelijkeBeperking: verstandelijkeBeperking,
      beperkingen: beperkingen,
    };
    
    const navigate = useNavigate();

    if (leeftijd < 18 || verstandelijkeBeperking === 'ja') {
      navigate(`/gegevensinvullenverzorgerouder`);
    } else {
      navigate(`/mainpage`);
    }
  };

  return (
    <div className="GIU-gegevens-invullen-user">
      <div className="GIU-gevensinvullen">
        <form className="GIU-content">
          <div className="GIU-header">
            <div className="GIU-text-and-supporting-text">
              <div className="GIU-logo">
                <img
                  className="GIU-logo-image"
                  src="/Images/logo.png"
                  aria-label="logo accessibility"
                />
              </div>
            </div>
          </div>
          <div className="GIU-content2">
            <div className="GIU-mainbox">
              <h1 className="GIU-gebruiker">Gebruiker </h1>
            </div>
            <div className="GIU-gegevens-boxes">
              <div className="GIU-leftbox">
                <div className="GIU-leftboxLEFT">
                  <div className="GIU-input-field">
                    <div className="GIU-input-field-base">
                      <div className="GIU-input-with-label">
                        <label className="GIU-label">Voornaam </label>
                        <div className="GIU-input">
                          <div className="GIU-content3">
                            <input
                              type="text"
                              placeholder="Vul uw voornaam in"
                              className="GIU-text"
                              {...register("voornaam")}
                            ></input>
                          </div>
                        </div>
                        <div className="GIU-error-message">
                          {errors.voornaam && <p>{errors.voornaam.message}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="GIU-input-field">
                    <div className="GIU-input-field-base">
                      <div className="GIU-input-with-label">
                        <label className="GIU-label">Achternaam </label>
                        <div className="GIU-input">
                          <div className="GIU-content3">
                            <input
                              type="text"
                              placeholder="Vul uw achternaam in"
                              className="GIU-text"
                              {...register("achternaam")}
                            ></input>
                          </div>
                        </div>
                        <div className="GIU-error-message">
                          {errors.achternaam && (
                            <p>{errors.achternaam.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="GIU-input-field">
                    <div className="GIU-input-field-base">
                      <div className="GIU-input-with-label">
                        <label className="GIU-label">Telefoonnummer </label>
                        <div className="GIU-input">
                          <div className="GIU-content3">
                            <input
                              type="tel"
                              placeholder="+316123456"
                              className="GIU-text"
                              {...register("telefoonnummer")}
                            ></input>
                          </div>
                        </div>
                        <div className="GIU-error-message">
                          {errors.telefoonnummer && (
                            <p>{errors.telefoonnummer.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="GIU-input-field">
                    <div className="GIU-input-field-base">
                      <div className="GIU-input-with-label">
                        <label className="GIU-label">Postcode </label>
                        <div className="GIU-input">
                          <div className="GIU-content3">
                            <input
                              type="text"
                              placeholder="0000AA"
                              className="GIU-text"
                              {...register("postcode")}
                            ></input>
                          </div>
                        </div>
                        <div className="GIU-error-message">
                          {errors.postcode && <p>{errors.postcode.message}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="GIU-leftboxRIGHT">
                  <div className="GIU-input-field">
                    <div className="GIU-input-field-base">
                      <div className="GIU-input-with-label">
                        <div className="GIU-label">Aandoening/Ziekte </div>
                        <div className="GIU-input">
                          <div className="GIU-content3">
                            <input
                              type="text"
                              placeholder="vul uw aandoening/ziekte in"
                              className="GIU-text"
                              {...register("aandoeningZiekte")}
                            ></input>
                          </div>
                        </div>
                        <div className="GIU-error-message">
                          {errors.aandoeningZiekte && (
                            <p>{errors.aandoeningZiekte.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="GIU-textarea-input-field">
                    <div className="GIU-textarea-input-field-base">
                      <div className="GIU-input-with-label2">
                        <label className="GIU-label2">Hulpmiddelen </label>
                        <div className="GIU-input2">
                          <textarea
                            placeholder="vul de hulpmiddelen in die u gebruikt"
                            className="GIU-text"
                            {...register("hulpmiddelen")}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="GIU-leeftijd-checkbox">
                    <label className="GIU-leeftijd">Geboortedatum </label>
                    <input type="date" {...register("geboortedatum")} />
                  </div>
                </div>
              </div>
              <div className="GIU-rightbox">
                <div className="GIU-checkboxes-onderzoek-benadering">
                  <div className="GIU-onderzoek-checkboxes">
                    <h4 className="GIU-onderzoek-waar-u-aan-wilt-meedoen">
                      Onderzoek waar u aan wilt meedoen
                    </h4>
                    <div className="GIU-interview-checkbox">
                      <div className="GIU-checkbox">
                        <input
                          type="checkbox"
                          className="GIU-checkbox-base"
                          {...register("onderzoekWensen.interview")}
                        ></input>
                      </div>
                      <h5 className="GIU-Interview">Interview </h5>
                    </div>
                    <div className="GIU-groepsgesprekken-checkbox">
                      <div className="GIU-checkbox">
                        <input
                          type="checkbox"
                          className="GIU-checkbox-base"
                          {...register("onderzoekWensen.groepsgesprekken")}
                        ></input>
                      </div>
                      <h5 className="GIU-Groepsgesprekken">
                        Groepsgesprekken
                      </h5>
                    </div>
                    <div className="GIU-online-onderzoek-checkbox">
                      <div className="GIU-checkbox">
                        <input
                          type="checkbox"
                          className="GIU-checkbox-base"
                        ></input>
                      </div>
                      <h5 className="GIU-OnlineOnderzoek">Online onderzoek </h5>
                    </div>
                    <div className="GIU-engelstalig-onderzoek-checkbox">
                      <div className="GIU-checkbox">
                        <input
                          type="checkbox"
                          className="GIU-checkbox-base"
                          {...register("onderzoekWensen.engelstaligOnderzoek")}
                        ></input>
                      </div>
                      <h5 className="GIU-EngelstaligOnderzoek">
                        Engelstalig onderzoek
                      </h5>
                    </div>
                    <div className="GIU-verstandelijke-beperking-checkbox">
                      <label className="GIU-heeft-uw-kind-client-een-verstandelijke-beperking">
                        Heeft uw kind/client een verstandelijke beperking?
                      </label>
                      <div className="GIU-VerstandelijkeBeperkingCheckbox">
                        <div className="GIU-checkbox">
                          <input
                            type="checkbox"
                            className="GIU-checkbox-base"
                            checked={verstandelijkeBeperking === 'ja'}
                            onChange={() => setVerstandelijkeBeperking('ja')}
                          ></input>
                        </div>
                        <h5 className="GIU-Ja">Ja </h5>
                      </div>
                      <div className="GIU-VerstandelijkeBeperkingCheckbox">
                        <div className="GIU-checkbox">
                          <input
                            type="checkbox"
                            className="GIU-checkbox-base"
                            checked={verstandelijkeBeperking === 'nee'}
                            onChange={() => setVerstandelijkeBeperking('nee')}
                          ></input>
                        </div>
                        <h5 className="GIU-Nee">nee </h5>
                      </div>
                      <div className="GIU-nvt-checkbox">
                      <div className="GIU-checkbox">
                        <input
                          type="checkbox"
                          className="GIU-checkbox-base"
                          checked={verstandelijkeBeperking === 'nvt'}
                          onChange={() => setVerstandelijkeBeperking('nvt')}
                          
                        ></input>
                      </div>
                      <h5 className="GIU-nvt">niet van toepassing </h5>
                    </div>
                    </div>
                  </div>
                  <div className="GIU-benadering-checkboxes">
                    <h4 className="GIU-voorkeur-benadering">
                      Voorkeur benadering
                    </h4>
                    <div className="GIU-telefonish-checkbox">
  <div className="GIU-checkbox">
    <input
      type="checkbox"
      className="GIU-checkbox-base"
      {...register("benaderingVoorkeur.telefonisch")}
      checked={benaderingVoorkeur.telefonisch}
      onChange={() => handleBenaderingVoorkeur("telefonisch")}
    ></input>
  </div>
  <h5 className="GIU-Telefonisch">Telefonisch </h5>
</div>
<div className="GIU-portal-checkbox">
  <div className="GIU-checkbox">
    <input
      type="checkbox"
      className="GIU-checkbox-base"
      {...register("benaderingVoorkeur.viaPortalAlleen")}
      checked={benaderingVoorkeur.viaPortalAlleen}
      onChange={() => handleBenaderingVoorkeur("viaPortalAlleen")}
    ></input>
  </div>
  <h5 className="GIU-ViaPortalAlleen">Via portal alleen</h5>
</div>
<div className="GIU-beide-checkbox">
  <div className="GIU-checkbox">
    <input
      type="checkbox"
      className="GIU-checkbox-base"
      checked={benaderingVoorkeur.nvt}
      onChange={() => handleBenaderingVoorkeur("nvt")}
    ></input>
  </div>
  <h5 className="GIU-Beide">Beide</h5>
</div>


                    <h4 className="GIU-mogen-commerciele-partijen-u-benaderen">
                      mogen commerciele partijen u benaderen?
                    </h4>
                    <div className="GIU-checkbox2">
                      <div className="GIU-checkbox">
                        <input
                          type="checkbox"
                          className="GIU-checkbox-base"
                          checked={commercieleBenaderingJa}
                          onChange={() =>{setCommercieleBenaderingJa(!commercieleBenaderingJa);
                            setCommercieleBenaderingNee(false);} }
                          
                        ></input>
                      </div>
                      <h5 className="GIU-Ja">Ja </h5>
                    </div>
                    <div className="GIU-nee-checkbox">
                      <div className="GIU-checkbox">
                        <input
                          type="checkbox"
                          className="GIU-checkbox-base"
                          checked={commercieleBenaderingNee}
                          onChange={() => {
                            setCommercieleBenaderingNee(!commercieleBenaderingNee);
                            setCommercieleBenaderingJa(false);
                          }}
                        ></input>
                      </div>
                      <h5 className="GIU-Nee">Nee </h5>
                    </div>
                  </div>
                </div>
                <select
  className="GIU-beperkinglijstbox"
  {...register("beperkingen")}
>
  <option value="motorische beperking">Motorische beperking</option>
  <option value="visuele beperking">Visuele beperking</option>
  <option value="cognitieve beperking">Cognitieve beperking</option>
  <option value="auditieve beperking">Auditieve beperking</option>
</select>
              </div>
            </div>
          </div>
          <footer className="GIU-footer">
            <button className="GIU-TerugButton">
              <p className="GIU-text6">Terug </p>
            </button>
            <div className="GIU-button">
              <button
                className="GIU-VerderButton"
                type="button"
                onClick={handleSubmit(onSubmit)}
              >
                <p className="GIU-text6">Verder</p>
              </button>
            </div>
          </footer>
        </form>
      </div>
    </div>
  );
};
