/* Code generated with AutoHTML Plugin for Figma */
import "./LoginBedrijven.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";

const schema = z.object({
  BedrijfsNaam: z.string().min(1).max(255),
  werkemail: z.string().email(),
  wachtwoord: z.string().min(8),
});

type FormData = z.infer<typeof schema>;

const encrypt = (data: string): string => {
  return btoa(data);
};

export const Loginbedrijven = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  useEffect(() => {}, [errors]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { BedrijfsNaam, werkemail, wachtwoord } = data;

    const encryptedPassword = encrypt(wachtwoord);

    const bedrijfUser = {
      BedrijfsNaam: BedrijfsNaam,
      werkemail: werkemail,
      wachtwoord: encryptedPassword,
    };
    console.log("login data:", bedrijfUser);
  };

  return (
    <div className="log-in">
      <div className="content">
        <div className="header">
          <div className="text-and-supporting-text">
            <div className="logo">
              <img className="logo-image" src="public/Images/logo.png" aria-label="logo accessibility"/>
            </div>
            <h1 className="text">Inlog bedrijven portal </h1>
            <p className="supporting-text">Welkom terug, vul uw details in</p>
          </div>
        </div>
        <div className="content2">
          <form className="form">
            <div className="input-field">
              <div className="input-field-base">
                <div className="input-with-label">
                  <label className="label" htmlFor="BedrijfsNaam">
                    Uw Bedrijfsnaam
                  </label>
                  <div className="input">
                    <div className="content3">
                      <input
                        className="text2"
                        id="BedrijfsNaam"
                        type="text"
                        placeholder="Vul uw bedrijfsnaam in"
                        {...register("BedrijfsNaam")}
                      ></input>
                    </div>
                  </div>
                  <div className="error-message">
                    {errors.BedrijfsNaam && (
                      <p>{errors.BedrijfsNaam.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="input-field">
              <div className="input-field-base">
                <div className="input-with-label">
                  <label className="label" htmlFor="WerkEmail">
                    Email
                  </label>
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

                      <input
                        id="WerkEmail"
                        className="text2"
                        placeholder="Vul uw email in"
                        type="text"
                        {...register("werkemail")}
                      ></input>
                    </div>
                  </div>
                  <div className="error-message">
                    {errors.werkemail && <p>{errors.werkemail.message}</p>}
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
                      <input
                        placeholder="vul uw wachtwoord in"
                        className="text2"
                        type={passwordVisible ? "text" : "password"}
                        {...register("wachtwoord")}
                      ></input>
                    </div>
                    <button
                      className="show-password"
                      onClick={togglePasswordVisibility}
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
                  <div className="error-message">
                    {errors.wachtwoord && <p>{errors.wachtwoord.message}</p>}
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="button">
              <button className="button-base">
                <div className="text3">Wachtwoord vergeten? </div>
              </button>
            </div>
          </div>
          <div className="actions">
            <div className="button2">
              <button type="submit" className="loginButton" onClick={handleSubmit(onSubmit)}>
                <div className="text4">Log in</div>
              </button>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="text5">Geen account?</div>

          <button className="button-base">
            <div className="text6">Registreer </div>
          </button>
        </div>
      </div>
    </div>
  );
};
