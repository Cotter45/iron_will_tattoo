// read all files from dir ./public/images/[slug]
// get the filenames and write them to a json file

const fs = require('fs')

const dir = './public/images/kennycantwell'
const jsonFile = './public/images/kennycantwell.json'

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
