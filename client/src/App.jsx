import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatsPage from "./component/pages/ChatsPage";
import HomePage from "./component/pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
