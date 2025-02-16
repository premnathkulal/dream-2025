import "./GoodsReceptEntry.scss";
import { FormEvent, useState } from "react";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import GoodsReceptEntryTable from "./GoodsReceptEntryTable";

const GoodsReceptEntry = () => {
  const [documentNumber, setDocumentNumber] = useState("");
  const [documentDate, setDocumentDate] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [posNumber, setPosNumber] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [partyName, setPartyName] = useState("");
  const [gstNumber] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="goods-recept-entry-form">
      <div className="form-title">Purchase Recept Entry</div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-items">
          <InputBox
            id="document-number"
            name="document-number"
            type={InputTypes.Text}
            label="Document Number"
            value={documentNumber}
            isRequired
            setInputValue={setDocumentNumber}
          />
          <InputBox
            id="document-date"
            name="document-date"
            type={InputTypes.Date}
            label="Document Date"
            value={documentDate}
            isRequired
            setInputValue={setDocumentDate}
          />
          <InputBox
            id="invoice-number"
            name="invoice-number"
            type={InputTypes.Text}
            label="Invoice Number"
            value={invoiceNumber}
            isRequired
            setInputValue={setInvoiceNumber}
          />
          <InputBox
            id="invoice-date"
            name="invoice-date"
            type={InputTypes.Date}
            label="Invoice Date"
            value={invoiceDate}
            isRequired
            setInputValue={setInvoiceDate}
          />
        </div>
        <div className="form-items">
          <InputBox
            id="pos-number"
            name="pos-number"
            type={InputTypes.Text}
            label="POS Number"
            value={posNumber}
            isRequired
            setInputValue={setPosNumber}
          />
          <InputBox
            id="vehicle-number"
            name="vehicle-number"
            type={InputTypes.Text}
            label="Vehicle Number"
            value={vehicleNumber}
            isRequired
            setInputValue={setVehicleNumber}
          />
          <InputBox
            id="party-name"
            name="party-name"
            type={InputTypes.DropDown}
            label="Party Name"
            value={partyName}
            isRequired
            setInputValue={setPartyName}
          />
          <div className="gst-info">
            GST NO: <span>{gstNumber}</span>
          </div>
        </div>
        <div className="table-area">
          <div className="table-container">
            <GoodsReceptEntryTable />
          </div>
        </div>
      </form>
      <button type="submit" className="btn">
        SUBMIT
      </button>
    </div>
  );
};

export default GoodsReceptEntry;
