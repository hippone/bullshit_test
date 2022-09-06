import { loadCorpus,saveCorpus } from './lib/corpus.js';
import { generate } from './lib/generator.js';
import { createRandomPick } from './lib/random.js';
import { options } from './lib/cmd.js';
import { interact } from './lib/interact.js';


const corpus = loadCorpus('../corpus/data.json');
let title = options.title || createRandomPick(corpus.title)();

(async function () {
  if(Object.keys(options).length <= 0){
    const answer = await interact([
      {text:'请输入文章主题',value:title},
      {text:'请输入最小文字',value:3000},
      {text:'请输入最大文字',value:5000}
    ])
    title = answer[0]
    options.min = Number(answer[1])
    options.max = Number(answer[2])
    const article = generate(title,{corpus,...options})
    const output = saveCorpus(title,article)
    console.log(output)
  }
}())




