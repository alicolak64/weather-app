import './App.css';

import Main from "./components/Main";
import { MainProvider } from "./context/MainContext";

function App() {
  return (
    <MainProvider>
      <Main />
    </MainProvider>
  );
}

export default App;
