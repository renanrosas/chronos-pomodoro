import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quam
        atque molestias fuga quisquam tenetur! Necessitatibus quod, hic illum
        minus harum ut molestias fugiat nisi quis temporibus minima adipisci
        enim.
      </p>
    </>
  );
}
