import Calculator from '@/pages/calculator/Calculator';
import CharacterCounter from '@/pages/character-counter/CharacterCounter';
import Home from '@/pages/home/Home';
import Pricing from '@/pages/pricing/Pricing';
import SocialMedia from '@/pages/social-media/SocialMedia';
import Todo from '@/pages/todo-app/Todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ClockQuiz from './pages/clock-quiz/ClockQuiz';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/character-counter" element={<CharacterCounter />} />
          <Route path="/todo-app" element={<Todo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/clock-quiz" element={<ClockQuiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
