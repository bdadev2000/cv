import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Interest");
    }

    async getHtml() {
        return `
            <div class="text-4xl">Interest</div>
            
        `;
    }
}