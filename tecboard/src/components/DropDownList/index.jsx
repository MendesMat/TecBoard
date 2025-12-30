import "./drop-down-list.styles.css";

export function DropDownList({ id }) {
  return (
    <select className="drop-down-list" id={id}>
      <option value="">Selecione uma opção</option>
    </select>
  );
}
