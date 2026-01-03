import "./form-label.styles.css";

export function FormLabel({ htmlFor, children, ...rest }) {
  return (
    <label className="form-label" htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
}
