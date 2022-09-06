import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';

const sections = [
  {
    Header: '狗屁不通',
    content: '生成随机测试文章'
  },
  {
    Header: 'Options',
    optionList:[
      {
        name: 'title',
        typeLabel: '{underline string}',
        description:'文章的主题'
      },
      {
        name: 'min',
        typeLabel: '{underline number}',
        description:'文章的最小值'
      },
      {
        name: 'max',
        typeLabel: '{underline number}',
        description:'文章的最小值'
      }
    ]
  }
]
const usage = commandLineUsage(sections);

const optionsDefinitions = [
  {name:'help'},
  {name: 'title', alias: 't', type: String},
  {name: 'min', type: Number},
  {name: 'max', type: Number}
]
const options = commandLineArgs(optionsDefinitions);

if('help' in options){
  console.log(usage);
  // eslint-disable-next-line no-undef
  process.exit();
}

export { options }