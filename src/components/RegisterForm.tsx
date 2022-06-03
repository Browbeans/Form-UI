import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { validateEmail } from "../helpers/validators";
import { RegisterFormInterface } from "../types/types";
import { MaskTextIcon } from "./images/MaskTextIcon";
import { UnmaskTextIcon } from "./images/UnmaskTextIcon";

interface RegisterFormProps {
    onFormSubmit: (values: RegisterFormInterface) => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ onFormSubmit }) => {
    const [masked, setMasked] = useState(true);

    const { register, handleSubmit, formState, getValues } =
        useForm<RegisterFormInterface>({
            mode: "onChange",
        });

    const onSubmit = (data: RegisterFormInterface) => {
        onFormSubmit(data);
    };

    return (
        <div className="formContainer">
            <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="inputGroup">
                    <div className="inputContainer">
                        <label htmlFor="firstName">Förnamn</label>
                        <input
                            tabIndex={1}
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
                            tabIndex={2}
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
                                tabIndex={3}
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
                                <span tabIndex={4}>
                                    {masked ? (
                                        <UnmaskTextIcon />
                                    ) : (
                                        <MaskTextIcon />
                                    )}
                                </span>
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
                            tabIndex={5}
                            className="input"
                            type={"password"}
                            {...register("repeatPassword", {
                                required: true,
                                minLength: {
                                    value: 2,
                                    message:
                                        "Vänligen ange ditt fullständiga förnamn",
                                },
                                validate: {
                                    validatePasswordMatch: (value) =>
                                        value === getValues("password") ||
                                        "Lösenord stämmer inte överens",
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
                        <label htmlFor="email">Mailadress</label>
                        <input
                            tabIndex={6}
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
                            tabIndex={7}
                            className="checkbox"
                            type={"checkbox"}
                            {...register("acceptTerms", {
                                required: true,
                            })}
                            {...register}
                        />
                        <label htmlFor="checkbox">
                            Läs gärna våra villkor och acceptera om allt känns
                            bra, du hittar dem här:&nbsp;
                            <a tabIndex={8} href="#">
                                www.google.com
                            </a>
                        </label>
                    </div>
                </div>
                <div className="submitContainer">
                    <button
                        tabIndex={9}
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
