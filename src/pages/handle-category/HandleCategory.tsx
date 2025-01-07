import "./HandleCategory.scss";
import { FormEvent, useState } from "react";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/team-anim.json";

const HandleCategory = () => {
  const [category, setCategory] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Category name:", category);
  };

  return (
    <div className="simple-create-form">
      <div className="lottie-anim-container">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <p>Create Category</p>
          </div>
          <InputBox
            id="category-name"
            name="category-name"
            type={InputTypes.Text}
            label="Category Name"
            value={category}
            isRequired
            setInputValue={setCategory}
          />
          <button type="submit" className="btn">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default HandleCategory;
