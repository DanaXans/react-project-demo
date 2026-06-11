import './App.css'
import {Outlet} from "react-router-dom";
import {Menu} from "./components/Menu.tsx";

function App() {
  return (
    <div>
        <Menu/>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default App
