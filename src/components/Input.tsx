import { TextField, Button } from "@mui/material";
import { Formik, Form, useField } from "formik";
import { useCallback } from "react";
import { store } from "../redux/store";
import { uploadInputData } from "../redux/mainSlice";

type InputFormType = {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
};

const InputForm = ({ label, ...props }: InputFormType) => {
  const [field] = useField(props);

  return <TextField label={label} variant="standard" {...field} {...props} />;
};

export type valuesType = {
  inp_address: string;
  inp_text: string;
};

type utilsType = {
  resetForm: () => void;
};

export default function Input() {
  const onSubmit = useCallback((values: valuesType, utils: utilsType) => {
    store.dispatch(uploadInputData(values));
    utils.resetForm();
  }, []);

  return (
    <Formik
      initialValues={{ inp_address: "", inp_text: " " }}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="flex flex-col gap-2">
          <InputForm
            name="inp_address"
            label="address"
            placeholder={window.location.href}
          />
          <InputForm name="inp_text" label="put text here" placeholder="sdfsdf" />
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
