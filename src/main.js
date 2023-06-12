import BoardPresenter from './presenter';

const container = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: container});

boardPresenter.init();
