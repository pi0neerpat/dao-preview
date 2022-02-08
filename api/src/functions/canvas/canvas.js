import { logger } from 'src/lib/logger'
import { createCanvas, loadImage } from 'canvas'
// import { createCanvas, loadImage } from '@napi-rs/canvas'
import { dao } from 'src/services/daos/doa'

const roundRect = (ctx, x, y, width, height, radius, fill, stroke) => {
  if (typeof stroke === 'undefined') {
    stroke = true
  }
  if (typeof radius === 'undefined') {
    radius = 5
  }
  if (typeof radius === 'number') {
    radius = { tl: radius, tr: radius, br: radius, bl: radius }
  } else {
    var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 }
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side]
    }
  }
  ctx.beginPath()
  ctx.moveTo(x + radius.tl, y)
  ctx.lineTo(x + width - radius.tr, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr)
  ctx.lineTo(x + width, y + height - radius.br)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height)
  ctx.lineTo(x + radius.bl, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl)
  ctx.lineTo(x, y + radius.tl)
  ctx.quadraticCurveTo(x, y, x + radius.tl, y)
  ctx.closePath()
  if (fill) {
    ctx.fill()
  }
  if (stroke) {
    ctx.stroke()
  }

  ctx.clip()
}

const scaleToFit = (img, ctx) => {
  // get the scale
  var scale = Math.min(514 / img.width, 171 / img.height)
  // get the top left position of the image
  var x = 150 / 2 - (img.width / 2) * scale
  var y = 170 / 2 - (img.height / 2) * scale
  // var x = 0
  // var y = 0
  ctx.drawImage(img, x, y, img.width * scale, img.height * scale)
}

export const trimAddress = (address) => {
  if (typeof address !== 'string') return ''
  return address.substring(0, 5) + '...' + address.substring(38, 42)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const handler = async (event) => {
  let contractAddr = '0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f'
  let chainId = '0x64'

  if (event.queryStringParameters) {
    ;({
      // width,
      // height,
      chainId,
      address: contractAddr,
    } = event.queryStringParameters)
  }

  const {
    name,
    profileImage,
    // daoHausUrl,
    // contractAddress: contractAddr,
    // chainId,
    treasuryTotal,
    memberCount,
  } = await dao({ contractAddr, chainId })

  let width = 514
  let height = 170
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  roundRect(ctx, 0, 0, width, height, 8, '#000')

  ctx.font = '900 20px Montserrat, sans-serif'
  ctx.fillStyle = '#fff'
  ctx.fillText(name, 170, 40 + 10)

  ctx.font = '500 16px Montserrat, sans-serif'
  ctx.fillStyle = '#fff'
  ctx.fillText(formatter.format(treasuryTotal), 170, 70 + 10)
  ctx.fillText(`${memberCount} members`, 170, 100 + 10)
  ctx.fillText(trimAddress(contractAddr), 170, 130 + 10)

  roundRect(ctx, 0, 0, 150, height, 0, false)
  ctx.clip()
  const img = await loadImage(profileImage)

  scaleToFit(img, ctx)

  ctx.imageSmoothingEnabled = false
  const buffer = canvas.toBuffer('image/png')

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'image/png' },
    body: buffer,
  }
}
