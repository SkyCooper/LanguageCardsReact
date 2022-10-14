import data from "../../data/data";
import "./card.css";
import Carditem from "./Carditem";
import {v1 as uuid} from "uuid"


const Card = () => {
  return (
    <>
      {data.map((item) => {
        const { name, img, options } = item;
        return (
          <div key={uuid()} className="card-container">
            <Carditem name={name} img={img} options={options} />
          </div>
        );
      })}
    </>
  );
};

export default Card;
