import { generatePointData } from '../mock/point';

export default class PointModel {
  points = Array.from({length: 3}, generatePointData);

  getPoints = () => this.points;
}
