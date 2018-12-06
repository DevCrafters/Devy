import axios from 'axios';
import { ClientRequest } from 'http';

export let gist = null;

const token = process.env.GIST_TOKEN;

const gistOwner = 'RanolP';
const gistId = '849d4191ad8a19497e1b886e3ee06e5c';
const rawGist = `https://gist.githubusercontent.com/${gistOwner}/${gistId}/raw`;
const patch = `https://api.github.com/gists/${gistId}`;

export async function loadGist({ ifNotLoaded = false }) {
  if (ifNotLoaded && !!gist) {
    return;
  }

  gist = (await axios.get(rawGist, {
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    }
  })).data;
}

export async function saveGist() {
  console.log('Save requested');
  await axios.patch(
    patch,
    {
      description: 'Stores the config of devy',
      files: {
        'devy-config.json': {
          content: JSON.stringify(gist)
        }
      }
    },
    {
      headers: {
        Authorization: `token ${token}`
      }
    }
  );
}
