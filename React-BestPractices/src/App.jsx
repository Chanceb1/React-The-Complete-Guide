import Accordion from "./components/Accordion";
import AccordionItem from "./components/AccordionItem";

function App() {
  return (
    <main>
      <h2>why work with us?</h2>
      <Accordion className="accordion">
        <AccordionItem
          className='accordion-item'
          title="We are the best"
          id='1'
        >
          <article>
            <p>You can&apos;t go wrong with us.</p>
            <p>
              We are the best at what we do. We have been in business for
              over 20 years.
            </p>
          </article>
        </AccordionItem>
        <AccordionItem
          className='accordion-item'
          title="We are available"
          id="2"
        >
          <article>
            <p>Call us anytime.</p>
            <p>
              We are available 24/7. You can reach us by phone, email, or chat.
            </p>
          </article>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

export default App;
