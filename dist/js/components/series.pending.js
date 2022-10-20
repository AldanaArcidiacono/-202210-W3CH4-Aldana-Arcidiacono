import { Component } from './components.js';
import { SERIES } from '../models/data.js';
import { ItemSeries } from './item.series.js';
export class SeriesPending extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.series = [...SERIES];
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        let template = `
    <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          <p class="info">You have 4 series pending to watch</p>
          <!--<p class="info">Congrats! You've watched all your series</p>-->
          <ul class="series-list">`;
        this.series.forEach((item) => {
            template += new ItemSeries('', item, this.handlerEraser.bind(this), this.handlerComplete.bind(this)).template;
        });
        template += `</ul></section>`;
        return template;
    }
    handlerEraser(deletedId) {
        this.series = this.series.filter((item) => item.id !== deletedId);
        this.manageComponent();
    }
    handlerComplete(changeId) {
        const i = this.series.findIndex((item) => item.id === changeId);
        this.series[i].watched = !this.series[i].watched;
    }
}
