import express from 'express';
import { readFileSync } from 'fs';
import { Module } from '../../base/module';

export const WebPageModule: Module = {
  initialize: initializeWebpage,
  name: 'WebPage'
};

const page = readFileSync('./index.html');

async function initializeWebpage() {
  const app = express();

  app.get('/', (_, res) => res.send(page));

  app.get('*', (_, res) => res.redirect('/'));

  setTimeout(() => {
    // prevent blocking
    app.listen(80, () => console.log('Devy now listening port 80!'));
  }, 0);
}
