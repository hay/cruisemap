import view from './view.js';
import Papa from 'papaparse';

function parseRecord(record) {
    record.desc = record['Image description'];
    record.id = parseInt(record.Number);
    record.src = `images-thumbs/${record.id}.jpg`;
    record.fullsrc = `images-full/${record.id}.jpg`;
    record.text = record.Text;
    return record;
}

Papa.parse('./data/data.csv', {
    complete(results) {
        const data = results.data.map(parseRecord);
        view(data);
    },
    download : true,
    header : true
});