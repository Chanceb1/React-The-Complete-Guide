import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
import EffectComponent from './components/EffectComponent.jsx';
import FocusInput from './components/FocusInput.jsx';

export default function App() {
  return (
    <>
      <EffectComponent />
      <FocusInput />
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
