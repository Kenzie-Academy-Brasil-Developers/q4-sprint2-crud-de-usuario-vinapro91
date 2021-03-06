import { hashSync } from "bcryptjs";
import * as yup from "yup";

const createUserShape = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .transform((pwd) => hashSync(pwd, 10))
    .required(),
  isAdm: yup.boolean(),
});

export { createUserShape };
