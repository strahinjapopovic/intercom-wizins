export const makeVerificationCode = (length) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*?";
    let res= "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        res += charset[randomIndex];
    }
    return res;
};
export default makeVerificationCode;