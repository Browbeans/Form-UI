import React, { FC } from "react";
import { FieldError, FormState, UseFormRegisterReturn } from "react-hook-form";
import { RegisterFormInterface } from "../types/types";
import { MaskTextIcon } from "./images/MaskTextIcon";
import { UnmaskTextIcon } from "./images/UnmaskTextIcon";
import { StandardInputProps } from "./StandardInput";

interface PasswordInputProps extends StandardInputProps {
    masked: boolean;
    setMasked: (masked: boolean) => void;
    maskedTabIndex: number;
}

export const PasswordInput: FC<PasswordInputProps> = ({
    register,
    formState,
    error,
    label,
    type,
    tabIndex,
    masked,
    setMasked,
    maskedTabIndex,
}) => {
    return (
        <div className="inputContainer">
            {label && <label htmlFor={error?.ref?.name}>{label}</label>}
            <div className="input-with-icon">
                <input
                    tabIndex={tabIndex}
                    className={
                        !formState.errors.firstName?.message
                            ? "input"
                            : "inputError"
                    }
                    type={masked ? "password" : "text"}
                    {...register}
                />
                <div
                    onClick={() => setMasked(!masked)}
                    className="btn btn-default icon"
                >
                    <span tabIndex={maskedTabIndex}>
                        {masked ? <UnmaskTextIcon /> : <MaskTextIcon />}
                    </span>
                </div>
            </div>
            {error?.message && <p className="errorText">{error.message}</p>}
        </div>
    );
};
