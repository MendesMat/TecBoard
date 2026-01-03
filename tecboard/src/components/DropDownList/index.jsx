import "./drop-down-list.styles.css";

export function DropDownList({ items, ...rest }) {
  return (
    <select className="drop-down-list" {...rest} defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {items.map(function (item) {
        return (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
}
