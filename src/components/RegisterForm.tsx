import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { RegisterFormInterface } from "../types/types";

export const RegisterForm: FC = () => {
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
                <div className="inputContainer">
                    <label htmlFor="firstName">Förnamn</label>
                    <input
                        className="input"
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
                                    "Vänligen ange ditt fullständiga förnamn",
                            },
                        })}
                        {...register}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Email-adress</label>
                    <input
                        className="input"
                        type={"text"}
                        {...register("email", {
                            required: true,
                            minLength: {
                                value: 2,
                                message:
                                    "Vänligen ange ditt fullständiga förnamn",
                            },
                        })}
                        {...register}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Lösenord</label>
                    <input
                        className="input"
                        type={"text"}
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
                </div>
                <div className="inputContainer">
                    <label htmlFor="repeatPassword">Upprepa lösenord</label>
                    <input
                        className="input"
                        type={"text"}
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
                        Läs gärna våra villkor och accepter om allt känns bra,
                        du hittar dem här:&nbsp;
                        <a href="#">www.google.com</a>
                    </label>
                </div>
                <div className="submitContainer">
                    <button className="button" onClick={() => {}}>
                        ajjebus
                    </button>
                </div>
            </form>
        </div>
    );
};
