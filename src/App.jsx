import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">expenses</Link>
        <Outlet />
      </nav>
    </div>
  );
}

export default App;
