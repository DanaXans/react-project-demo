import './App.css'
import MemoPage from "./pages/MemoPage.tsx";
import UseMemoPage from "./pages/UseMemoPage.tsx";
import UseCallbackPage from "./pages/UseCallbackPage.tsx";

function App() {
    return (
        <div className="app">
            <MemoPage/>
            <hr/>
            <UseMemoPage/>
            <hr/>
            <UseCallbackPage/>
        </div>
    )
}

export default App
