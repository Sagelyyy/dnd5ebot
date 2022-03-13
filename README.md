This is a simple bot for DnD 5e using Discord.js. It runs on node.js and as of right now only takes two commands, /spell and /wspell.

Using /spell will make the bot reply with information on the spell. Right now that includes, the description of the spell, the range, the duration,
and what damage rolls to use at what level of the spell.

Using the /wspell command will spit out the same information, the only difference is that it will be ephemeral, meaning you are the only one
that can see it.

Right now there seems to be a max character length on discord message (2000 characters), so for now, unless I can find a better way, it will cut
off the last 100 characters if it exceeds the character limit.