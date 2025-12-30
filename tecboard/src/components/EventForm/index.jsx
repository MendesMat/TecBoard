import "./event-form.styles.css";
import { FormTitle } from "../FormTitle";
import { FormFieldset } from "../FormFieldset";
import { FormInput } from "../FormInput";
import { Button } from "../Button";
import { DropDownList } from "../DropDownList";

export function EventForm() {
  return (
    <form className="event-form">
      <FormTitle>Preencha para criar um evento:</FormTitle>

      <div className="form-fields">
        <FormFieldset id="eventTitle" label="Título do Evento:">
          <FormInput id="eventTitle" type="text" placeholder="Nome do Evento" />
        </FormFieldset>

        <FormFieldset id="eventDate" label="Data do Evento:">
          <FormInput id="eventDate" type="date" />
        </FormFieldset>

        <FormFieldset id="eventTheme" label="Tema do Evento:">
          <DropDownList id="eventTheme" />
        </FormFieldset>
      </div>

      <div className="actions">
        <Button>Criar Evento</Button>
      </div>
    </form>
  );
}
