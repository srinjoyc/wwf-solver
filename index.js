const tesseract = require('node-tesseract-ocr')

const config = {
  lang: 'eng',
  oem: 1,
  psm: 3
}

const sharp = require('sharp')

const fs = require('fs')

const sizeImage = async () => {
  const newimg = await sharp('image.jpg')
    .extract({ left: 100, top: 100, width: 100, height: 100 })
    .toBuffer()
    .catch(err => {
      console.log(err)
    })
  console.log(newimg)
  fs.writeFile('./image12.png', newimg, function (err) {
    if (err) throw err
  })
  return
  tesseract
    .recognize('image.jpg', config)
    .then(text => {
      console.log('Result:', text)
    })
    .catch(error => {
      console.log(error.message)
    })
}

sizeImage()
