export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPassword = (password: string) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(
    password,
  );
};

export const isValidName = (value: string) => {
  return (
    value.length >= 2 &&
    value.length <= 50 &&
    /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(value)
  );
};

export const isValidAge = (age: string) => {
  if (!/^\d+$/.test(age)) return false;

  const value = Number(age);

  return value >= 18 && value <= 80;
};

export const isValidUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};
