const fs = require('fs-extra')
const path = require('path')

const directoryPath = path.join(__dirname, './placeImagesHere')

const convert = async () => {
  fs.readdir(directoryPath, async (err, files) => {
    if (err) return console.log(err)
    console.log('Generating base64...')
    if (!files) throw 'No files found'
    console.log(files)
    let images = []
    await Promise.all(
      files.map(async (fileName, index) => {
        if (!fileName.match(/(.png)$/)) return
        const data = fs.readFileSync(path.join(directoryPath, fileName))
        images[index] = new Buffer(data, 'binary').toString('base64')
      })
    )
    fs.writeFile(
      path.join(directoryPath, '../images.js'),
      `const images = ${JSON.stringify(images)}
module.exports = images`,
      (err) => {
        if (err) throw err
      }
    )
  })
}

convert()
