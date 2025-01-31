import { useState } from "react";
import "./handleTaxMaster.scss";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/tax-anim.json";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import { TaxType } from "../../utils/master-menu";

const handleTaxMaster = () => {
  const { taxType } = useParams();

  const [inputValue, setInputValue] = useState("");
  const [inputCessValue, setInputCessValue] = useState("");
  const [gstValue, setGstValue] = useState(0);
  const [sGstValue, setSgstValue] = useState(0);
  const [cGstValue, setCgstValue] = useState(0);
  const [iGstValue, setIgstValue] = useState(0);
  const [cessValue, setCessValue] = useState(0);

  const handleCessCalculation = (value: string) => {
    if (!/^\d*\.?\d*$/.test(value) || Number(value) > 100) {
      return;
    }
    setInputCessValue(value);
    setCessValue(parseFloat(value));
  };

  const handleGstCalculation = (value: string) => {
    if (!/^\d*\.?\d*$/.test(value) || Number(value) > 100) {
      return;
    }

    setInputValue(value);
    const gstInput = parseFloat(value ? value : "0");
    const halfOfGst = gstInput / 2;
    setGstValue(gstInput);
    setSgstValue(halfOfGst);
    setCgstValue(halfOfGst);
    setIgstValue(gstInput);
  };

  if (taxType !== TaxType.GST && taxType !== TaxType.CESS) {
    return <NotFound />;
  }

  return (
    <>
      {taxType === TaxType.GST && (
        <div className="simple-create-form">
          <div className="lottie-anim-container">
            <Lottie animationData={animationData} loop={true} />
          </div>
          <div className="form-container">
            <form className="form">
              <div className="form-title">
                <p>Add GST</p>
              </div>
              <InputBox
                id="gst"
                name="gst"
                type={InputTypes.Text}
                label="GST"
                value={inputValue}
                unit="%"
                isRequired
                showUnitIcon
                setInputValue={handleGstCalculation}
              />
              <div className="gst-cess-info-container">
                <div className="gst-cess-value-info">
                  <div className="gst-cess-raw-value">
                    <p>
                      <span className="gst-cess-label">GST</span>@{" "}
                      {gstValue.toFixed(2)}%
                    </p>
                    <p>
                      <span className="gst-cess-label">SGST</span>@{" "}
                      {sGstValue.toFixed(2)}%
                    </p>
                    <p>
                      <span className="gst-cess-label">CGST</span>@{" "}
                      {cGstValue.toFixed(2)}%
                    </p>
                    <p>
                      <span className="gst-cess-label">IGST</span>@{" "}
                      {iGstValue.toFixed(2)}%
                    </p>
                  </div>
                  <div className="gst-cess-display-value">
                    <p>
                      <FontAwesomeIcon
                        className="right-point-icon"
                        icon={faHandPointRight}
                      />
                      <span className="gst-cess-label">GST</span>@{" "}
                      {gstValue.toFixed(4)}% GST
                    </p>
                    <p>
                      <FontAwesomeIcon
                        className="right-point-icon"
                        icon={faHandPointRight}
                      />
                      <span className="gst-cess-label">SGST</span>@{" "}
                      {sGstValue.toFixed(4)}% GST
                    </p>
                    <p>
                      <FontAwesomeIcon
                        className="right-point-icon"
                        icon={faHandPointRight}
                      />
                      <span className="gst-cess-label">CGST</span>@{" "}
                      {cGstValue.toFixed(4)}% GST
                    </p>
                    <p>
                      <FontAwesomeIcon
                        className="right-point-icon"
                        icon={faHandPointRight}
                      />
                      <span className="gst-cess-label">IGST</span>@{" "}
                      {iGstValue.toFixed(4)}% GST
                    </p>
                  </div>
                </div>
                <div className="gst-display-info">
                  <div className="gst-display-info-text">
                    <p>PURCH A/C.</p>
                    <p>SALE A/C.</p>
                  </div>
                  <div className="gst-display-info-value">
                    <p>
                      <FontAwesomeIcon
                        className="right-point-icon"
                        icon={faHandPointRight}
                      />
                      PURCHASE @ {gstValue.toFixed(4)}% GST
                    </p>
                    <p>
                      <FontAwesomeIcon
                        className="right-point-icon"
                        icon={faHandPointRight}
                      />
                      SALE @ {gstValue.toFixed(4)}% GST
                    </p>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn">
                ADD
              </button>
            </form>
          </div>
        </div>
      )}

      {taxType === TaxType.CESS && (
        <div className="simple-create-form">
          <div className="form-container cess-form">
            <form className="form">
              <div className="form-title">
                <p>Add CESS</p>
              </div>
              <InputBox
                id="cess"
                name="cess"
                type={InputTypes.Text}
                label="CESS"
                value={inputCessValue}
                unit="%"
                isRequired
                showUnitIcon
                setInputValue={handleCessCalculation}
              />
              <div className="gst-cess-info-container">
                <div className="gst-cess-value-info">
                  <div className="gst-cess-raw-value">
                    <p>
                      <span className="gst-cess-label">CESS</span>@{" "}
                      {cessValue.toFixed(2)}%
                    </p>
                  </div>
                  <div className="gst-cess-display-value">
                    <p>
                      <FontAwesomeIcon
                        className="right-point-icon"
                        icon={faHandPointRight}
                      />
                      <span className="gst-cess-label">CESS</span>@{" "}
                      {cessValue.toFixed(4)}% GST
                    </p>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn">
                ADD
              </button>
            </form>
          </div>
          <div className="lottie-anim-container">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      )}
    </>
  );
};

export default handleTaxMaster;
