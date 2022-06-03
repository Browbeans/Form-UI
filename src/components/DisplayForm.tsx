import React, { FC } from "react";
import { RegisterFormInterface } from "../types/types";

interface DisplayFormProps {
    formValues: RegisterFormInterface;
}

export const DisplayForm: FC<DisplayFormProps> = ({ formValues }) => {
    return (
        <div className="bodySection">
            <h2>Din registrering är nu slutförd!</h2>
            <h4>Här är dina uppgifter</h4>
            <p>{`Förnamn: ${formValues.firstName}`}</p>
            <p>{`Efternamn: ${formValues.lastName}`}</p>
            <p>{`Mailadress: ${formValues.email}`}</p>
            <p>Har du glömt ditt lösenord klicka på länken</p>
            <link href="#">återställ lösenord</link>
        </div>
    );
};
