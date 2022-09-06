import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'fs';
import { dirname,resolve } from 'path';
import { fileURLToPath } from 'url';
import moment from 'moment'

const __dirname = dirname(fileURLToPath(import.meta.url));
export function loadCorpus(src){
  const path = resolve(__dirname, src);
  const data = readFileSync(path,{encoding:'utf-8'});
  return JSON.parse(data)
}

export function saveCorpus(title, article) {
  const outputDir = resolve(__dirname, '..', 'output');
  const time = moment().format('YYYY-MM-DD-HH_mm_ss');
  const outputFile = resolve(outputDir, `${title}${time}.txt`);

  if(!existsSync(outputDir)) {
    mkdirSync(outputDir);
  }

  const text = `${title}\n\n    ${article.join('\n    ')}`;
  writeFileSync(outputFile, text);

  return outputFile;
}