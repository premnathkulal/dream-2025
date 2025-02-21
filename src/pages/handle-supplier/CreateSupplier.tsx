import "./CreateSupplier.scss";
import { FormEvent, useState } from "react";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";

const CreateSupplier = () => {
  const [supplierName, setSupplierName] = useState("");
  const [supplierType, setSupplierType] = useState("");
  const [supplierCode, setSupplierCode] = useState("");
  const [supplierGroup, setSupplierGroup] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [pin, setPin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [openingBalance, setOpeningBalance] = useState("");
  const [closingBalance, setClosingBalance] = useState("");
  const [creditLimit, setCreditLimit] = useState("");
  const [partyMark, setPartyMark] = useState("");
  const [tinNo, setTinNo] = useState("");
  const [gstNo, setGstNo] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <div className="create-supplier-form">
      <div className="form-title">Create Supplier</div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-items">
          <InputBox
            id="supplier-name"
            name="supplier-name"
            type={InputTypes.Text}
            label="Supplier Name"
            value={supplierName}
            isRequired
            setInputValue={setSupplierName}
          />
          <InputBox
            id="supplier-type"
            name="supplier-type"
            type={InputTypes.Text}
            label="Supplier Type"
            value={supplierType}
            isRequired
            setInputValue={setSupplierType}
          />
          <InputBox
            id="supplier-code"
            name="supplier-code"
            type={InputTypes.Text}
            label="Supplier Code"
            value={supplierCode}
            isRequired
            setInputValue={setSupplierCode}
          />
          <InputBox
            id="supplier-group"
            name="supplier-group"
            type={InputTypes.Text}
            label="Supplier Group"
            value={supplierGroup}
            isRequired
            setInputValue={setSupplierGroup}
          />
          <InputBox
            id="state"
            name="state"
            type={InputTypes.Text}
            label="State"
            value={state}
            isRequired
            setInputValue={setState}
          />
          <InputBox
            id="city"
            name="city"
            type={InputTypes.Text}
            label="City"
            value={city}
            isRequired
            setInputValue={setCity}
          />
          <InputBox
            id="area"
            name="area"
            type={InputTypes.Text}
            label="Area"
            value={area}
            isRequired
            setInputValue={setArea}
          />
          <InputBox
            id="pin"
            name="pin"
            type={InputTypes.Number}
            label="PIN"
            value={pin}
            isRequired
            setInputValue={setPin}
          />
          <InputBox
            id="phone-number"
            name="phone-number"
            type={InputTypes.Number}
            label="Phone Number"
            value={phoneNumber}
            isRequired
            setInputValue={setPhoneNumber}
          />
        </div>
        <div className="form-items">
          <InputBox
            id="opening-balance"
            name="opening-balance"
            type={InputTypes.Number}
            label="Opening Balance"
            value={openingBalance}
            isRequired
            setInputValue={setOpeningBalance}
          />
          <InputBox
            id="closing-balance"
            name="closing-balance"
            type={InputTypes.Number}
            label="Closing Balance"
            value={closingBalance}
            isRequired
            setInputValue={setClosingBalance}
          />
          <InputBox
            id="credit-limit"
            name="credit-limit"
            type={InputTypes.Number}
            label="Credit Limit"
            value={creditLimit}
            isRequired
            setInputValue={setCreditLimit}
          />
          <InputBox
            id="party-mark"
            name="party-mark"
            type={InputTypes.Text}
            label="Party Mark"
            value={partyMark}
            isRequired
            setInputValue={setPartyMark}
          />
          <InputBox
            id="tin-no"
            name="tin-no"
            type={InputTypes.Text}
            label="TIN No"
            value={tinNo}
            isRequired
            setInputValue={setTinNo}
          />
          <InputBox
            id="gst-no"
            name="gst-no"
            type={InputTypes.Text}
            label="GST No"
            value={gstNo}
            isRequired
            setInputValue={setGstNo}
          />
        </div>
      </form>
      <button type="submit" className="btn">
        CREATE
      </button>
    </div>
  );
};

export default CreateSupplier;
