import {getRandomInt} from '../util';

const DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
  " Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra." +
  " Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante." +
  " Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum." +
  " Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui." +
  " Sed sed nisi sed augue convallis suscipit in sed felis." +
  " Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus." +
  " In rutrum ac purus sit amet tempus.".split('.')
const DESTINATION_NAMES = ["Chamonix", "Berlin", "Paris", "Rome", "Amsterdam", "Wien"]
const destinationIds = [];
const destinations = [];

export function generateDestination() {
  let generatedId = getRandomInt(0,100)
  while (destinationIds.includes(generatedId)){
    generatedId = getRandomInt(0,100)
  }
  const descriptionLength = getRandomInt(1, 6)
  let description = ""
  for (let i = 5 - descriptionLength; i < descriptionLength; i++) {
    description.concat(DESCRIPTION[getRandomInt(0, DESCRIPTION.length - 1)])
  }
  const name = DESTINATION_NAMES[getRandomInt(0, DESTINATION_NAMES - 1)]
  const pictures = [
    {
      src: `http://picsum.photos/300/200?r=${getRandomInt(100, 1000).toString()}`,
      description: DESCRIPTION[getRandomInt(0, DESCRIPTION.length - 1)]
    }
  ]
  const destination = {
    generatedId, description, name, pictures
  }
  destinations.push(destination)
  return generatedId
}
export function getCity(id){
  for (let destination of destinations){
      if (destination.generatedId === id){
        return destination.name
      }
  }
}
//export const getCity = (id) => destinations.find((destination) => destination.generatedId === id).name;
export const getDescription = (id) => destinations.find((destination) => destination.generatedId === id).description;
export const getPicture = (id) => destinations.find((destination) => destination.generatedId === id).pictures.src;
