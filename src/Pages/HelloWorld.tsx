import React from "react";
import { RegisterForm } from "../components/RegisterForm";

export const HelloWorld: React.FC = () => {
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
                <RegisterForm />
            </div>
        </>
    );
};
