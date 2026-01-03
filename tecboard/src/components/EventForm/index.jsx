import "./event-form.styles.css";
import { FormTitle } from "../FormTitle";
import { FormFieldset } from "../FormFieldset";
import { FormInput } from "../FormInput";
import { Button } from "../Button";
import { DropDownList } from "../DropDownList";

export function EventForm({ themes, whenSubmit }) {
  function eventSubmitted(formData) {

    const event = {
      title: formData.get("eventTitle"),
      imageUrl: formData.get("eventCover"),
      date: new Date(formData.get("eventDate")),
      theme: themes.find(function (item) {
        return item.id == formData.get("eventTheme");
      }),
    };

    whenSubmit(event);
  }

  return (
    <form className="event-form" action={eventSubmitted}>
      <FormTitle>Preencha para criar um evento:</FormTitle>

      <div className="form-fields">
        <FormFieldset label="Título do Evento:" htmlFor="eventTitle">
          <FormInput
            id="eventTitle"
            name="eventTitle"
            type="text"
            placeholder="Nome do Evento"
          />
        </FormFieldset>

        <FormFieldset label="URL da Capa do Evento:" htmlFor="eventCover">
          <FormInput
            id="eventCover"
            name="eventCover"
            type="text"
            placeholder="http://link-da-image.com/imagem.png"
          />
        </FormFieldset>

        <FormFieldset label="Data do Evento:" htmlFor="eventDate">
          <FormInput 
            id="eventDate" 
            name="eventDate" 
            type="date" 
          />
        </FormFieldset>

        <FormFieldset label="Tema do Evento:" htmlFor="eventTheme">
          <DropDownList 
            id="eventTheme" 
            name="eventTheme" 
            items={themes} 
          />
        </FormFieldset>
      </div>

      <div className="actions">
        <Button>Criar Evento</Button>
      </div>
    </form>
  );
}
