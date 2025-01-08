import "./HandleBrand.scss";
import { FormEvent, useState } from "react";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/brand.json";

const HandleBrand = () => {
  const [brandName, setBrandName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("brand name:", brandName);
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
    <div id="main" className="simple-create-form">
      <div className="lottie-anim-container">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <p>Create Brand</p>
          </div>
          <InputBox
            id="company-name"
            name="company-name"
            type={InputTypes.DropDown}
            label="Company Name"
            value={companyName}
            isRequired
            setInputValue={setCompanyName}
            options={[]}
          />
          <InputBox
            id="brand-name"
            name="brand-name"
            type={InputTypes.Text}
            label="Brand Name"
            value={brandName}
            isRequired
            setInputValue={setBrandName}
          />
          <InputBox
            id="select-logo-file"
            name="select-logo-file"
            type={InputTypes.File}
            label="Select Brand Logo"
            value={brandName}
            isRequired
            setInputValue={setBrandName}
            handleSelectedFile={handleSelectedFile}
          />

          <div id="fileNameDisplay" className="file-name">
            {fileName ? fileName : "No file chosen"}
          </div>

          {previewImgSrc && (
            <img
              id="brand-logo"
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

export default HandleBrand;
