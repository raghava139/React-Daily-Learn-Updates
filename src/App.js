import React, { useEffect, useState } from "react";
import LazyLoading from "./LazyLoading/Lazy1";
import TestingAPI from "./Custom Functions/TestAPI";
// import NestedWayDropdown from "./Country-states";

// import PageLoading from "./Hooks/useEffect_MOUN";
// import Globals from "./Hooks/CONTEXT API/useContext-Main";
// import DoucmentREF from "./Hooks/DOMReference/Referencing.js";
// import Reducercomp from "./Hooks/UseReducerHook/index.js";
// import Memoindex from "./Hooks/Memoization/memoindex.js";
// import ResuableComponent from "./HOC/ReUseCom.js";
// import Testcomp from "./HOC/testcomp.js";
// import MainComp from "./Redux/Component/MainComp.js";
// import Store from "./Redux/store/store.js";
// import ComponentStart from "./Redux  Test/Main Components/Main.js";
// import StoresData from "./Redux  Test/Store/MyStore.js";
// import TestingApp from "./TestingApps/Testingapp.js";
// import MainRoute from "./Routing/Main.js";
// import WithoutRefresh from "./WitoutPageRefresh/index.js";
// import SomePtypes from "./Proptypeschecking/PTypes.js";
// import MainProps from "./Proptypeschecking/Main.js";
// import AntDForm from "./Antd-d Form/index.js";
// import { HandleImperative } from "./Imperative Handle/Handle.js";
// import MyUniqueID from "./Hooks/USEID/MyUniqueId.js";
// import StateMange from "./INTW/Hooks/StateMan/index.js";
// import Counter from "./HighorderComp/Counter.js";
// import CounterApp from "./HighorderComp/Counter.js";
// import MainCompContext from "./State Management/Context/Main Comp.js";
// import ReducerFile from "./State Management/Reducer/ReducerFile.js";
// import TestMainComp from "./State Management/Redux-API/MainComp/TestMainComp.js";
// import { Provider } from "react-redux";
// import { StoreComponent } from "./State Management/Redux-API/Store/StoreComp.js";
// import Parent from "./ChildTOParent/Parent.js";


function App() {
  // const [state, setState] = useState("");
  // const clickedhere = () => {
  //   alert("clicked here");
  // };

  // const changing = (e) => {
  //   console.log("changes");
  //   setState(e.target.value);
  // };
  // function testclick() {
  //   console.log("testhere");3
  // };

  // useEffect(() => {
  //   console.log("hello");
  //   testclick();
  // }, [state,testclick]);

  return (
    <div>
      {/* <h1>hello</h1>
      <input value={state} onChange={changing} />
      <button onClick={clickedhere}> button </button> */}
      {/* <NestedWayDropdown/> */}

      {/* HOOKS */}
      {/* <PageLoading/> */}
      {/* <Globals/> */}
      {/* <DoucmentREF/> */}
      {/* <Reducercomp/> */}
      {/* <Memoindex/> */}

      {/* <Testcomp/> */}
      {/* <Testcomp/> */}

      {/* <Provider store={Store}>
        <MainComp />
      </Provider> */}

      {/* <Provider store={StoresData}>
        <TestingApp/>
      </Provider> */}

      {/* <MainRoute/> */}

      {/* <WithoutRefresh/> */}

      {/* <MainProps/> */}

      {/* <AntDForm/> */}

      {/* <HandleImperative /> */}

      {/* <MyUniqueID /> */}

      {/* int */}
      {/* <StateMange /> */}

      {/* <CounterApp/> */}

      {/* <MainCompContext/> */}

      {/* <ReducerFile/> */}
      {/* <Provider store={StoreComponent}>     
         <TestMainComp />
      </Provider> */}

      {/* <Parent/> */}

      {/* <LazyLoading/> */}

      <TestingAPI/>
    </div>
  );
}
export default App;
