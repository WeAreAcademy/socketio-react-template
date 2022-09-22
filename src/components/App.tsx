import { useState } from "react";
import "./App.css";
import SocketIODemo from "./SocketIODemo";

function App() {
    const [showDemo, setShowDemo] = useState(true);
    return (
        <div className="App">
            {showDemo ? <SocketIODemo /> : <Placeholder />}

            <button onClick={() => setShowDemo((v) => !v)}>
                Toggle Show Demo
            </button>
        </div>
    );
}

export default App;

function Placeholder() {
    return (
        <div>
            <p>SocketIO Demo component is not mounted. </p>
            <p>
                Try sending socketio messages to it now and making sure there
                are no errors in the console: If it's been set up correctly, it
                should have been disconnected and any listeners should have been
                deregistered.
            </p>
        </div>
    );
}
