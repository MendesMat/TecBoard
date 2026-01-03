import "./App.css";
import { useState } from "react";
import { Banner } from "./components/Banner";
import { EventForm } from "./components/EventForm";
import { EventTheme } from "./components/EventTheme";
import { EventCard } from "./components/EventCard";

function App() {
  const themes = [
    { id: 0, name: "FRONT-END" },
    { id: 1, name: "BACK-END" },
    { id: 2, name: "DEVOPS" },
    { id: 3, name: "INTELIGÊNCIA ARTIFICIAL" },
    { id: 4, name: "DATA SCIENCE" },
    { id: 5, name: "CLOUD" },
  ];

  const [events, setEvents] = useState([
    {
      imagePath: "https://i.imgur.com/xvcDYPy.jpeg",
      theme: themes[0],
      date: new Date(),
      title: "Mulheres no Front",
    },
  ]);

  function addEvent(event) {
    setEvents([...events, event]);
    console.log("Eventos: ", events);
  }

  // Função que verifica se existe evento para determinado tema
  function hasEventsForTheme(theme) {
    return events.some((event) => event.theme.id === theme.id);
  }

  // Função que retorna todos os eventos de um dado tema
  function getEventsByTheme(theme) {
    return events.filter((event) => event.theme.id === theme.id);
  }

  // Função que renderiza o bloco de eventos agrupado por tema
  function renderThemeSection(theme) {
    if (!hasEventsForTheme(theme)) return null;

    return (
      <section key={theme.id}>
        <EventTheme theme={theme} />
        <div className="events-cards">
          {getEventsByTheme(theme).map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="logo" />
      </header>
      <Banner />
      <EventForm themes={themes} whenSubmit={addEvent} />
      <section className="events-container">
        {themes.map(renderThemeSection)}
      </section>
    </main>
  );
}

export default App;
