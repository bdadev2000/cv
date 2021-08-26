import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Skills");
    }

    async getHtml() {
        return `
            <div class="text-4xl">Skills</div>
            
        `;
    }
}