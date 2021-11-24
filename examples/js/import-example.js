import BcfLoader from "../../src/access/bcf-loader.js";

const bcfLoader = new BcfLoader();

const loadButton = document.getElementById("loadButton");

loadButton.addEventListener("click", (e) => {
  const input = document.createElement("input");
  input.type = "file";

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  input.onchange = (e) => {
    const file = e.target.files[0];
    bcfLoader.loadFile(file).then(bcf => {
      const topicsContainer = document.getElementById('topics');
      while (topicsContainer.firstChild) {
        topicsContainer.removeChild(topicsContainer.firstChild);
      }

      for (let markup of bcf.markups.values()) {
        const topic = markup.Topic;
        const topicContainer = document.createElement('div');
        topicsContainer.appendChild(topicContainer);

        const title = document.createElement('h3');
        title.innerHTML = topic.Title;
        topicContainer.appendChild(title);

        addTopicAttribute('Guid', topic, topicContainer);
        addTopicAttribute('TopicType', topic, topicContainer);
        addTopicAttribute('TopicStatus', topic, topicContainer);
        addTopicAttribute('CreationDate', topic, topicContainer);
        addTopicAttribute('CreationAuthor', topic, topicContainer);
      }
    });

    // const bcfFile =
    //   "data:application/octet-stream;base64,UEsDBBQAAAAIAGBOtkr3S+Zc3wAAAEgBAAALAAAAYmNmLnZlcnNpb26Ejk1Lw0AQhu+C/2Hcs/sVKWpIWrAiCHoSQq/b7LQZSHZlMzH137tq9ODF2zDvPPO81eY09PCGaaQYamGVEYChjZ7CsRYTH+SN2KzPz6oLKbcJHaOHmbgD7hDI7UndbR+gp31y6f0SGqvyC3AMRaHMShXGXoO5LVdWQUMjMXTMr6XWXyhOwBEOFDzEiWGICZWUn7bmuxDkcmEsTyPVYgHneVbzlYrpqAtjrN49P720HQ5OUhjZhRbFL+X/pwQsqsd8XCgrsh2gukd21KNfwnVOKv13mXvqn/kDAAD//wMAUEsDBBQAAAAIAGBOtkr3bP1+TwEAAPgBAAAvAAAAOTg5OERFNjUtQzBDRS00MTRCLTg1N0UtMURGOTdGRkFFRDhEL21hcmt1cC5iY2aEkE1zgjAURfed6X94Zd0EglKRQayCdlNXdZyOuwhR3hQSJgSx/77xY9ppN93f8+67J56e6gqOQreo5MRh1HNAyFwVKA8TpzN7EjrT5P4ufiAk1YIbUUCPpgRTCkC+QzpPl1DhTnP9+QgbRu0J4AZ8n3oB9T02Am8cBYzCBls0UBrTRK57QUUHRsEeZQGqM1ArLSgh57YV1x9dA/Y32UanFifOjev7nvYDqvTB9T2Pue+r17e8FDUnKFvDZS6cb6r4n3JsGUC8Vg3m8NKhRcbhOMwWTwFJvXRBhmw4J2EwWhCWLcej5XK2yMLsip1BNJVIViix7mpAuVe65saqBKtli43dZy/T2L0Gb9RFpA1lVmdiFQXEGxEWrNkgYn409Lex+yvyB5t1plQ6ycRRVKoR+lmceN1Uguaq/iFvqcs+9zLwLNa9mk2+AAAA//8DAFBLAQIUABQAAAAIAGBOtkr3S+Zc3wAAAEgBAAALAAAAAAAAAAAAAAAAAAAAAABiY2YudmVyc2lvblBLAQIUABQAAAAIAGBOtkr3bP1+TwEAAPgBAAAvAAAAAAAAAAAAAAAAAAgBAAA5ODk4REU2NS1DMENFLTQxNEItODU3RS0xREY5N0ZGQUVEOEQvbWFya3VwLmJjZlBLBQYAAAAAAgACAJYAAACkAgAAAAA=";
    // const _file = dataURLtoFile(bcfFile, "test.bcf");

    // bcfLoader.loadFile(_file).then(bcf => {
    // });

    // const reader = new FileReader();
    // const blob = reader.readAsDataURL(file);
    // reader.onload = function(e) {
    //     // let blob = new Blob([new Uint8Array(e.target.result)], {type: 'text/plain' });
    //     // console.log(blob);
    //     var base64String = btoa(String.fromCharCode(...new Uint8Array(e.target.result)));
    //     console.log(base64String);
    // };
  };

  input.click();
});

function addTopicAttribute(attribute, topic, target) {
  const p = document.createElement('p');
  p.innerHTML = attribute + ': ' + topic[attribute];
  target.appendChild(p);
}
