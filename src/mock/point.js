import {getRandomInt} from '../util.js';
import {generateDestination} from './destination';
import {getOfferFromType} from './offers';

const POINT_TYPES = ["taxi", "bus", "train", "ship", "drive", "flight", "check-in", "sightseeing", "restaurant"];
const DATES = [
  {
    date_from: "2019-07-10T22:55:56.845Z",
    date_to: "2019-07-11T11:22:13.375Z",
  },
  {
    date_from: "2019-01-08T13:44:11.845Z",
    date_to: "2019-01-20T16:22:12.375Z",
  },
  {
    date_from: "2022-06-07T12:32:56.845Z",
    date_to: "2022-06-23T10:10:13.375Z",
  },
  {
    date_from: "2023-06-13T22:55:56.845Z",
    date_to: "2019-06-18T11:22:13.375Z",
  }
]
const existingIds = [];
export function generatePointData() {
  const date = DATES[getRandomInt(0, DATES.length - 1)]
  let generatedId = getRandomInt(0,100)
  while (existingIds.includes(generatedId)) {
      generatedId = getRandomInt(0,100);
  }
  existingIds.push(generatedId)
  const type = POINT_TYPES[getRandomInt(0, POINT_TYPES.length - 1)];
  return {
    type,
    basePrice: getRandomInt(1000, 1000000),
    dateFrom: date.date_from,
    dateTo: date.date_to,
    id: generatedId,
    destination: generateDestination(),
    offers: getOfferFromType(type)
  }

}

