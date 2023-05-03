import './App.css';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';
import Comp3 from './Components/Comp3';
import Error  from './Components/Error';
import Home from './Components/Home';
import UseStateHook from './Components/useStateHook';
import UseEffectHook from './Components/UseEffectHook';
import UseRefHook from './Components/UseRefHook';
import { ColorContext } from './Components/UseContextProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';


function App() {

  const { data , changeData } = useContext(ColorContext) ;

  return (

    <div className="App">

{data}
      <BrowserRouter>
        <Routes>
        <Route path='/RefHook' element={ <UseRefHook/>}/>
          <Route path='/EffectHook' element={ <UseEffectHook/>}/>
          <Route path='/StateHook' element= { <UseStateHook/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/Comp1" element={<Comp1 />} />
          <Route path="/Comp2" element={<Comp2 />} />
          <Route path="/Comp3" element={<Comp3 />} />
          <Route path="*" element={<Error />} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
