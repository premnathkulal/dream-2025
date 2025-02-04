import "./HandleBeat.scss";
import { FormEvent, useState } from "react";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/area-anim.json";

const CreateBeat = () => {
  const [beatCode, setBeatCode] = useState("");
  const [beatName, setBeatName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="simple-create-form">
      <div className="lottie-anim-container">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <p>Create Beat</p>
          </div>
          <InputBox
            id="beat-code"
            name="beat-code"
            type={InputTypes.Text}
            label="Beat Code"
            value={beatCode}
            isRequired
            setInputValue={setBeatCode}
          />
          <InputBox
            id="beat-name"
            name="beat-name"
            type={InputTypes.Text}
            label="Beat Name"
            value={beatName}
            isRequired
            setInputValue={setBeatName}
          />
          <button type="submit" className="btn">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBeat;
