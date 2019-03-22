import { RichEmbed } from 'discord.js';
import { Command } from '../../../base/command';
import { gist } from '../../../base/config';
import { color } from '../../../bot';
import { gistRoleCategories, gistRoles } from '../gist';

function render(
  result: Array<{ category: string; name: string; value: string }>,
  data: object,
  parent?: string,
  parentCategory?: string
) {
  for (const key of Object.keys(data)) {
    if (key[0] === '@') {
      continue;
    }
    const got = data[key];
    const category = `${parentCategory ? `${parentCategory}/` : ''}${key}`;
    if (got instanceof Object) {
      render(
        result,
        got,
        `${parent ? `${parent} - ` : ''}${got['@name'] || ''}`,
        category
      );
    } else {
      result.push({
        category,
        name: `${parent ? `${parent} - ` : ''}${got || ''}`,
        value: gistRoles
          .filter(role => role.category === category)
          .map(role => role.name)
          .join(', ')
      });
    }
  }
  result.sort((a, b) => {
    const orderA = order.indexOf(a.category) + 1 || order.length;
    const orderB = order.indexOf(b.category) + 1 || order.length;

    return orderA - orderB;
  });
  return result;
}

let order;
let roleList = null;

export const RoleListCommand: Command = {
  description: '제가 관리하는 역할 목록을 보여드릴게요!',
  execute: async (_, channel) => {
    if (!order) {
      order = gist['role-category-order'] as string[];
    }
    if (!roleList) {
      const result = [];
      render(result, gistRoleCategories);
      roleList = new RichEmbed({
        color,
        description: '이 서버에 있는 역할 목록이에요.',
        fields: result,
        title: '역할 목록'
      });
      // roleList = render('', gistRoleCategories, '');
    }
    await channel.send(roleList);
  },
  namespace: '역할',
  regex: /역할 목록 보여줘/,
  usage: '역할 목록 보여줘'
};
