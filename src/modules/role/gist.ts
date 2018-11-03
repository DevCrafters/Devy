import axios from 'axios'
import { ServerRole } from './serverRole'
import { ServerRoleId } from './serverRoleId'

export const gistRoles: ServerRole[] = []

export let gistRoleCategories = {}

export async function initializeGistRole() {
  const gistOwner = 'RanolP'
  const gistId = '849d4191ad8a19497e1b886e3ee06e5c'

  const rawGist = `https://gist.githubusercontent.com/${gistOwner}/${gistId}/raw`

  const response = (await axios.get(rawGist, {
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    }
  })).data

  gistRoleCategories = response['role-categories']

  for (const category of Object.keys(response.roles)) {
    const roleList = response.roles[category]
    for (const id of Object.keys(roleList)) {
      const got = roleList[id]
      gistRoleNames.push(got.name.toLowerCase())
      gistRoles.push(
        new ServerRole(
          category,
          id,
          got.name,
          new ServerRoleId(
            got['role-id'].callable,
            got['role-id']['not-callable']
          )
        )
      )
    }
  }

  console.log(`Gist role initialized (${gistRoles.length} roles)`)
}

export const gistRoleNames: string[] = []
