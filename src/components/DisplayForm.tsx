import React, { FC } from "react";
import { NotificationColor, RegisterFormInterface } from "../types/types";
import { Notification } from "../components/Notification";

interface DisplayFormProps {
    formValues: RegisterFormInterface;
}

export const DisplayForm: FC<DisplayFormProps> = ({ formValues }) => {
    return (
        <div className="bodySection">
            <Notification
                background={NotificationColor.NOTIFICATION_GREEN}
                title="Din registrering är nu slutförd!"
                listItems={[
                    `Förnamn: ${formValues.firstName}`,
                    `Efternamn: ${formValues.lastName}`,
                    `Mailadress: ${formValues.email}`,
                    "Har du glömt ditt lösenord klicka på länken",
                ]}
            />
            <a href="#">Återställ lösenord</a>
        </div>
    );
};
