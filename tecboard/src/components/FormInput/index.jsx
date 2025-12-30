import "./form-input.styles.css";

export function FormInput({ className, ...rest }) {
  return <input {...rest} className={`form-input ${className ?? ""}`.trim()} />;
}
