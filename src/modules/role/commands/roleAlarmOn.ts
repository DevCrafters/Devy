import { Command } from '../../../base/command';
import { prefix } from '../../../base/commandExecutor';
import { gistRoleNames } from '../gist';

export const RoleAlarmOnCommand: Command = {
  description: '역할 알림을 켜드릴게요!',
  execute: async (sender, channel, _, data) => {
    const dataConverted = data[1].split(',').map(it => it.trim().toLowerCase());
    const notIncluded = dataConverted.filter(it => !gistRoleNames.includes(it));
    if (notIncluded.length > 0) {
      channel.send(
        `'${notIncluded.join(
          ', '
        )}'은 알 수 없는 역할이에요.\n${prefix} 역할 목록 보여줘\n를 쳐서 역할 목록을 확인해주세요.`
      );
      return;
    }

    const guildRoles = [...channel.guild.roles.values()];

    const notSenderRoles = guildRoles.filter(
      it => ![...sender.roles.values()].includes(it)
    );

    const roles = guildRoles.filter(it =>
      dataConverted.includes(it.name.toLowerCase())
    );

    const rolesStarred = guildRoles.filter(
      it =>
        it.name.endsWith('*') &&
        dataConverted.includes(it.name.toLowerCase().slice(0, -1))
    );

    const roleHas = sender.roles.filter(it => rolesStarred.includes(it));
    const roleNotHas = notSenderRoles.filter(it => roles.includes(it));

    await sender.removeRoles(roleHas);
    await sender.addRoles(roleNotHas);
    await channel.send(
      `<@!${sender.id}> 역할 알림 ${roleNotHas.length > 1 ? '다 ' : ''}켰어요!`
    );
  },
  namespace: '역할',
  regex: /역할 (.*) 알[람림] 켜줘/,
  usage: '역할 (이름) 알람/알림 켜줘'
};
