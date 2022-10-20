import { Component } from './components.js';
export class Main extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
    <main class="main">
      <section class="series">
        <h2 class="section-title">Series list</h2>
    </main>`;
    }
}
