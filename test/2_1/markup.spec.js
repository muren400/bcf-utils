import BcfLoader from '../../src/access/bcf-loader.js';

async function fetchBCF(url, filename) {
  const response = await fetch(url);
  const data = await response.blob();
  const metadata = {
    type: 'application/octet-stream',
  };
  const file = new File([data], filename, metadata);

  return file;
}

describe('BCF Markup', () => {
  it('Minimum information', async () => {
    const file = fetchBCF('/base/test/2_1/files/MinimumInformation.bcf', 'file.bcf');

    const bcfLoader = new BcfLoader();
    const bcf = await bcfLoader.loadFile(file);

    const guid = '9898DE65-C0CE-414B-857E-1DF97FFAED8D';
    const topic = bcf.markups.get(guid).Topic;
    expect(topic.Guid).toEqual(guid);
    expect(topic.Title).toEqual('Minimum information BCFZip topic.');
    expect(topic.CreationDate).toEqual('2015-07-15T13:12:42Z');
    expect(topic.CreationAuthor).toEqual('Developer@example.com');
  });

  it('Maximum information', async () => {
    const file = fetchBCF('/base/test/2_1/files/MaximumInformation.bcf', 'file.bcf');

    const bcfLoader = new BcfLoader();
    const bcf = await bcfLoader.loadFile(file);

    const guid = '7ddc3ef0-0ab7-43f1-918a-45e38b42369c';

    const markup = bcf.markups.get(guid);

    const header = markup.Header;

    debugger;

    const topic = markup.Topic;
    expect(topic.Guid).toEqual(guid);
    expect(topic.Title).toEqual('Maximum Content');
    expect(topic.CreationDate).toEqual('2015-06-21T12:00:00Z');
    expect(topic.CreationAuthor).toEqual('dangl@iabi.eu');
  });
});
