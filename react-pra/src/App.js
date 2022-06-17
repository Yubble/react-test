import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TUseRef } from './pages/test_useRef'
import { TRefCount } from './pages/useRef_count'
import { TUseEffect } from './pages/test_useEffect'
import { TUseEffectReturn } from './pages/test_useEffectReturn'
import { TUseMemo } from './pages/test_useMemo'
import { TUseCallback } from './pages/test_useCallback'
import { TCallback2 } from './pages/test_useCb2'
import { TForwardRef } from './pages/test_forwardRef'
import { TCompDestroy } from './pages/test_componentsDestroy'
import { THOC } from './pages/test_HOC'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/testComDestroy' element={<TCompDestroy />}></Route>
          <Route path='/testForwardRef' element={<TForwardRef />}></Route>
          <Route path='/testRef' element={<TUseRef />} />
          <Route path='/refCount' element={<TRefCount />} />
          <Route path='/testUseEffect' element={<TUseEffect />} />
          <Route path='/testUseEffectReturn' element={<TUseEffectReturn />} />
          <Route path='/memo' element={<TUseMemo />} />
          <Route path='/callback' element={<TUseCallback />} />
          <Route path='/callback2' element={<TCallback2 />} />
          <Route path='/testHOC' element={<THOC />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
