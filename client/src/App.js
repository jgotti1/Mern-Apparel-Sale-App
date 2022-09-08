import AdminPage from "./components/adminPage/adminPage";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
// import Nav from "./components/navBar/navBar";
import OrderPage from "./components/orderPage/orderPage";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import { useLogout } from "./hooks/useLogout";
import { fetchPath } from "./hooks/fetchPaths";

function App() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  const deleteAllApparel = async () => {
    const warning = prompt(`You want to delete the entire Apparel Database ? Type "Yes" to continue`);
    if (warning === "yes" || warning === "Yes") {
      const deleteAll = prompt(
        `Are you sure you want to delete the entire Apparel database and start new. Type the following phrase in all caps to corfirm and proceed           "I AM SURE I WANT TO DETETE ALL"                                                          *** USE CAUTION *** you can't get the data back afterwards  `
      );

      if (deleteAll === "I AM SURE I WANT TO DETETE ALL") {
        const response = await fetch(`${fetchPath}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (response.ok) {
          window.location.reload(false);
        }
      } else {
        alert("that is not a valid entry, NOT Deleting ");
      }
    } else {
      alert("that is not a valid entry, NOT Deleting ");
    }
  };

  return (
    <>
      {user && user.email === "ADMIN@apparel.com" && (
        <div className="delete_all_button">
          <button onClick={deleteAllApparel}> **DELETE ALL RECORDS**</button>
        </div>
      )}
      <div className="App">
        <Router>
          {user && (
            <div className="email">
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          <div className="routes">
            <Routes>
              {user && user.email === "apparel@apparel.com" && <Route path="/" element={user && user.email === "apparel@apparel.com" ? <HomePage /> : <Navigate to="/login" />} />}
              {user && user.email === "ADMIN@apparel.com" && <Route path="/" element={user && user.email === "ADMIN@apparel.com" ? <AdminPage /> : <Navigate to="/login" />} />}
              {!user && <Route path="/" element={<Login />} />}
              <Route path="/order" element={user ? <OrderPage /> : <Navigate to="/login" />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              {/* actiavte to create a new user */}
              {/* <Route path="/signup" element={<Signup />} /> */}
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
