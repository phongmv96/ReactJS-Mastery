import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import {CORE_CONCEPTS} from "./data";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map((concept, key) =>
                <CoreConcept
                  key={key}
                  title={concept.title}
                  description={concept.description}
                  image={concept.image}
                />)
            }
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
