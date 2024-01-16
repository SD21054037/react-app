import "./GegevensInvullenVerzorgerOuder.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  voornaam: z.string().min(1).max(255),
  achternaam: z.string().min(1).max(255),
  telefoonnummer: z.string().min(1).max(255),
});

type FormData = z.infer<typeof schema>;

export const GegevensInvullenVerzorgerOuder = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { voornaam, achternaam, telefoonnummer } = data;

    const VerzorgerOuder = {
      voornaam: voornaam,
      achternaam: achternaam,
      telefoonnummer: telefoonnummer,
    };

    console.log("Form data:", VerzorgerOuder);
  };
  return (
    <div className="GIVO-gegevens-invullen-verzorger-ouder">
      <div className="GIVO-gevensinvullen">
        <div className="GIVO-content">
          <div className="GIVO-header">
            <div className="GIVO-text-and-supporting-text">
              <div className="GIVO-logo">
                <img
                  className="GIVO-logo-image"
                  src="public/Images/logo.png"
                  aria-label="logo accessibility"
                />
              </div>
            </div>
          </div>
          <div className="GIVO-content2">
            <form className="GIVO-box">
              <header className="GIVO-verzorger-ouder">
                <h1 className="GIVO-HeaderText">Verzorger/Ouder</h1>
              </header>
              <div className="GIVO-input-field">
                <div className="GIVO-input-field-base">
                  <div className="GIVO-input-with-label">
                    <label className="GIVO-label">Voornaam </label>
                    <div className="GIVO-input">
                      <div className="GIVO-content3">
                        <input
                          placeholder="Vul uw voornaam in"
                          className="GIVO-text"
                          {...register("voornaam")}
                        ></input>
                      </div>
                    </div>
                    <div className="GIVO-error-message">
                      {errors.voornaam && <p>{errors.voornaam.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="GIVO-input-field">
                <div className="GIVO-input-field-base">
                  <div className="GIVO-input-with-label">
                    <label className="GIVO-label">Achternaam </label>
                    <div className="GIVO-input">
                      <div className="GIVO-content3">
                        <input
                          placeholder="Vul uw achternaam in"
                          className="GIVO-text"
                          {...register("achternaam")}
                        ></input>
                      </div>
                    </div>
                    <div className="GIVO-error-message">
                      {errors.achternaam && <p>{errors.achternaam.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="GIVO-input-field">
                <div className="GIVO-input-field-base">
                  <div className="GIVO-input-with-label">
                    <label className="GIVO-label">Telefoonnummer </label>
                    <div className="GIVO-input">
                      <div className="GIVO-content3">
                        <input
                          placeholder="+310620456"
                          className="GIVO-text"
                          {...register("telefoonnummer")}
                        ></input>
                      </div>
                    </div>
                    <div className="GIVO-error-message">
                      {errors.telefoonnummer && (
                        <p>{errors.telefoonnummer.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="GIVO-footer">
            <button className="GIVO-button-base">
              <div className="GIVO-text3">Terug </div>
            </button>

            <button
              className="GIVO-button-base"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              <div className="GIVO-text3">Verder </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
