import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MonsterList from './Components/MonsterList';
import MonsterStatsPage from './Components/MonsterStatsPage';
import './App.css';

function App() {
  const [selectedMonster, setSelectedMonster] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/'
            element={<MonsterList setSelectedMonster={setSelectedMonster}/>} />
          {selectedMonster && 
            <Route path={`/${selectedMonster.index}`}
              element={<MonsterStatsPage
              selectedMonster={selectedMonster}/>} />
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
