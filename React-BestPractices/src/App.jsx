import Accordion from "./components/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from "./Place";

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];


function App() {
  return (
    <main>
      <section>
        <h2>why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item
            className='accordion-item'
            id='1'
          >
            <Accordion.Title className='accordion-item-title'>
              We are the best
            </Accordion.Title>
            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are the best at what we do. We have been in business for
                  over 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            className='accordion-item'
            id="2"
          >
            <Accordion.Title className='accordion-item-title'>
              We are reliable
            </Accordion.Title>
            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>Call us anytime.</p>
                <p>
                  We are available 24/7. You can reach us by phone, email, or chat.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => (
            <Place item={item} />
          )}
        </SearchableList>
        <SearchableList items={["items", "test", "thrid"]} itemKeyFn={(item) => item}>
          {(item) => (
            item
          )}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
