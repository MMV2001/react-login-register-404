import Login from "./Register/Login";
import Register from "./Register/Register";
import "./App.css";
import { useState } from "react";

function App() {
  const [btn, setBtn] = useState("login");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showpass, setShowpass] = useState(false);
  const [showpassconfi, setShowpassconfi] = useState(false);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState([]);
  return (
    <div className="container">
      <div className="total">
        <div className="button-container">
          <button
            onClick={() => setBtn("login")}
            className={btn == "login" ? "action" : " "}
          >
            Login
          </button>
          <button
            onClick={() => setBtn("register")}
            className={btn == "register" ? "action" : " "}
          >
            Register
          </button>
        </div>
        {btn === "login" ? (
          <Login
          setPassword={setPassword}
          user={user}
          password={password}
            showpass={showpass}
            setShowpass={setShowpass}
            email={email}
            setEmail={setEmail}
          />
        ) : (
          <Register
            username={username}
            user={user}
            password={password}
            setUsername={setUsername}
            setUser={setUser}
            setShowpassconfi={setShowpassconfi}
            showpassconfi={showpassconfi}
            showpass={showpass}
            setShowpass={setShowpass}
            email={email}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        )}
      </div>
    </div>
  );
}

export default App;
