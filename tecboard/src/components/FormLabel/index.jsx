import "./form-label.styles.css";

export function FormLabel({ htmlFor, children }) {
  return (
    <label className="form-label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
