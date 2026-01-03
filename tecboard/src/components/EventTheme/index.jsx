import "./event-theme.styles.css";

export function EventTheme({ theme }) {
  return <h3 className="event-theme-title">{theme.name}</h3>;
}