import BimSnippet from "./BimSnippet.js";
import DocumentReference from "./DocumentReference.js";
import File from "./File.js";
import Header from "./header.js";
import Markup from "./markup.js";
import RelatedTopic from "./RelatedTopic.js";
import Topic from "./topic.js";
import Viewpoints from "./viewpoints.js";
import XmlReader from "./xmlReader.js";

export default class BcfFactory {
  static instance;

  static getInstance() {
    if (BcfFactory.instance) {
      return BcfFactory.instance;
    }

    return new BcfFactory();
  }

  constructor() {
    BcfFactory.instance = this;
  }

  createInstanceFromXml(typename, xml, schema) {
    let type = null;
    switch (typename) {
      case "Markup":
        type = Markup;
        break;
      case "Header":
        type = Header;
        break;
      case "File":
        type = File;
        break;
      case "Topic":
        type = Topic;
        break;
      case "BimSnippet":
        type = BimSnippet;
        break;
      case "DocumentReference":
        type = DocumentReference;
        break;
      case "RelatedTopic":
        type = RelatedTopic;
        break;
      case "Comment":
        type = Comment;
        break;
      case "Viewpoints":
        type = Viewpoints;
        break;
      default:
        break;
    }

    if (type == null) {
      return;
    }

    const instance = new type();
    XmlReader.getInstance().read(instance, xml, schema);
    return instance;
  }
}
