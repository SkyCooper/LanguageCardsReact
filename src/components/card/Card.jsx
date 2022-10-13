import data from "../../data/data";
import "./card.css";
import Carditem from "./Carditem";


const Card = () => {
  return (
    <>
      {data.map((item) => {
        const { name, img, options } = item;
        return (
          <div id={name} key={name} className="card-container">
            <Carditem name={name} img={img} options={options} />
          </div>
        );
      })}
    </>
  );
};

export default Card;
