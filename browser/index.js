import { generate } from '../lib/generator.js'
import { createRandomPick } from '../lib/random.js'

// eslint-disable-next-line no-undef
const defaultCorpus = require('../corpus/data.json')
async function loadCorpus(corpusPath){
  if(corpusPath){
    const corpus = await (await fetch(corpusPath)).json();
    return corpus
  }
  return defaultCorpus
}

export { generate, createRandomPick, loadCorpus }