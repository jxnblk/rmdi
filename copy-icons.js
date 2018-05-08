#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const readdir = require('recursive-readdir')
const camelCase = require('lodash.camelcase')

const pkgPath = path.join(__dirname, './node_modules/material-design-icons')
const outDir = path.join(__dirname, './icons')

const ignore = (file, stats) => {
  if (stats.isDirectory()) return false
  // ignore svg/design directories
  if (file === 'design') return true
  return !/\.svg$/.test(file)
}

const is24px = filename => /24px.svg$/.test(filename)

const rename = filename => path.basename(filename, path.extname(filename))
  .replace(/^ic_/, '')
  .replace(/_24px$/, '')
  .replace(/^3d/, 'ThreeD') // remove number from beginning

const readFile = filename => {
  const content = fs.readFileSync(filename, 'utf8')
  const name = camelCase(
    rename(filename)
  )
  return {
    filename,
    name,
    content
  }
}

const writeFile = ({
  name,
  content
}) => {
  const filename = path.join(outDir, name + '.svg')
  fs.writeFileSync(filename, content)
}

const docTemplate = ({
  icons = []
}) => `
# Icons (${icons.length})

${icons.map(({ name }) => `- \`${name}\``).join('\n')}
`

const createDoc = icons => {
  const filename = path.join(__dirname, './ICONS.md')
  const content = docTemplate({ icons })
  fs.writeFileSync(filename, content)
}

const copy = async () => {
  const files = await readdir(pkgPath, [
    ignore
  ])
  const icons = files
    .filter(is24px)
    .map(readFile)

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)

  icons.forEach(writeFile)
  createDoc(icons)

  console.log(icons.length, ' icons copied')
}

copy()
