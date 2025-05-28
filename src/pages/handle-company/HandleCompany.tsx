import "./HandleCompany.scss";
import { FormEvent, useState } from "react";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/team-anim-1.json";
import { registerCompany } from "../../services/companyService";
import { Company } from "../../types/company";

const HandleCompany = () => {
  const [companyName, setCompanyName] = useState("");
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [fileName, setFileName] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [createdCompany, setCreatedCompany] = useState<Company | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!logo) return alert("Please select a logo");

    try {
      const company = await registerCompany(companyName, logo);
      setCreatedCompany(company);
    } catch (err) {
      console.error(err);
      alert("Error creating company");
    }
  };

  function handleSelectedFile(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const reader = new FileReader();

    reader.onload = function (event) {
      if (event.target?.result) {
        setPreviewImgSrc(event.target.result as string);
      }
    };

    setFileName(selectedFile.name);
    setLogo(selectedFile);
    reader.readAsDataURL(selectedFile);
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

export default HandleCompany;
