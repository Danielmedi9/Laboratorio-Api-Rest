import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required.validator],
    bestSentence: [Validators.required.validator],
  },
};

export const formValidation = createFormikValidation(validationSchema);
