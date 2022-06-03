import React, { FC } from "react";
import { NotificationColor } from "../types/types";

interface NotificationProps {
    title?: string;
    listItems?: string[];
    subTitle?: string;
    background?: NotificationColor;
}

export const Notification: FC<NotificationProps> = ({
    title,
    listItems,
    subTitle,
    background = NotificationColor.NOTIFICATION_STANDARD,
}) => (
    <div className={`notificationContainer ${background}`}>
        {title && <h2 className="notificationTitle">{title}</h2>}
        {listItems && (
            <ul className="notificationList">
                {listItems.map((listItem) => (
                    <li className="notificationListItem">{listItem}</li>
                ))}
            </ul>
        )}
        {subTitle && <p>{subTitle}</p>}
    </div>
);
