import "./form-fieldset.styles.css";
import { FormLabel } from "../FormLabel";

export function FormFieldset({ label, htmlFor, children }) {
  return (
    <fieldset className="form-fieldset">
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      {children}
    </fieldset>
  );
}
