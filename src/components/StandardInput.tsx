import React, { FC } from "react";
import { FieldError, FormState, UseFormRegisterReturn } from "react-hook-form";
import { RegisterFormInterface } from "../types/types";

interface StandardInputProps {
    register: UseFormRegisterReturn;
    formState: FormState<RegisterFormInterface>;
    error: FieldError | undefined;
    tabIndex: number;
    type: React.HTMLInputTypeAttribute;
    label?: string;
}

export const StandardInput: FC<StandardInputProps> = ({
    register,
    formState,
    error,
    label,
    type,
    tabIndex,
}) => {
    return (
        <div className="inputContainer">
            {label && <label htmlFor={error?.ref?.name}>{label}</label>}
            <input
                tabIndex={tabIndex}
                className={
                    !formState.errors.firstName?.message
                        ? "input"
                        : "inputError"
                }
                type={type}
                {...register}
            />
            {error?.message && <p className="errorText">{error.message}</p>}
        </div>
    );
};
