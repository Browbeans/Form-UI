export interface RegisterFormInterface {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
    acceptTerms: boolean;
}

export enum NotificationColor {
    NOTIFICATION_STANDARD = "notificationStandard",
    NOTIFICATION_RED = "notificationRed",
    NOTIFICATION_YELLOW = "notificationYellow",
    NOTIFICATION_GREEN = "notificationGreen",
}
