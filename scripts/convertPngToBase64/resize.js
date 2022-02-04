const fs = require('fs-extra')
const path = require('path')
const sharp = require('sharp')

const directoryPath = path.join(__dirname, './placeImagesHere')

const resize = async () => {
  fs.readdir(directoryPath, async (err, files) => {
    if (err) return console.log(err)
    console.log('Converting...')
    if (!files) throw 'No files found'
    let images = []
    await Promise.all(
      files.map(async (fileName, index) => {
        if (!fileName.match(/(.png)$/)) return
        return sharp(path.resolve(directoryPath, fileName))
          .resize({
            width: 96,
            height: 96,
          })
          .toFile(path.resolve(__dirname, `./resized/${fileName}`))
      })
    )
  })
}

resize()
