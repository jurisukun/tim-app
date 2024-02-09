import LoginPage from "./LoginPage/loginPage";
import Home from "./Dashboard/Home";

import CheckAuth from "./CheckAuth/CheckAuth";

function App() {
  return (
    <>
      <CheckAuth>
        <div>
          <Home />
          <LoginPage />
        </div>
      </CheckAuth>
    </>
  );
}

export default App;
