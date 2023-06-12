import {render} from './render';
import PointListView from './view/point-list-view';
import SortView from './view/sort-view';
import CreationFormView from './view/creation-form-view';
import PointView from './view/point-view';
import EditFormView from './view/edit-form-view';
import FiltersView from './view/filters-view';

export default class BoardPresenter {
  pointListComponent = new PointListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    const filterElement = document.querySelector('.trip-controls__filters');
    render(new FiltersView(), filterElement);
    render(new CreationFormView(), this.pointListComponent.getElement());
    render(new SortView(), this.boardContainer);
    render(this.pointListComponent, this.boardContainer);
    render(new EditFormView(), this.pointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }
  }
}
