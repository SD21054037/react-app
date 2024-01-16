import "./Register.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { registerUser } from '../../../Services/apiUtils';






import { Link, useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email().min(1),
  password: z
    .string({
      required_error: "moet ingevuld worden",
    })
    .min(8)
    .max(32, {
      message: "uw wachtwoord moet tenminste 8 characters lang zijn.",
    }),
  // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*-])[A- Za-z\d!@#$%&*-]{8,}$/),
  confirmPassword: z
    .string()
    .min(8)
    .max(32, {
      message: "uw wachtwoord moet tenminste 8 characters lang zijn.",
    }),
});

type Formdata = z.infer<typeof schema>;

const encrypt = (data: string): string => {
  return btoa(data);
};

export const Register = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Formdata>({
    resolver: zodResolver(schema),
  });

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  useEffect(() => {}, [errors]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // const onSubmit: SubmitHandler<Formdata> =async (data) => {

  // const navigate = useNavigate();

  const onSubmit: SubmitHandler<Formdata> = (data) => {
    const { email, password } = data;

    const encryptedPassword = encrypt(password);

    const user = {
      email: email,
      password: encryptedPassword,
    };

    console.log("Registration data:", user);
    // Add logic to send registration data
    const registrationSuccessful = await registerUser(user);
    if (registrationSuccessful) {
      // Handle success, such as redirecting to a login page or showing a success message
      console.log('register successful!');

    } else {
      // Handle error, such as displaying an error message to the user
      console.log('register unsuccessful');

    }

  };
    // const registrationSuccessful = await registerUser(user);
    // if (registrationSuccessful) {
      
    //   console.log('register successful!');

    // } else {
      
    //   console.log('register unsuccessful');

    // }

    navigate(`/gegevensinvullenuser/${user.id}`);

    // dione kijk na dit gedeelde fix dit

    console.log("formdata: " + JSON.stringify(user));

  };

  return (
    <div className="register">
      <div className="register2">
        <div className="registerContent">
          <div className="registerheader">
            <div className="text-and-supporting-text">
              <div className="logo">
                <img
                  className="logo-image"
                  src="./public/Images/logo.png"
                  aria-label="logo accesibility"
                />
              </div>
              <h1 className="registertext">Registreer </h1>
            </div>
          </div>
          <div className="RegisterContent2">
            <form className="RegisterForm">
              <div className="RegisterInput-field">
                <div className="RegisterInput-field-base">
                  <div className="RegisterInput-with-label">
                    <label htmlFor="email" className="RegisterLabel">
                      Email
                    </label>
                    <div className="RegisterInput">
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

                        <input
                          id="email"
                          className="EmailInvullen"
                          type="email"
                          placeholder="Vul uw email in"
                          aria-label="EmailVeld"
                          {...register("email")}
                        />
                      </div>
                    </div>
                    <div className="error-message">
                      {errors.email && <p>{errors.email.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="RegisterInput-field">
                <div className="RegisterInput-field-base">
                  <div className="RegisterInput-with-label">
                    <label htmlFor="password" className="RegisterLabel">
                      Wachtwoord{" "}
                    </label>
                    <div className="RegisterInput">
                      <div className="content3">
                        <input
                          {...register("password")}
                          id="password"
                          className="Wachtwoord"
                          type={passwordVisible ? "text" : "password"}
                          placeholder="Vul uw wachtwoord in"
                          aria-label="Wachtwoordveld"
                        />
                      </div>
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
                    <div className="error-message">
                      {errors.password && <p>{errors.password.message}</p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="RegisterInput-field">
                <div className="RegisterInput-field-base">
                  <div className="RegisterInput-with-label">
                    <label className="label">Wachtwoord Bevestigen </label>
                    <div className="RegisterInput">
                      <div className="content3">
                        <input
                          className="Wachtwoord"
                          type={passwordVisible ? "text" : "password"}
                          placeholder="Vul uw wachtwoord opnieuw in"
                          aria-label="Wachtwoord bevestigenveld"
                          {...register("confirmPassword")}
                        />
                      </div>
                    </div>
                    <div className="error-message">
                      {errors.confirmPassword && (
                        <p>{errors.confirmPassword.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="registeractions">
              <div className="registerbutton">
                <button
                  className="registerbutton-base"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  Registreer
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <h3 className="al-een-account">Al een account? </h3>
            <div className="button2">
              <Link to="/login" className="LoginBtn">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
