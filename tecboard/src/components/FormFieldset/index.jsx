import "./form-fieldset.styles.css";
import { FormLabel } from "../FormLabel";

export function FormFieldset({ id, label, children }) {
  return (
    <fieldset className="form-fieldset">
      <FormLabel htmlFor={id}>{label}</FormLabel>
      {children}
    </fieldset>
  );
}
