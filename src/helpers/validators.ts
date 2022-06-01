export const validateEmail = (email: string) =>
    /^([\w_.\-+])+@([\w-]+\.)+([\w]{2,10})+$/.test(email);
