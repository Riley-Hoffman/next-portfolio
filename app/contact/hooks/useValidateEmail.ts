
export function useValidateEmail(email: string): boolean {
    var re =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

