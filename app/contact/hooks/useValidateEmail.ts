const useValidateEmail = (email: string): boolean => {
    var re =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

export default useValidateEmail;
