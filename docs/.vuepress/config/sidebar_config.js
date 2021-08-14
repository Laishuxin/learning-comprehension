const { getFileNames, getFileNamesByGroups } = require('./utils')
const { resolve } = require('path')
const basePath = resolve(__dirname, '../../')

const sidebar = {
  '/cate/psychology/': getPsychology('积极心理学'),
  '/cate/english/': getEnglish('基础', '翻译', '英语精读', '仿写', '应试'),
  '/cate/fitness/': getFitness('原理解析', '动作精讲', '训练计划'),
  '/cate/': ['psychology/', 'english/', 'fitness/']
}

function getCate() {
  const path = resolve(basePath, './cate/')
  return getFileNames(path)
}

function getPsychology(groupA) {
  const path = resolve(basePath, './cate/psychology/')
  const group = getFileNamesByGroups(path, [groupA])
  return [{ title: groupA, collapsable: false, children: group[groupA] }]
}

function getEnglish(...groups) {
  const path = resolve(basePath, './cate/english/')
  const group = getFileNamesByGroups(path, groups)
  // return [
  //   { title: groupA, collapsable: false, children: group[groupA]},
  //   { title: groupB, collapsable: false, children: group[groupB] }
  // ]
  return groups.map((item) => {
    return {
      title: item,
      collapsable: false,
      children: group[item]
    }
  })
}

function getFitness(...groups) {
  const path = resolve(basePath, './cate/fitness/')
  const group = getFileNamesByGroups(path, groups)
  return groups.map((item) => {
    return {
      title: item,
      collapsable: false,
      children: group[item]
    }
  })
}
module.exports = sidebar
