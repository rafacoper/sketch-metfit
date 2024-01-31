export const phoneValidator = {
  validator: function (v: number) {
    // Custom validator for phone numbers
    return /^\d{2}-\d{5}-\d{4}$/.test(v.toString());
  },
  message: (props: { value: any }) => `${props.value} is not a valid phone number!`,
};
