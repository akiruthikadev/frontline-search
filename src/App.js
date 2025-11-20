// import RefHook from './Components/RefHook';
// import MyClass from './Components/ClassCompo';
// import MyFunction from './Components/FunctionCompo';
// import ParantCompo from './Components/PareChildCombo';
// import '/bootstrap/dist/css/bootstrap.min.css';
// import ToDoList from './Components/projects/DodoList';~
// import Butterfly from './Components/projects/butterfle';
// import EventHandle from "./Components/EventHandling";
// import ConditionIf from './Components/conditional';
// import { Counter } from './Components/Stake';
import "bootstrap/dist/css/bootstrap.min.css";
// import SearchBox from "./Components/filter";
// import Navigation from "./Components/navigation";
// import ControllComponent from './Components/controlledCompo';
import { BrowserRouter } from "react-router-dom";
// import CounterValue from './Components/counterValue';
// import AddTask from "./Components/AddTask";
// import FeedbackForm from "./feedback";
import CompanyFilter from "./Components/CompanyFilter";
// import SearchTask from './Components/Task';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ParentComponents from './Components/Task13';
// import CounterReducer from './Components/Reducer';
// import Counter from './Components/MemoHook';
// import CounterEffective from './Components/EffectiveHook';

// import ParentComponents from "./Components/Task13";
const background = {
  color: "",
  // textAlign: 'center'
};
function App() {
  return (
    <div className="" style={background}>
      <BrowserRouter>
        {/* <MyFunction/>
      <MyClass /> 
      <ParantCompo/> */}
        {/* <ParentComponents/> */}
        {/* <Counter /> */}
        {/* <EventHandle/>  */}
        {/* <ConditionIf/>  */}
        {/* <ToDoList/>   */}
        {/* <Butterfly /> */}
        {/* <RefHook /> */}
        {/* <CounterEffective/> */}
        {/* <CounterReducer/> */}
        {/* <Counter/> */}
        {/* <Navigation/> */}
        {/* <ControllComponent/> */}
        {/* <Routes>
              <Route path="/" element={<ControllComponent />} />
              <Route path="/dashboard" element={<ParentComponents />} />
            </Routes> */}
        {/* <SearchBox /> */}
        {/* <CounterValue/> */}
        {/* <SearchTask/> */}
        {/* <AddTask/>   */}

        {/* <FeedbackForm /> */}

        <CompanyFilter />
      </BrowserRouter>
    </div>
  );
}

export default App;
