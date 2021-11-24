import Bcf from "../bcf/bcf.js";

export default class BcfLoader {
  constructor() {}

  loadFile(file) {
    return new Promise((resolve) => {
      const bcf = new Bcf();

      JSZip.loadAsync(file).then(function (zip) {
        const promises = [];
        zip.forEach(function (relativePath, zipEntry) {
          if (zipEntry.name.endsWith(".bcf")) {
            promises.push(zipEntry.async("string"));
          }
        });

        Promise.all(promises).then(function (data) {
          data.forEach((content) => {
            const parser = new DOMParser();
            const xmlContent = parser.parseFromString(content, "text/xml");
            bcf.addMarkupFromXml(xmlContent);
            // bcf.addTopicFromXml(xmlContent);
          });

          resolve(bcf);
        });
      });
    });
  }
}
