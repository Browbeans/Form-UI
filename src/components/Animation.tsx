import React, { Children, FC } from "react";

export const FadeIn: FC = ({ children }) => {
    return <div className="animationWrapper">{children}</div>;
};
