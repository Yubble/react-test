import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TUseRef } from './pages/test_useRef'
import { TRefCount } from './pages/useRef_count'
import { TUseEffect } from './pages/test_useEffect'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/testRef' element={<TUseRef />} />
          <Route path='/refCount' element={<TRefCount />} />
          <Route path='/testUseEffect' element={<TUseEffect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
