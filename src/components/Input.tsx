import { TextField, Button } from "@mui/material";
import { Formik, Form, useField } from "formik";

type InputFormType = {
  label: string;
  name: string;
};

const InputForm = ({ label, ...props }: InputFormType) => {
  const [field] = useField(props);

  return <TextField label={label} variant="standard" {...field} {...props} />;
};

export default function Input() {
  const onSubmit = () => {};
  return (
    <Formik initialValues={{ text: "" }} onSubmit={onSubmit}>
      {() => (
        <Form className="flex flex-col gap-2">
          <InputForm name="adress" label="address" />
          <InputForm name="data-inp" label="put some data" />
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
