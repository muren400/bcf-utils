import BcfFactory from './bcfFactory.js'

export default class XmlReader {
    static instance;

    static getInstance() {
        if(XmlReader.instance) {
            return XmlReader.instance;
        }

        return new XmlReader();
    }

    constructor() {
        XmlReader.instance = this;
    }

    read(target, xml, schema) {
        if (target == null || xml == null || schema == null) {
            return;
        }

        const type = schema[target.constructor.name];

        this.readAttributes(target, xml, schema, type);
        this.readChildren(target, xml, schema, type);
    }

    readAttributes(target, xml, schema, type) {
        if (target == null || xml == null || schema == null || type == null || type.attributes == null) {
            return;
        }

        type.attributes.forEach(attribute => {
            target[attribute] = xml.getAttribute(attribute);
        });
    }

    readChildren(target, xml, schema, type) {
        if (target == null || xml == null || schema == null || type == null || type.children == null) {
            return;
        }

        type.children.forEach(child => {
            if(child.list === true) {
                const children = xml.querySelectorAll(child.name);
                if(children == null || children.length < 1) {
                    return;
                }

                target[child.name] = [];
                children.forEach(childXml => {
                    target[child.name].push(this.readChild(child, childXml, schema));
                });
            } else {
                const childXml = xml.querySelector(child.name)
                if(childXml == null) {
                    return;
                }

                target[child.name] = this.readChild(child, childXml, schema);
            }
        });
    }

    readChild(child, childXml, schema) {
        if (child.type === 'string') {
            return childXml.innerHTML;
        } else if (schema[child.type] != null) {
            return BcfFactory.getInstance().createInstanceFromXml(child.type, childXml, schema);
        }
    }
}
