import "./CreateCompany.scss";
import { FormEvent, useState } from "react";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/team-anim-1.json";

const CreateCompany = () => {
  const [companyName, setCompanyName] = useState("");
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("company name:", companyName);
  };

  function handleSelectedFile(file: File) {
    const reader = new FileReader();
    reader.onload = function (e) {
      if (e.target) {
        setPreviewImgSrc(e.target.result as string);
        setFileName(file.name);
      }
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="simple-create-form">
      <div className="lottie-anim-container">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <p>Create Company</p>
          </div>
          <InputBox
            id="company-name"
            name="company-name"
            type={InputTypes.Text}
            label="Company Name"
            value={companyName}
            isRequired
            setInputValue={setCompanyName}
          />
          <InputBox
            id="select-logo-file"
            name="select-logo-file"
            type={InputTypes.File}
            label="Select Company Logo"
            value={companyName}
            isRequired
            setInputValue={setCompanyName}
            handleSelectedFile={handleSelectedFile}
          />

          <div id="fileNameDisplay" className="file-name">
            {fileName ? fileName : "No file chosen"}
          </div>

          {previewImgSrc && (
            <img
              id="company-logo"
              className="image-preview"
              src={previewImgSrc}
              alt="Image Preview"
            />
          )}

          <button type="submit" className="btn">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCompany;
