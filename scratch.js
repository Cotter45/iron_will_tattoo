// read all files from dir ./public/images/sam
// get the filenames and write them to a json file

const fs = require('fs')
const path = require('path')

const dir = './public/images/lesyadanko'
const jsonFile = './public/images/lesyadanko.json'

fs.readdir(dir, (err, files) => {
  if (err) {
    console.log('Error reading directory', err)
  } else {
    fs.writeFile(jsonFile, JSON.stringify(files), (err) => {
      if (err) {
        console.log('Error writing file', err)
      } else {
        console.log('File written successfully')
      }
    })
  }
})
