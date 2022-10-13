import { useState } from "react"

const Carditem = ({name, img, options}) => {
    const [visible, SetVisible] = useState(true);

  const handleClick = () => {
    SetVisible(!visible);
  };

  return (
    <div onClick={handleClick}>
      {visible ? (
        <div>
          <img className="card-image" src={img} alt={name} />
          <h2 className="card-language">{name}</h2>
        </div>
      ) : (
        <div className="card-options">
          <ul>
          {options.map((item,index)=>{
            return <li key={index}>{item}</li>
          })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Carditem