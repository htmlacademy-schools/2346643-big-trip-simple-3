export const pointType = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
export const offers = [
  {
    id: 1,
    title: 'Upgrade a business class',
    price: 120
  },
  {
    id: 2,
    title: 'Add luggage',
    price: 20
  },
  {
    id: 3,
    title: 'Switch to comfort',
    price: 50
  },
  {
    id: 4,
    title: 'Add meal',
    price: 90
  },
  {
    id: 5,
    title: 'Choose seats',
    price: 35
  },
  {
    id: 6,
    title: 'Travel by train',
    price: 190
  },
  {
    id: 7,
    title: 'Add alcohol',
    price: 250
  },
  {
    id: 8,
    title: 'Upgrade a car',
    price: 120
  },
  {
    id: 9,
    title: 'No queue',
    price: 150
  }
];

export const getOfferName = (offerId) => offers.find((offer) => offer.id === offerId).title;
export const getOfferPrice = (offerId) => offers.find((offer) => offer.id === offerId).price;

const taxiOffers = [1, 3];

const busOffers = [5, 6];

const trainOffers = [4, 5, 7];

const shipOffers = [4, 5, 7];

const driveOffers = [8];

const flightOffers = [4, 5, 6, 7];

const checkInOffers = [9];

const sightseeingOffers = [];

const restaurantOffers = [5];

export const getOfferFromType = (type) => {
  switch (type) {
    case 'taxi':
      return taxiOffers;
    case 'bus':
      return busOffers;
    case 'train':
      return trainOffers;
    case 'ship':
      return shipOffers;
    case 'drive':
      return driveOffers;
    case 'flight':
      return flightOffers;
    case 'check-in':
      return checkInOffers;
    case 'sightseeing':
      return sightseeingOffers;
    case 'restaurant':
      return restaurantOffers;
  }
};
