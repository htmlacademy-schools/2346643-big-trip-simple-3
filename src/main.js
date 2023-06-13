import BoardPresenter from './presenter';
import PointModel from './model/point-model';

const container = document.querySelector('.trip-events');
const pointModel = new PointModel();
const boardPresenter = new BoardPresenter({boardContainer: container, pointModel: pointModel});

boardPresenter.init();
