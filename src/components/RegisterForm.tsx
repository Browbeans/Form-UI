import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { validateEmail } from "../helpers/validators";
import { RegisterFormInterface } from "../types/types";
import { MaskTextIcon } from "./images/MaskTextIcon";
import { UnmaskTextIcon } from "./images/UnmaskTextIcon";
import { StandardInput } from "./StandardInput";

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
                    <StandardInput
                        tabIndex={1}
                        register={register("firstName", {
                            required: true,
                            minLength: {
                                value: 2,
                                message: "Vänligen ange ditt förnamn",
                            },
                        })}
                        formState={formState}
                        error={formState.errors.firstName}
                        label={"Förnamn"}
                        type={"text"}
                    />
                    <StandardInput
                        tabIndex={2}
                        register={register("lastName", {
                            required: true,
                            minLength: {
                                value: 2,
                                message: "Vänligen ange ditt efternamn",
                            },
                        })}
                        formState={formState}
                        error={formState.errors.lastName}
                        label={"Efternamn"}
                        type={"text"}
                    />
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
                    <StandardInput
                        tabIndex={5}
                        register={register("repeatPassword", {
                            required: true,
                            minLength: {
                                value: 2,
                                message: "Lösenordet måste var minst 2 tecken",
                            },
                            validate: {
                                validatePasswordMatch: (value) =>
                                    value === getValues("password") ||
                                    "Lösenord stämmer inte överens",
                            },
                        })}
                        formState={formState}
                        error={formState.errors.repeatPassword}
                        label={"Upprepa lösenord"}
                        type={"password"}
                    />
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
                    <StandardInput
                        tabIndex={6}
                        register={register("email", {
                            required: true,
                            minLength: {
                                value: 2,
                                message: "Vänligen ange en korrekt mailaddress",
                            },
                            validate: {
                                validation: (value) =>
                                    validateEmail(value) ||
                                    "Vänligen ange en korrekt mailaddress",
                            },
                        })}
                        formState={formState}
                        error={formState.errors.email}
                        label={"Mailadress"}
                        type={"email"}
                    />
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
