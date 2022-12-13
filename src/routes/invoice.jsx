import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
import { deleteInvoice } from "../data";

export default function Invoice() {
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  const invoice = getInvoice(Number(invoiceId));

  return (
    <div>
      <div>{invoice.name}</div>
      <div>{invoice.number}</div>
      <div>{invoice.amount}</div>
      <div>{invoice.due}</div>
      <button
        onClick={() => {
          deleteInvoice(invoiceId);
          navigate("/invoices");
        }}
      >
        delete
      </button>
    </div>
  );
}
