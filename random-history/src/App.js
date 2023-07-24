import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GameHolder from './gameComponents/GameHolder';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<GameHolder/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
