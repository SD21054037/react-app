import "./RegisterBedrijven.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";

const schema = z.object({
  email: z.string().email(),
  wachtwoord: z.string(),
  wachtwoordbevestiging: z.string(),
  bedrijfsnaam: z.string(),
  websiteUrl: z.string().startsWith("https://").url(),
  bedrijfsplaats: z.string(),
  bedrijfspostcode: z.string(),
  bedrijfsadres: z.string(),
});

type Formdata = z.infer<typeof schema>;

const encrypt = (data: string): string => {
  return btoa(data);
};

export const RegisterBedrijven = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Formdata>({
    resolver: zodResolver(schema),
  });

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit: SubmitHandler<Formdata> = (data) => {
    const {
      email,
      wachtwoord,
      wachtwoordbevestiging,
      bedrijfsnaam,
      websiteUrl,
      bedrijfsplaats,
      bedrijfspostcode,
      bedrijfsadres,
    } = data;

    const encryptedWachtwoord = encrypt(wachtwoord);

    const BedrijfUser = {
      email: email,
      wachtwoord: encryptedWachtwoord,
      bedrijfsnaam: bedrijfsnaam,
      websiteUrl: websiteUrl,
      bedrijfsadres: bedrijfsadres,
      bedrijfsplaats: bedrijfsplaats,
      bedrijfspostcode: bedrijfspostcode,
    };

    console.log("Registration data:", BedrijfUser);
    // Add logic to send registration data
  };

  return (
    <div className="register-bedrijven">
      <div className="register">
        <div className="content">
          <div className="header">
            <div className="text-and-supporting-text">
              <div className="logo">
                <img
                  className="logo-image"
                  aria-label="logo accessibility"
                  src="public/Images/logo.png"
                />
              </div>
              <h1 className="text">Registreer bedrijfportal</h1>
            </div>
          </div>
          <form className="form">
            <div className="input-base-1">
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                    <div className="input">
                      <div className="content2">
                        <svg
                          className="mail"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.3333 5C18.3333 4.08334 17.5833 3.33334 16.6666 3.33334H3.33329C2.41663 3.33334 1.66663 4.08334 1.66663 5M18.3333 5V15C18.3333 15.9167 17.5833 16.6667 16.6666 16.6667H3.33329C2.41663 16.6667 1.66663 15.9167 1.66663 15V5M18.3333 5L9.99996 10.8333L1.66663 5"
                            stroke="#667085"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <input
                          id="email"
                          className="InputBase"
                          placeholder="Vul uw email in"
                          {...register("email")}
                        ></input>
                      </div>
                    </div>
                    <div className="error-message">
                      {errors.email && <p>{errors.email.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <label className="label" htmlFor="wachtwoord">
                      Wachtwoord{" "}
                    </label>
                    <div className="input">
                      <div className="content2">
                        <input
                          id="wachtwoord"
                          className="InputBase"
                          placeholder="vul een wachtwoord in"
                          type={passwordVisible ? "text" : "password"}
                          {...register("wachtwoord")}
                        ></input>
                        <button
                          className="show-password"
                          onClick={togglePasswordVisibility}
                          type="button"
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
                    <div className="error-message">
                      {errors.wachtwoord && <p>{errors.wachtwoord.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <label className="label" htmlFor="wachtwoordbevestigen">
                      Wachtwoord Bevestigen
                    </label>
                    <div className="input">
                      <div className="content2">
                        <input
                          className="InputBase"
                          id="wachtwoordbevestigen"
                          placeholder="vul uw wachtwoord opnieuw in"
                          type={passwordVisible ? "text" : "password"}
                          {...register("wachtwoordbevestiging")}
                        ></input>
                        <button
                          className="show-password"
                          onClick={togglePasswordVisibility}
                          type="button"
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
                    <div className="error-message">
                      {errors.wachtwoordbevestiging && (
                        <p>{errors.wachtwoordbevestiging.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <label className="label" htmlFor="bedrijfsnaam">
                      Bedrijfnaam{" "}
                    </label>
                    <div className="input">
                      <div className="content2">
                        <input
                          id="bedrijfsnaam"
                          className="InputBase"
                          placeholder="vul uw bedrijfsnaam in"
                          {...register("bedrijfsnaam")}
                        ></input>
                      </div>
                    </div>
                    <div className="error-message">
                      {errors.bedrijfsnaam && (
                        <p>{errors.bedrijfsnaam.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-base-2">
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <div className="label">WebsiteUrrl </div>
                    <div className="input">
                      <div className="content2">
                        <input
                          className="InputBase"
                          placeholder="vul uw bedrijfswebsite url in"
                          {...register("websiteUrl")}
                        ></input>
                      </div>
                    </div>
                    <div className="error-message">
                      {errors.websiteUrl && <p>{errors.websiteUrl.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <label className="label" htmlFor="bedrijfsplaats">
                      Bedrijf Plaats
                    </label>
                    <div className="input">
                      <div className="content2">
                        <input
                          id="bedrijfsplaats"
                          className="InputBase"
                          placeholder="vul uw bedrijfsplaats in"
                          {...register("bedrijfsplaats")}
                        ></input>
                      </div>
                    </div>
                    <div className="error-message">
                      {errors.bedrijfsplaats && (
                        <p>{errors.bedrijfsplaats.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <label className="label" htmlFor="BedrijfsPostcode">
                      Bedrijf Postcode
                    </label>
                    <div className="input">
                      <div className="content2">
                        <input
                          id="BedrijfsPostcode"
                          className="InputBase"
                          placeholder="vul uw bedrijfspostcode in"
                          {...register("bedrijfspostcode")}
                        ></input>
                      </div>
                    </div>
                    <div className="error-message">
                      {errors.bedrijfspostcode && (
                        <p>{errors.bedrijfspostcode.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field">
                <div className="input-field-base">
                  <div className="input-with-label">
                    <label className="label" htmlFor="BedrijfsAdres">
                      Bedrijf Adres
                    </label>
                    <div className="input">
                      <div className="content2">
                        <input
                          id="BedrijfsAdres"
                          className="InputBase"
                          placeholder="vul uw bedrijfsadres in"
                          {...register("bedrijfsadres")}
                        ></input>
                      </div>
                    </div>
                    <div className="error-message">
                      {errors.bedrijfsadres && (
                        <p>{errors.bedrijfsadres.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="content3">
            <div className="actions">
              <div className="button">
                <button
                  className="button-base"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  <div className="text3">Registreer </div>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <h3 className="al-een-account">Al een account? </h3>
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
