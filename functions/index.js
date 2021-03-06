const functions = require('firebase-functions')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

exports.next = functions.https.onRequest(async (req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  await app.prepare()
  handle(req, res)
})
