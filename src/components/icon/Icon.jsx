import reactImg from "../../assets/react.svg";
import "./icon.css"

const Icon = () => {
  return (
    <div className="react-logo-container">
      <img className="react-logo" src={reactImg} alt="logo" width="200px" height="200px"/>
    </div>
  );
};

export default Icon;
