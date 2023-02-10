import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(data) {
  return (
    <div className="card">
      <figure>
        <img className="card-image" src={data.image} alt={data.title} />
      </figure>
      <div className="card-details">
        <p className="card-country">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="card-country_location--icon"
          />
          {data.country.toUpperCase()}
        </p>
        <h1 className="card-title">{data.title}</h1>
        <p className="card-date">{data.date}</p>
        <p className="card-story">{data.story}</p>
      </div>
    </div>
  );
}
