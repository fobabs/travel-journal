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
          <span className="card-country_name">
            {data.country.toUpperCase()}
          </span>
          <a
            href={`https://www.google.com/maps/place/${data.title.replace(
              " ",
              "+"
            )}`}
            target="_blank"
          >
            View on Google Maps
          </a>
        </p>
        <h1 className="card-title">{data.title}</h1>
        <p className="card-date">{data.date}</p>
        <p className="card-story">{data.story}</p>
      </div>
    </div>
  );
}
