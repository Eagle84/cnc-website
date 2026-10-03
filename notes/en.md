# What's new in Cops & Criminals

Short and simple. The newest news is first. (Build numbers are in brackets.)

## 🗺️ A map that makes sense (72)
- **Icons that fit their place.** The Fixer is a star, the black market a mask, laundering fronts show cash, the car exports a car, the fields a leaf, the weed stores a leaf on a house, the dive sites a diver's mask, the bail bondsman the bail bonds icon, the payphone a phone. A turf you can take is a crown and a gang's hangout a clubhouse (they were both the same two skulls, and on top of each other). The Dark Web contract, the bounty and the hitman's office are three different icons now (all three were the same skull).
- **The same things in one line.** The legend of the map lists "City camera" once, not twelve times with a place after it, and the same for speed cameras, drug corners, dive sites, reefs, police stations and flights. Cameras only show on the map when you are within 300 metres.
- **Only for who it is for.** The black market, the Fixer, hideouts, laundering fronts, car exports, the scrap buyer, Pay 'n' Spray, the cartel, the payphone and the weed stores only show on the map of the jobs that do crime: not for police, medics or taxi drivers. The ways to join a job stay on every map. A taxi driver sees all eight cab offices, everyone else only the first one.
- **The four turfs you can take moved** away from the gangs' own territory (they stood on the Ballas' and the Lost's hangouts): La Puerta, Elysian Island, West Vinewood and Grapeseed.
- Server owners: `/blips` (F8) lists what is on the map by sprite, and `Config.Blips.tidy` hides, restyles or keeps to a job the blips of other scripts (the garages, the clothing stores...). Every icon is in `Config.Blips.kinds`.
- Server owners, how to install this build: `install_windows.bat` (the server may be running), then the next restart loads all of it. `update_live` plus `/cyupdate` brings in cy-cnc and the police stations; the taxi offices, the bounty icon and the car shop's colour come with the next restart.

## 🌆 The city pushes back, makes its own crimes, and says what you need (71)
- **The city heat.** The more crime there is, the harder the city pushes back: from a calm city, to patrols and roadblocks, to a police helicopter, to a lockdown with every unit out. A card at the top of the screen says when the city is hot, and Breaking News tells it too. It calms down when things are quiet, and stars wear off slower while it is hot. `/cncheat` (admins) sets it; `Config.CityHeat` has the levels.
- **The city makes its own crimes** when few players are wanted: an armed robbery at a store, a car theft on the road, two people fighting, someone lying hurt. They come to the police and the medics as 911 calls with a blip. The first one there brings the scene to life; suspects run, drive off or fight, and give up when cornered or aimed at. Press E on a suspect who has stopped to arrest them, or on a patient to treat them. When the call is settled everyone of the job who got there is paid and gets XP. `Config.CityCrime`.
- **Every job says what it needs, and where to get it.** The Union Depository heist, the prison break and the Gruppe Sechs truck robbery show a card from a distance with each item you need, ticked or crossed, and where to find the missing ones (the black market with its city level, a contraband or supply drop, a terminal, a workshop). The spot stays locked until you carry what it takes. The Union Depository gate will not open until the crew carries the thermite, the laptop and the drill between them (it used to find out at stage 2 and 3, with the clock running). The contract card shows what is still to bring. A duo job's item has to be on the partner whose part it is. The F4 > Places list has the heist and the prison break; the catalytic converter entry is there greyed out, with where to get a hacksaw.
- **Photo steps work.** "Photograph where they stop" and the other photo steps of the hitman and reporter jobs: take the photo from up to 20 metres, with E or with your phone camera, and the card says so. A house's address that was inside the house (nobody can get in) is moved to the street in front of it.
- The stress and stamina circles show only when they matter (stress above zero, a tired player). The armour circle too. Anything you turn on yourself in the HUD menu stays.
- Server owners: `install_windows.bat` now works while the server is running. It installs, and everything loads at the next server restart (txAdmin's scheduled restart is enough), nothing to stop. `/cyupdate` still brings the live resources in at once.
- Server owners, how to install this build: `install_windows.bat` (the server may be running), then the next restart loads all of it. Without a restart `update_live` plus `/cyupdate` brings in everything but the phone camera's part (qb-phone) and the item hints of the other scripts.

## 🎒 Items you can use, real pictures, a fair split (70)
- Every item of ours can be used from the inventory now. The ATM hack kit hacks the ATM you stand at (it did nothing when used), zip ties tie the person next to you with their hands up, the hacksaw cuts the converter out of a parked car, the spear fishes at a reef, a hacker's laptop opens their menu. Anything else tells you what it is for and where to take it.
- Every item of ours has a real picture: a drawing of the thing itself, no longer an icon on a dark tile. The swamp's pelts, meat, herbs, boots and tonic have one for the first time.
- Rob a store together: the register, the safe and the clerk's money are split equally between everyone in the store who does crime (your party, or anyone else there). Police and medics get nothing. `Config.CrewShare` sets the distance and who counts.
- Drinks wear off twice as fast (about 10 minutes from wasted to sober) and passing out lasts 15 seconds. Coke, crack, ecstasy and meth now last exactly what the countdown says: 20, 15, 20 and 15 seconds (crack used to go on for a minute). All in `Config.Drunk`.
- The health circle reaches full for every character (a female character stopped at 75%), and the voice circle shows which range you are on. `/hudcheck` (F8) prints the numbers behind the circles.
- The ATM hack says "Stand right at the machine." instead of nothing when you are too far from it.
- Server owners, how to install this build: `install_windows.bat` with the server stopped. (`update_live` works for most of it, but the item pictures, the split of a register or safe and the drug lengths are in qb-inventory, qb-storerobbery and qb-smallresources, which only change with a restart.)

## 🕵️ Crime without police on duty, countdowns, and What's new (69)
- Stores, ATMs and houses can be robbed even when no police player is on duty, so a civilian can do them on a quiet server. You still get the stars and the police call, and the NPC police still come. Banks, the jewelry store, the armored truck and the heists still need police on duty.
- Drunk or high: a card at the top of the screen counts down until it wears off (passed out: until you come round). Cocaine, crack, ecstasy and meth get one too, and another dose adds to the time.
- F4 > Help > **What's new**: the latest changes in plain words, in your language. A dot shows on Help until you have seen the newest.
- Server owners: everything in `scripts` now runs on Debian (and other Linux) as well: `update_live.sh`, `discord_setup.sh` and `export_reports.sh` join `install_linux.sh`, `backup_linux.sh` and `restore_linux.sh`. Each answers `--help`.
- Server owners, how to install this build: `update_live` is enough. The stores' own police minimum (a patch to qb-storerobbery's config) and the scoreboard take effect at the next server restart, or at once with `/cyupdate force`.

## 🗺️ Z for the map, and what the players reported (68)
- **Z** makes the minimap bigger, press it again for bigger still, and again to go back, like in GTA Online. Your City Pass card (with the XP bar) moved to **U**; hold U for the list of players. Both keys can be changed in Settings > Key Bindings > FiveM.
- The gang respect panel no longer sits on the screen all the time: it shows for a few seconds when your respect changes, and only that gang's row while you are in its turf. `/ganghud` switches between this, always on, and off.
- The sounds of the sea and the beach are much quieter (GTA plays its own waves there too), and the city sounds start lower for new players. `/sound` sets them as you like.
- The safe zone at Pillbox is no longer a green disc floating over the streets: its edge is a ring of markers standing on the ground.
- Server owners: `scripts\export_reports.bat` puts every bug report, complaint and ticket into one file to read or hand on.
- Server owners: the files you run (install, live update, backup, restore, Discord setup, reports) are now together in the **scripts** folder of the download, for example `scripts\install_windows.bat`.
- Server owners, how to install this build: coming from .67, `update_live` is enough; the safe zone ring waits for the next server restart. Coming from .66 or older, use `install_windows.bat` with the server stopped (.67 changed the character select, which never restarts live).

## 🍸 Drinks that hit, and a round of fixes (67)
- The character select had no mouse pointer after build .64. It has it again.
- The phone camera works: photos are saved in Discord's #phone-photos channel (staff only), and nothing that could post to your Discord is handed to players. Server owners: run discord_setup.bat once more to add the channel.
- Two console errors are gone: one when a player with no Discord linked logs in, and "Missing phrase for key: info.house" from the garages.
- Several players in one car: their names were drawn on top of each other. Now they stand in a column above the car, the driver on top.
- The police menu: clicking a grey info line ("Suspect must be on foot", "Handcuff the suspect before arresting", "Nothing found") no longer gives an error; those lines are not buttons now.
- The chat no longer gets stuck: locking your car with L no longer hides the chat or pins it on the screen (that is `/chatview` now), and if another window takes the keyboard while you type, the chat box closes by itself and T opens it again, with what you typed.
- Drinking makes you drunk: beer, whiskey and vodka add up. Two vodkas and you walk drunk, the screen swims, you trip and the car pulls to one side; three and you can barely stand; four and you pass out where you are. It wears off by itself.

## 🚓 Escort missions (66)
- Five contracts now give you a real person to take along: a **prisoner** to Bolingbroke (police), a **VIP** to their hotel and a **witness** to Mission Row (police), a **patient** to Pillbox (EMS), and a **crew member** to a safehouse (street).
- Step by step: press **E** next to them to take them (a prisoner is cuffed and held by the arm), **E** at a car's back door to seat them (or just get in and they follow), drive, **E** at their door to let them out, then walk them to the door and press **E**. The job card shows which step you are on.

## 🖼️ Real item pictures (65)
- Items like baking soda now use the real picture from the server's picture pack when it has one, like the rest of the inventory. Our drawn icon is only used when there is no real picture.

## ✨ Smoother arrival (64)
- Your car from F4 > Garage > Deliver now arrives facing you. The driver no longer has to turn it around first.
- Joining: no more flash of strange `{{ ... }}` text on a black screen during the loading screen, and no glimpse of the game before the character select.
- Baking soda has a real picture in the inventory now (it looked like a missing picture).

## 🩺 Finding what crashes the game (63)
- If your game crashes while you play, the server now notes which car you were in, so the staff can find a broken car. Server owners: the installer also lists add-on cars that clash with each other (a classic cause of crashes while driving).

## 🔄 Updates without a restart (62)
- The car radio: you can turn it off and change stations with GTA's wheel (Q) again. It played and could not be changed — fixed.
- Server owners: a new build can go in while people play. Run `update_live.bat`, then an admin types `/cyupdate`: everyone gets a 20-second warning and only what changed restarts. You stay in the game. See docs/LIVE-UPDATE.md.
- Players who kept timing out while joining: joining sends less now, and the console names what a timed-out player was waiting for, so it can be fixed.

## 🔧 Smoother, and some fixes (61)
- The car radio is back to GTA's own radio and its station wheel. (Our made-up music is off now; a server setting turns it back on.)
- Hackers: your Null Sector contracts and daily tasks are now right in the Laptop (Contracts, Today's tasks), as well as F6 and F7. New: /cncwhoami tells you your job and what work is on offer.
- EMS: the Mass Casualty patients and the Blood Run coolers no longer end up behind a counter or on a ledge — they are pulled to where you can reach them. This also fixes stuck spots in other missions.
- The Discord "Join" line no longer shows a broken address, and the Discord link in F4 > Help can be set properly (the setup tool fills it in).
- Under the hood: a lighter player list and a few small memory leaks closed. See docs/PERFORMANCE-AUDIT.md.

## 📺 A live stream on screen (60)
- Admins can put a live stream on everybody's screen: a small square at the top left with a YouTube, Twitch or Kick stream. It is off until an admin turns it on (`/cnclive`).
- Don't want it? `/live` hides it for you. `/live sound` turns its sound on, `/live size` makes it bigger.

## 💬 The city on Discord (59)
- The server has a Discord now. A message there shows by itself whether the city is open, how many are playing and how to join.
- Need help? Type `/ticket` and what you need, or `/bug` and what went wrong. Staff answer from Discord and you read the answer in the game, even if you were away: you get it the next time you play. `/tickets` shows yours.
- The reports in F4 reach the staff the same way.
- Server owners: run `discord_setup.bat` once and paste your bot's token. It makes the channels, roles and welcome texts and connects the server. See `docs/DISCORD.md`.

## 🧭 More jobs, one stop at a time (58)
- Every job now has about ten missions, and only a few are on offer after each restart, so it is not the same ones every day.
- A job with several stops shows only the one you are on. The next one appears when you finish.
- The Hacker has contracts and daily tasks of their own, and the laptop opens ATMs.
- Finish all the day's tasks for a bonus that changes every day: money, items or experience.
- You can fly to the Sandy Shores airfield from the airport desk, and the Cargo Flight job now says that you fly the plane yourself.
- The gas station clerks that stood at the pumps are gone: clerks stay in the shops.

## 🎶 The sounds of the city (57)
- A car radio with four stations that the game makes up as it goes: synthwave, Florida rap and two Latin ones. Everybody in the car hears the same song. Keys: **.** next, **,** back, **/** off.
- Sirens that change pitch as they pass you, and the sounds of the place you are in: the beach, the swamp, the desert, the city. Use **/sound** to set how loud each one is.
- Music on the loading screen, and a new icon for the server list.
- Paramedics and firefighters have their own missions now. Police, paramedics and firefighters see the crime menus but can not use them.
- Jail time is cut in half: every sentence is half as long.
- Supply drops: the crate now fits its size, a small drop is a small case and a large drop is a big crate.
- Fixed an error when typing a radio channel in qb-radio.
- Server owners: new backup and restore scripts, and `install_linux.sh` for a Linux machine. See `docs/BACKUP-AND-NEW-MACHINE.md`.

## 🛡️ A safer city (56)
- Nobody can fake a robbery from far away to get XP or money any more.
- A stranger can no longer throw you out of your car. Only people who are cuffed, tied up, down, or have their hands up can be pulled out.
- Server owners: the webhooks for reports moved to `server.cfg`, so players can not read them. New tools to test the server against cheaters are in `docs/SECURITY-TESTING.md`.

## 🧰 Your job, your contracts (55)
- Press **F6 > Contracts** and you see work for **your** job: taxi, mechanic, tow truck, garbage, trucker, reporter, hitman, police, paramedic.
- 17 new jobs to do, all paid in clean money.
- Crime jobs only show for people who do crime.

## 🏁 The Mud Club (54)
- Time trials, races with bets, mud-bogging and parts for dirt bikes, quads and buggies, out in the desert.
- The man at the marina and the man at the hunting lodge now stand at their desks.

## 🐊 The swamp and gang turf (53)
- A hunting lodge by the Alamo Sea: a permit, airboats, animals, herbs, boots and a tonic.
- A gang that hates you can close its turf. Buy a pass from the leader to walk in safely. Hitting a gang member now costs you respect.

## 🌊 The marina (52)
- Rent boats, dive for salvage, spear-fish, and run crates by boat.
- When you are arrested you keep your ID, your licences and your phone.

## 🤝 Bonnie & Clyde (51)
- Two players can team up as a duo: shared skills, a shared stash and three heists made for two.

## 🕶️ The Dark Web (50)
- Put a price on someone from your phone, in secret. Hitmen get skills, suppressors and a grapple line.

## 📱 CyPhone and Clout (49)
- A phone app and a feed of short videos. Go live, do something cool, get followers. Fame opens special jobs.

## 🌍 Four languages (43-48)
- English, Hebrew, Lithuanian and Arabic. You pick once, on the loading screen.
- A new look and map pins for the prison. The character screen speaks your language too.

## 🚓 Cops and robbers, before that (24-42)
- A new chat, new notifications, contracts with a crew, abilities, tickets, speed and city cameras, store hold-ups, the Drug Dealer job, gang respect, a city tour, a new character screen, the Hacker job, and police and paramedics that the game runs when no player is on duty.

## 🔜 Coming next
- A Discord server that shows who is online and takes tickets and bug reports, and a small live-stream window on the screen.

## 🧑‍🔧 For server owners: how to update
1. Download the newest files and **stop** the game server.
2. Run `install_windows.bat`. Its first line shows the build, and it backs up everything it replaces.
3. Start the server again. The `README.md` explains what to do if something is yellow in the list.

*Translations are first drafts without a native reviewer: tell us what reads wrong.*
