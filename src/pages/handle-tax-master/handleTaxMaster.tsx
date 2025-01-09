import "./handleTaxMaster.scss";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/team-anim-1.json";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const handleTaxMaster = () => {
  const [inputValue, setInputValue] = useState("");
  const [gstValue, setGstValue] = useState(0);
  const [sGstValue, setSgstValue] = useState(0);
  const [cGstValue, setCgstValue] = useState(0);
  const [iGstValue, setIgstValue] = useState(0);

  const handleGstCalculation = (value: string) => {
    if (!/^\d*\.?\d*$/.test(value)) {
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

  return (
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
            showUnit
            setInputValue={handleGstCalculation}
          />
          <div className="gst-info-container">
            <div className="gst-value-info">
              <div className="gst-raw-value">
                <p>
                  <span className="gst-label">GST</span>@ {gstValue.toFixed(2)}%
                </p>
                <p>
                  <span className="gst-label">SGST</span>@{" "}
                  {sGstValue.toFixed(2)}%
                </p>
                <p>
                  <span className="gst-label">CGST</span>@{" "}
                  {cGstValue.toFixed(2)}%
                </p>
                <p>
                  <span className="gst-label">IGST</span>@{" "}
                  {iGstValue.toFixed(2)}%
                </p>
              </div>
              <div className="gst-display-value">
                <p>
                  <FontAwesomeIcon
                    className="right-point-icon"
                    icon={faHandPointRight}
                  />
                  <span className="gst-label">GST</span>@ {gstValue}% GST
                </p>
                <p>
                  <FontAwesomeIcon
                    className="right-point-icon"
                    icon={faHandPointRight}
                  />
                  <span className="gst-label">SGST</span>@ {sGstValue}% GST
                </p>
                <p>
                  <FontAwesomeIcon
                    className="right-point-icon"
                    icon={faHandPointRight}
                  />
                  <span className="gst-label">CGST</span>@ {cGstValue}% GST
                </p>
                <p>
                  <FontAwesomeIcon
                    className="right-point-icon"
                    icon={faHandPointRight}
                  />
                  <span className="gst-label">IGST</span>@ {iGstValue}% GST
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
                  PURCHASE @ {gstValue}% GST
                </p>
                <p>
                  <FontAwesomeIcon
                    className="right-point-icon"
                    icon={faHandPointRight}
                  />
                  SALE @ {gstValue}% GST
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
  );
};

export default handleTaxMaster;
