import express from 'express';
import { Module } from '../../base/module';

export const WebPageModule: Module = {
  initialize: initializeWebpage,
  name: 'WebPage'
};

async function initializeWebpage() {
  const app = express();

  app.get('/test', (req, res) => res.send('Hello, world!'));

  setTimeout(() => {
    // prevent blocking
    app.listen(80, () => console.log('Devy now listening port 80!'));
  }, 0);
}
