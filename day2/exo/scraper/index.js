import * as fs from 'fs';
import * as cheerio from 'cheerio';

const $ = await cheerio.fromURL('https://www.css.cnrs.fr/scrape/nobel_all.html');

const nobels = [];

$('table tbody tr').each((i, row) => {
  const cols = $(row).find('td');

  const record = {
    année: $(cols[0]).text().trim(),
    phisic: $(cols[1]).text().trim(),
    chimie: $(cols[2]).text().trim(),
    physio: $(cols[3]).text().trim(),
    Litterature: $(cols[4]).text().trim(),
    Paix: $(cols[5]).text().trim(),
    Economie: $(cols[6]).text().trim(),
  };

  nobels.push(record);
});

fs.writeFileSync('output.json', JSON.stringify(nobels, null, 2), "utf-8")
console.log("fichier créer avec succès");

