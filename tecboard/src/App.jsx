import './App.css'

function EventForm() {
  return (
    <form className="event-form">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="eventTitle">Título do Evento:</label>
        <input type="text" id="eventTitle"/>
      </fieldset>
    </form>
  )
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="logo"/>
      </header>
      <section>
        <img src="/banner.png" alt="banner"/>
      </section>
      <EventForm/>
    </main>
  )
}

export default App