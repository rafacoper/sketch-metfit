export const emailValidator = {
  validator: function (v: string) {
    // Regular expression for basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  },
  message: (value: any) => `${value} is not a valid email address!`,
};