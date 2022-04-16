import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TUseRef } from './pages/test_useRef'
import { TUseMemo } from './pages/test_useMemo'
import { TUseCallback } from './pages/test_useCallback'
import { TCallback2 } from './pages/test_useCb2'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TUseRef />} />
          <Route path='/memo' element={<TUseMemo />} />
          <Route path='/callback' element={<TUseCallback />} />
          <Route path='/callback2' element={<TCallback2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
