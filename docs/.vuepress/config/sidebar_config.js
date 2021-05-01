const { getFileNames, getFileNamesByGroups } = require('./utils')
const { resolve } = require('path')
const basePath = resolve(__dirname, '../../')

const sidebar = {
  '/cate/psychology/': getPsychology('积极心理学'),
  '/cate/english/': getEnglish('翻译'),
  '/cate/': ['psychology/', 'english']
}

function getPsychology(groupA) {
  const path = resolve(basePath, './cate/psychology/')
  const group = getFileNamesByGroups(path, [groupA])
  return [{ title: groupA, collapsable: false, children: group[groupA] }]
}

function getEnglish (groupA) {
  const path = resolve(basePath, './cate/english/')
  const group = getFileNamesByGroups(path, [groupA])
  return [{ title: groupA, collapsable: false, children: group[groupA] }]
}
module.exports = sidebar