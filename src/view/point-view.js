import {createElement} from '../render.js';
import dayjs from 'dayjs';
import {getCity} from '../mock/destination';
import {createPointOffersTemplate} from './offers-view';

function createPointTemplate(point) {
  const {type, basePrice, dateFrom, dateTo, destination, offers} = point;
  const price = point.base_price;
  console.log(point)
  console.log(dateFrom)
  const eventDateTime = dateFrom.substring(0, dateFrom.indexOf('T'));
  const eventDate = dayjs(dateFrom).format('MMM D');
  const fromDateTime = dateFrom.substring(0, dateTo.indexOf('.'));
  const fromTime = dayjs(dateFrom).format('H:mm');
  const toDateTime = dateTo.substring(0, dateTo.indexOf('.'));
  const toTime = dayjs(dateTo).format('H:mm');
  const offerTemplate = createPointOffersTemplate(offers);
  return(
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${eventDateTime}">${eventDate}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${getCity(destination)}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${fromDateTime}">${fromTime}</time>
          &mdash;
          <time class="event__end-time" datetime="${toDateTime}">${toTime}</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${offerTemplate}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`)
}

export default class PointView {
  constructor(point) {
    this.point = point;
  }
  getTemplate() {
    return createPointTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
