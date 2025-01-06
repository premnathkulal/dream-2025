import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InputBox.scss";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faFile, faFileImage } from "@fortawesome/free-solid-svg-icons";

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
  DropDown = "DropDown",
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
  handleSelectedFile?: (e: any) => void;
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
    handleSelectedFile,
  } = props;

  if (type === InputTypes.DropDown) {
    return (
      <div className="input-container dropdown-input">
        <select className="input-field dropdown-select" id="customDropdown">
          <option value="" hidden>
            {/* Select an {label} */}
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <label htmlFor="customDropdown" className="dropdown-label">
          {label}
        </label>
      </div>
    );
  }

  if (type === InputTypes.File) {
    const displayFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        if (handleSelectedFile) {
          handleSelectedFile(file);
        }
      }
    };

    return (
      <div className="input-container">
        <label htmlFor={id} className="file-label">
          <div>{label}</div>
          <FontAwesomeIcon icon={faFileImage} className="file-icon" />
        </label>
        <input
          id={id}
          type={type}
          className="file-input"
          accept="image/*"
          onChange={displayFile}
        />
      </div>
    );
  }

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
