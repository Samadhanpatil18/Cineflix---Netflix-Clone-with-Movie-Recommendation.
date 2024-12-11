export default function checkDataValidation(email, password) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    regex.test();
    const isEmailValid = regex.test(email);
    if (password.length < 5) {
        return "Invalid password"
    }

    if (!isEmailValid) return "Invalid email";

    return null;
}