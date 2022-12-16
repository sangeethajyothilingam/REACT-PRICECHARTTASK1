import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ card }) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            {card.plan}
          </h5>
          <h6 class="card-price text-center">
            {card.price}
            <span class="period">{card.period}</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            {card.features.map((item) => {
              return (
                <li class={item.correct ? "" : "text-muted"}>
                  <span class="fa-li">
                    {item.correct ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faTimes} />
                    )}
                  </span>
                  {item.highlight ? (
                    <strong>{item.title}</strong>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
