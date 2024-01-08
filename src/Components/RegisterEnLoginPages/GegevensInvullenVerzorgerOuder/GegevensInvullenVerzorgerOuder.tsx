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
    <div className="gegevens-invullen-verzorger-ouder">
      <div className="gevensinvullen">
        <div className="content">
          <div className="header">
            <div className="text-and-supporting-text">
              <div className="logo">
                <img
                  className="logo-image"
                  src="public/Images/logo.png"
                  aria-label="logo accessibility"
                />
              </div>
            </div>
          </div>
          <div className="content2">
            <form className="box">
              <header className="verzorger-ouder">
                <h1 className="HeaderText">Verzorger/Ouder</h1>
              </header>
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <label className="label">Voornaam </label>
                    <div className="input">
                      <div className="content3">
                        <input
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
                          placeholder="Vul uw achternaam in"
                          className="text"
                          {...register("achternaam")}
                        ></input>
                      </div>
                    </div>
                    <div className="error-message">
                      {errors.achternaam && <p>{errors.achternaam.message}</p>}
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
                          placeholder="+310620456"
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
            </form>
          </div>
          <div className="footer">
            <button className="button-base">
              <div className="text3">Terug </div>
            </button>

            <button
              className="button-base"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              <div className="text3">Verder </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
