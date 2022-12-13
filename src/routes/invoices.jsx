import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();
  const QuaryNavLink = ({ to, ...props }) => {
    const location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  };

  return (
    <div>
      <div>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            setSearchParams(filter ? { filter: filter } : {});
          }}
        />
        {invoices
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) {
              return true;
            }
            let name = item.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => {
            return (
              <QuaryNavLink
                to={`${item.number}`}
                key={item.number}
                className={({ isActive }) => (isActive ? "red" : "blue")}
              >
                {item.name + "|"}
              </QuaryNavLink>
            );
          })}
      </div>
      <Outlet></Outlet>
    </div>
  );
}
