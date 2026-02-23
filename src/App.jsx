import { useState } from "react";
import "./App.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);



  return (
    <>
      <button onClick={() => setIsLoginOpen(true)}>
        Open Login
      </button>

      <button onClick={() => {setIsRegisterOpen(true);setIsLoginOpen(false)}} style={{ marginLeft: "10px" }}>
        Open Register
      </button>

      {isLoginOpen && (
        <div className="overlay">
          <div className="modal">
            <h1>Login</h1>
            <input type="text" placeholder="Username" /><br />
            <input type="password" placeholder="Password" /><br />

            <div className="buttons">
              <button onClick={() => setIsLoginOpen(false)}>Cancel</button>
              <button>Login</button>
            </div>
          </div>
        </div>
      )}

      {isRegisterOpen && (
        <div className="overlay">
          <div className="modal">
            <h1>Register</h1>
            <input type="text" placeholder="Full Name" /><br />
            <input type="email" placeholder="Email" /><br />
            <input type="password" placeholder="Password" /><br />
            <input type="password" placeholder="Confirm Password" /><br />

            <div className="buttons">
              <button onClick={() => setIsRegisterOpen(false)}>Cancel</button>
              <button>Register</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;