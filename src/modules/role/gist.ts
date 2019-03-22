import { gist, loadGist, saveGist } from '../../base/config';
import { serialize } from '../../serialize';
import { reorder } from './positioner';
import { changes, ServerRole } from './serverRole';

export const gistRoles: ServerRole[] = [];

export let gistRoleCategories = {};

export async function initializeGistRole(): Promise<string> {
  await loadGist({ ifNotLoaded: true });

  gistRoleCategories = gist['role-categories'];

  const waits = [];
  for (const category of Object.keys(gist.roles)) {
    const roleList = gist.roles[category];
    for (const id of Object.keys(roleList)) {
      const got = roleList[id];
      gistRoleNames.push(got.name.toLowerCase());
      gistRoles.push(
        new ServerRole(
          category,
          id,
          got.name,
          got['role-id'] && got['role-id'].callable,
          got['role-id'] && got['role-id']['not-callable'],
          waits
        )
      );
    }
  }

  await Promise.all(waits);

  if (changes.size > 0) {
    await reorder();

    for (const change of changes.values()) {
      gist.roles[change.category][change.id] = serialize(change);
    }
    changes.clear();

    await saveGist();
  }

  return `Module 'Role' initialized with ${gistRoles.length} roles`;
}

export const gistRoleNames: string[] = [];
