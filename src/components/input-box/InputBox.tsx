import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InputBox.scss";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export enum InputTypes {
  Text = "text",
  Number = "number",
  Email = "email",
  Password = "password",
  Date = "date",
  Checkbox = "checkbox",
  Radio = "radio",
  File = "file",
  Submit = "submit",
}

interface InputBoxProps {
  id: string;
  name: string;
  type: InputTypes;
  value: string;
  label: string;
  isRequired: boolean;
  isHiddenInput?: boolean;
  setInputValue: (value: string) => void;
  handleShowHideInput?: () => void;
}

const InputBox = (props: InputBoxProps) => {
  const {
    id,
    name,
    type,
    value,
    label,
    isRequired,
    isHiddenInput,
    setInputValue,
    handleShowHideInput,
  } = props;

  return (
    <div className="input-container">
      <input
        id={id}
        name={name}
        type={type}
        className="input-field"
        placeholder=""
        value={value}
        onChange={(e) => setInputValue(e.target.value)}
        required={isRequired}
      />
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      {isHiddenInput && (
        <div className="show-hide-icon">
          {type === InputTypes.Password && (
            <FontAwesomeIcon
              icon={faEye}
              className="eye-icon"
              onClick={handleShowHideInput}
            />
          )}
          {type === InputTypes.Text && (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="eye-icon"
              onClick={handleShowHideInput}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default InputBox;
