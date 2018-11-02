import express from 'express'

export function initializeWebpage() {
  const app = express()

  app.get('/test', (req, res) => res.send('Hello, world!'))

  app.listen(80, () => console.log('Devy now listening port 80!'))
}
