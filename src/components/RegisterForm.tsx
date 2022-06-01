import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { validateEmail } from "../helpers/validators";
import { RegisterFormInterface } from "../types/types";

export const RegisterForm: FC = () => {
    const [masked, setMasked] = useState(true);
    const [pinCode, setPinCode] = useState<string>("");

    const { register, trigger, handleSubmit, setValue, control, formState } =
        useForm<RegisterFormInterface>({
            mode: "onChange",
        });

    const onSubmit = (data: RegisterFormInterface) => {
        console.log(data);
    };

    return (
        <div className="formContainer">
            <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="inputGroup">
                    <div className="inputContainer">
                        <label htmlFor="firstName">Förnamn</label>
                        <input
                            className={
                                !formState.errors.firstName?.message
                                    ? "input"
                                    : "inputError"
                            }
                            type={"text"}
                            {...register("firstName", {
                                required: true,
                                minLength: {
                                    value: 2,
                                    message:
                                        "Vänligen ange ditt fullständiga förnamn",
                                },
                            })}
                            {...register}
                        />
                        {formState.errors.firstName && (
                            <p className="errorText">
                                {formState.errors.firstName.message}
                            </p>
                        )}
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="lastName">Efternamn</label>
                        <input
                            className="input"
                            type={"text"}
                            {...register("lastName", {
                                required: true,
                                minLength: {
                                    value: 2,
                                    message:
                                        "Vänligen ange ditt fullständiga efternamn",
                                },
                            })}
                            {...register}
                        />
                        {formState.errors.lastName && (
                            <p className="errorText">
                                {formState.errors.lastName.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="inputGroup">
                    <div className="inputContainer">
                        <label htmlFor="password">Lösenord</label>
                        <div className="input-with-icon">
                            <input
                                className="form-control"
                                type={masked ? "password" : "text"}
                                {...register("password", {
                                    required: true,
                                    minLength: {
                                        value: 2,
                                        message:
                                            "Vänligen ange ditt fullständiga förnamn",
                                    },
                                })}
                                {...register}
                            />
                            <div
                                onClick={() => setMasked((masked) => !masked)}
                                className="btn btn-default icon"
                            >
                                <span>P</span>
                            </div>
                        </div>
                        {formState.errors.password && (
                            <p className="errorText">
                                {formState.errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="repeatPassword">Upprepa lösenord</label>
                        <input
                            className="input"
                            type={masked ? "password" : "text"}
                            {...register("repeatPassword", {
                                required: true,
                                minLength: {
                                    value: 2,
                                    message:
                                        "Vänligen ange ditt fullständiga förnamn",
                                },
                            })}
                            {...register}
                        />
                        {formState.errors.repeatPassword && (
                            <p className="errorText">
                                {formState.errors.repeatPassword.message}
                            </p>
                        )}
                    </div>
                </div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div className="inputContainer">
                        <label htmlFor="email">Mailaddress</label>
                        <input
                            className="input"
                            type={"text"}
                            {...register("email", {
                                required: true,
                                minLength: {
                                    value: 2,
                                    message:
                                        "Vänligen ange en korrekt mailaddress",
                                },
                                validate: {
                                    validation: (value) =>
                                        validateEmail(value) ||
                                        "Vänligen ange en korrekt mailaddress",
                                },
                            })}
                            {...register}
                        />
                        {formState.errors.email && (
                            <p className="errorText">
                                {formState.errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="checkboxContainer">
                        <input
                            className="checkbox"
                            type={"checkbox"}
                            {...register("acceptTerms", {
                                required: true,
                                minLength: {
                                    value: 2,
                                    message:
                                        "Vänligen ange ditt fullständiga förnamn",
                                },
                            })}
                            {...register}
                        />
                        <label htmlFor="repeatPassword">
                            Läs gärna våra villkor och accepter om allt känns
                            bra, du hittar dem här:&nbsp;
                            <a href="#">www.google.com</a>
                        </label>
                    </div>
                </div>
                <div className="submitContainer">
                    <button
                        disabled={!formState.isValid}
                        className="button"
                        onClick={() => {}}
                    >
                        Registrera
                    </button>
                </div>
            </form>
        </div>
    );
};
