import "./HandleProduct.scss";
import { FormEvent, useState } from "react";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import CheckBox from "../../components/check-box/ChckBox";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const HandleProduct = () => {
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [gstValue, setGstValue] = useState("");
  const [cessValue, setCessValue] = useState("");
  const [hsnCode, setHsnCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [scheme, setScheme] = useState("");
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [fileName, setFileName] = useState("");
  const [productUnit, setProductUnit] = useState("");
  const [isDiscountAvailable, setIsDiscountAvailable] = useState(false);
  const [isSchemeAvailable, setIsSchemeAvailable] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Product:", productName);
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
    <div className="create-product-form">
      <div className="form-title">Create Product</div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-items">
          <InputBox
            id="company-name"
            name="company-name"
            type={InputTypes.DropDown}
            label="Company Name"
            value={companyName}
            options={[]}
            isRequired
            setInputValue={setCompanyName}
          />
          <InputBox
            id="brand-name"
            name="brand-name"
            type={InputTypes.DropDown}
            label="Brand Name"
            value={brandName}
            options={[]}
            isRequired
            setInputValue={setBrandName}
          />
          <InputBox
            id="category-name"
            name="category-name"
            type={InputTypes.DropDown}
            label="Category Name"
            value={categoryName}
            options={[]}
            isRequired
            setInputValue={setCategoryName}
          />
          <InputBox
            id="product-name"
            name="product-name"
            type={InputTypes.Text}
            label="Product Name"
            value={productName}
            isRequired
            setInputValue={setProductName}
          />
          <InputBox
            id="purchase-price"
            name="purchase-price"
            type={InputTypes.Text}
            label="Purchase Price"
            value={purchasePrice}
            isRequired
            showUnitIcon
            iconName={faIndianRupeeSign}
            setInputValue={setPurchasePrice}
          />
          <InputBox
            id="sale-price"
            name="sale-price"
            type={InputTypes.Text}
            label="Sale Price"
            value={salePrice}
            isRequired
            showUnitIcon
            iconName={faIndianRupeeSign}
            setInputValue={setSalePrice}
          />
          <div className="product-quantity">
            <div>
              <InputBox
                id="product-quantity"
                name="product-quantity"
                type={InputTypes.Text}
                label="Product Quantity"
                value={productQuantity}
                isRequired
                setInputValue={setProductQuantity}
              />
            </div>
            <div>
              <InputBox
                id="product-unit"
                name="product-unit"
                type={InputTypes.DropDown}
                label="Unit"
                value={productUnit}
                options={[]}
                isRequired
                setInputValue={setProductUnit}
              />
            </div>
          </div>
          <InputBox
            id="gst-value"
            name="gst-value"
            type={InputTypes.DropDown}
            label="GST"
            value={gstValue}
            options={[]}
            isRequired
            setInputValue={setGstValue}
          />
          <InputBox
            id="cess-value"
            name="cess-value"
            type={InputTypes.DropDown}
            label="CESS"
            value={cessValue}
            options={[]}
            isRequired
            setInputValue={setCessValue}
          />
        </div>
        <div className="form-items">
          <InputBox
            id="hsn-code"
            name="hsn-code"
            type={InputTypes.Text}
            label="HSN Code"
            value={hsnCode}
            isRequired
            setInputValue={setHsnCode}
          />
          <CheckBox
            id="discount-checkbox"
            name="discount-checkbox"
            label="Is discount available?"
            value={isDiscountAvailable}
            toggleCheckBox={setIsDiscountAvailable}
          />
          <InputBox
            id="discount"
            name="discount"
            type={InputTypes.Text}
            label="Discount"
            value={discount}
            isDisabled={!isDiscountAvailable}
            isRequired
            showUnitIcon
            unit="%"
            setInputValue={setDiscount}
          />
          <CheckBox
            id="scheme-checkbox"
            name="scheme-checkbox"
            label="Is scheme available?"
            value={isSchemeAvailable}
            toggleCheckBox={setIsSchemeAvailable}
          />
          <InputBox
            id="scheme"
            name="scheme"
            type={InputTypes.Text}
            label="Scheme"
            value={scheme}
            isDisabled={!isSchemeAvailable}
            isRequired
            setInputValue={setScheme}
          />
          <InputBox
            id="product-image"
            name="product-image"
            type={InputTypes.File}
            label={fileName ? fileName : "Product Image"}
            value={brandName}
            isRequired
            setInputValue={setBrandName}
            handleSelectedFile={handleSelectedFile}
          />

          {previewImgSrc && (
            <img
              id="brand-logo"
              className="image-preview"
              src={previewImgSrc}
              alt="Image Preview"
            />
          )}
        </div>
      </form>
      <button type="submit" className="btn">
        CREATE
      </button>
    </div>
  );
};

export default HandleProduct;
