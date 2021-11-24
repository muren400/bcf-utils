import { bcf_2_1 } from './bcf_2_1.js'
import BcfFactory from './bcfFactory.js'

export default class Bcf {
    constructor() {
        this.markups = new Map();
    }

    addMarkupFromXml(bcfXml) {
        const markupXml = bcfXml.querySelector('Markup')
        const markup = BcfFactory.getInstance().createInstanceFromXml('Markup', markupXml, bcf_2_1);
        this.markups.set(markup.Topic.Guid, markup);
    }
}
