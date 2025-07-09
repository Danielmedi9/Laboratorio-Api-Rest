import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from '#common/components';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => Promise<void>;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      initialValues={character}
      enableReinitialize={true}
      validate={(values) => formValidation.validateForm(values)}
      onSubmit={(values) => {
        console.log('Submitting:', values);
        onSave(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form className={classes.root}>
          <TextFieldComponent
            name="name"
            label="Name"
            value={values.name}
            onChange={handleChange}
          />

          <TextFieldComponent
            name="bestSentence"
            label="Best Sentence"
            multiline={true}
            rows={3}
            value={values.bestSentence || ''}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
