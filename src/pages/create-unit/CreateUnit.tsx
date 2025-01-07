import "./CreateUnit.scss";
import { FormEvent, useState } from "react";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/unit-anim.json";

const CreateUnit = () => {
  const [unit, setUnit] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Unit:", unit);
  };

  return (
    <div className="simple-create-form">
      <div className="lottie-anim-container">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <p>Create Unit</p>
          </div>
          <InputBox
            id="unit"
            name="unit"
            type={InputTypes.Text}
            label="Unit"
            value={unit}
            isRequired
            setInputValue={setUnit}
          />
          <button type="submit" className="btn">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUnit;
