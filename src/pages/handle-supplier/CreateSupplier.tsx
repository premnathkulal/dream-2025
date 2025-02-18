import "./CreateSupplier.scss";
import { FormEvent, useState } from "react";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/goods-van-anim.json";

const CreateSupplier = () => {
  // const [userId, setUserId] = useState("");
  const [supplierType, setSupplierType] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="simple-create-form">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <p>Create Category</p>
          </div>
          <InputBox
            id="supplier-type"
            name="supplier-type"
            type={InputTypes.Text}
            label="Supplier Type"
            value={supplierType}
            isRequired
            setInputValue={setSupplierType}
          />
          <button type="submit" className="btn">
            CREATE
          </button>
        </form>
      </div>
      <div className="lottie-anim-container">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default CreateSupplier;
