import "./App.css";
import { EventForm } from "./components/EventForm";

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="logo" />
      </header>
      <section>
        <img src="/banner.png" alt="banner" />
      </section>
      <EventForm />
    </main>
  );
}

export default App;
