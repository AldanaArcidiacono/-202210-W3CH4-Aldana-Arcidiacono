import { Component } from './components.js';
export class ItemSeries extends Component {
    constructor(selector, item, handelDelete, handelChange) {
        super();
        this.selector = selector;
        this.item = item;
        this.handelDelete = handelDelete;
        this.handelChange = handelChange;
        this.manageComponents();
    }
    manageComponents() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        setTimeout(() => {
            document.querySelector(`#d${this.item.id}`).addEventListener('click', () => {
                this.handelDelete(this.item.id);
            });
            // (
            //   document.querySelector(`#c${this.item.id}`) as HTMLElement
            // ).addEventListener('change', () => {
            //   this.handelChange(this.item.id);
            // });
        }, 100);
    }
    createTemplate() {
        return `<li class="serie">
              <img
                class="serie__poster"
                src="${this.item.poster}"
                alt="${this.item.name} poster"
              />
              <h4 class="serie__title">${this.item.name}</h4>
              <p class="serie__info">${this.item.creator} (${this.item.year})</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon-score far fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon-score far fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon-score far fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon-score far fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon-score far fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete" id="d${this.item.id}"></i>
            </li>`;
    }
}
