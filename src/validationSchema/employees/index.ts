import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  position: yup.string().required(),
  hire_date: yup.date().nullable(),
  salary: yup.number().integer().nullable(),
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
