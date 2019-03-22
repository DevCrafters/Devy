import { Client, Guild } from 'discord.js';
import 'now-env';
import { CommandExecutorModule } from './base/commandExecutor';
import { ActivityModule } from './modules/activity';
import { DieModule } from './modules/die';
import { HelpModule } from './modules/help';
import { RoleModule } from './modules/role';
import { UptimeModule } from './modules/uptime';
import { WebPageModule } from './modules/webpage';

export const client = new Client();

export let guild: Guild = null;

export const color = 0x8771f4; // hsl(250, 85%, 70%)

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  guild = client.guilds.get('333193886946295808');

  const modules = [
    // Core Modules
    CommandExecutorModule,
    ActivityModule,
    HelpModule,

    // Custom Modules
    RoleModule,
    WebPageModule,
    UptimeModule,
    DieModule
  ];

  for (const module of modules) {
    const result = await module.initialize();
    console.log(
      typeof result === 'string'
        ? result
        : `Module '${module.name}' initialized`
    );
  }
});

client.login(process.env.DEVY_TOKEN);
