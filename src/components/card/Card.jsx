import data from "../../data/data"
import "./card.css"

const Card = () =>{
  return(
<>
{data.map((item)=>{
  const {name, img, options} = item
  return(
    <div className="card-container">
      <img className="card-image" src={img} alt={name} />
      <h2 className="card-language">{name}</h2>
      <div className="card-options">
        <ul>
          <li>{options[0]}</li>
          <li>{options[1]}</li>
          <li>{options[2]}</li>
        </ul>
      </div>
    </div>
  )
})}
</>
  )
};

export default Card