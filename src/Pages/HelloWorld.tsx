import React, { useState } from "react";
import { RegisterForm } from "../components/RegisterForm";
import { Notification } from "../components/Notification";
import { RegisterFormInterface } from "../types/types";
import { DisplayForm } from "../components/DisplayForm";

export const HelloWorld: React.FC = () => {
    const [formValues, setFormValues] = useState<
        RegisterFormInterface | undefined
    >(undefined);

    return (
        <>
            <div className="heroContainer">
                <h1 className="heroTitle">Hello World!</h1>
                <p className="heroText">
                    Dolor eveniet mollitia omnis sequi obcaecati. Nobis sit nam
                    iure sit earum. Dolorem natus dolore perspiciatis accusamus
                    numquam maiores lorem!
                </p>
            </div>
            <div className="bodySection">
                {!formValues && (
                    <>
                        <Notification
                            title="Få full tillgång till all vår funktionalitet bland annat: "
                            listItems={[
                                "Allt innehåll nanana ",
                                "Chatta med andra användare",
                                "Ta del av hela vår kunskapsbank",
                                "Ta del av hela vår kunskapsbank",
                                "Ta del av hela vår kunskapsbank",
                            ]}
                        />
                        <RegisterForm
                            onFormSubmit={(values: RegisterFormInterface) =>
                                setFormValues(values)
                            }
                        />
                    </>
                )}
                {formValues && (
                    <>
                        <DisplayForm formValues={formValues} />
                    </>
                )}
            </div>
        </>
    );
};
