import * as yup from 'yup';

export const schema = yup
  .object({
    id: yup.string(),
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();
export type FormData = yup.InferType<typeof schema>;
