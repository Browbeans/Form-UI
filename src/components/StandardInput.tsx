import React, { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";
import { RegisterFormInterface } from "../types/types";

interface StandardInputProps {
    register: UseFormRegister<RegisterFormInterface>;
    formState: FormState<RegisterFormInterface>;
    name: string;
}

export const StandardInput: FC<StandardInputProps> = ({
    register,
    formState,
    name,
}) => {
    return (
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
                // {...register(name)}
                name={name}
            />
            {formState.errors.firstName && (
                <p className="errorText">
                    {formState.errors.firstName.message}
                </p>
            )}
        </div>
    );
};
