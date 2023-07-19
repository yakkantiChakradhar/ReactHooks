
import './App.css';
import React from 'react';
import ComponentC from './Components/ComponentC';
// import Fetching3 from './Components/Fetching3';
// import Fetching1 from './Components/Fetching1';
// import Fetching2 from './Components/Fetching2';
/* import IntervelHookCounter from './Components/IntervelHookCounter';*/
/* import HookCounterOne from './Components/HookCounterOne';
import HookMouse from './Components/HookMouse';
import MouseCounter from './Components/MouseCounter'; */
/* import UseState from './Components/UseState';
import UseStatePreviousState from './Components/UseStatePreviousState';
import UseStateWithArray from './Components/UseStateWithArray';
import UseStateWithObject from './Components/UseStateWithObject';
 */
export const userContext = React.createContext()
export const channelContext = React.createContext()
function App() {
  return (
    <div className="App">
      
     {/*  <h5>welcome to React HOOKS</h5>
<UseState/>
<br/>
<UseStatePreviousState/><br />
<UseStateWithObject /><br/>
<UseStateWithArray/>
       */}
       {/* <HookCounterOne /><HookMouse />

       <MouseCounter/> */}

      {/*  <IntervelHookCounter /> */}
    {/*   <Fetching1 /> */}
   {/*  <Fetching2 /> */}
  {/*  <Fetching3 /> */}
<userContext.Provider value={'vishwas'} >
  <channelContext.Provider value={'codeEvolution'} >
  <ComponentC />
  </channelContext.Provider>

</userContext.Provider>



    </div>
  );
}

export default App;
