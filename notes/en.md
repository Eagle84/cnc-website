# What's new in Cops & Criminals

Short and simple. The newest news is first. (Build numbers are in brackets.)

## 🧾 Every store purchase in Discord (85)
- **A log of the store for staff.** Every purchase, renewal, CnCoins spend and refund is a card in the new staff channel **#log-store**: who bought (their Cfx.re name, and the character when they are online), what, for how much, when, and the Tebex transaction. A missing purchase is quick to track down.
- Server owners, how to install this build: `install_windows.bat` (the server may be running), then restart, or `ensure cy-discord` and `ensure cy-store` in the console. Run `scripts\discord_setup.bat` again to create #log-store (or set `cy_discord_ch_store` in discord.cfg). In the Tebex panel add `{username}` to the end of the purchase and renewal commands: `cy_store_grant {id} {transaction} {packageId} {purchaseQuantity} {username}` and `cy_store_renew {id} {transaction} {packageId} {username}`.

## 🧍 You can see your character, the Z bar is gone, and the cab is on the road (84)
- **You can see your character now.** The character select was painted over the whole screen, so the character the game puts there was hidden. The cards are in a column on the left, the picked character's file on the right, and the middle of the screen is the game's own: your character stands there. The new-character form and the loading screen look as before. ↑ ↓ (or ← →) choose, Enter plays.
- **No more five-slot bar on Z.** Holding Z no longer draws the five slots at the bottom of the screen. The inventory itself and its number keys work as before.
- **The taxi's cab is on the road.** The VIP Fare's cab stood inside the lobby of the Richman hotel, behind the glass doors. A job's car (and a bike) now waits on the nearest road to its spot; two taxi contracts (the VIP Fare and the wedding party) used that hotel spot. Planes and boats are made where they were.
- **M is the phone, only the phone.** The CnC phone (Clout, the Dark Web) used the same command as the phone, so M could open it instead of the real one, with Clout as its only icon. It is `/cnc_phone` now, or F6 > Phone.
- Server owners, how to install this build: `install_windows.bat` with the server stopped (the character select and the inventory are pages copied into `qb-multicharacter` and `qb-inventory`), then start it. The cab and the phone fixes are in cy-cnc: `update_live.bat` loads those without a restart.

## 🧹 A tidier screen: put the CnC menu where you want it (82)
- **Place the CnC menu (F6).** Press **M** (or click **Move menu** at its foot), then drag it or nudge it with the arrows (Shift for bigger steps). **Enter** keeps the spot, **R** puts it back under the wanted stars, **Esc** cancels. It remembers the spot.
- **A smaller CnC menu.** Narrower, with tighter rows, so it covers less of the game.
- **A quieter chat.** Closed, the chat shows only its last 3 messages; open it (T) to read them all.
- **The list of players** opens with `/playerlist`, the CnC menu or by holding U. An F5 key saved from before no longer opens it on top of the store.
- Server owners, how to install this build: `install_windows.bat` (the server may be running), then restart, or `ensure cy-cnc` / `ensure chat` / `ensure qb-playerlist` in the console.

## 👑 VIP gets real: bank money every month, a tag, a Discord role, a place in the queue (81)
- **Bank money every month.** VIP Bronze comes with **$50,000**, Silver with **$125,000** and Gold with **$300,000**: with the purchase, and again with each monthly renewal. It waits in **F5 > My purchases**, and Claim puts it in the bank of the character you are playing.
- **A VIP tag.** A crown and **VIP** in your tier's colour next to your name, in chat and in the list of players (hold U).
- **Your Discord role.** VIP Bronze, Silver or Gold on the CnC Discord while your VIP runs, for the Discord account linked to your FiveM. It goes when the VIP ends.
- **A place ahead in the queue.** When the server is full you wait on the connecting screen, which says where you are, and get in when a slot frees: Gold first, then Silver, then Bronze, then everyone else.
- **A refund takes it all back**, the bank money too (the bank can go below zero).
- Server owners, how to install this build: `install_windows.bat` (the server may be running), then restart the server. The columns `store_memberships.discord_id` and `role_tier` are created by themselves. Discord roles: create the three roles, put their ids in discord.cfg as `set cy_store_role_bronze "<id>"` (and `_silver`, `_gold`), give the bot **Manage Roles** and move its role above the three. The queue stops cfx's `hardcap` while it runs; `Config.Queue.enabled = false` leaves hardcap alone. The money of each tier is `bank` in `Config.Packages` (cy-store's config.lua; 0 for none). Selling in-game money is against Tebex's FiveM rules.

## 🧭 One menu for everything: the CnC menu on F6 (80)
- **F6 is the CnC menu now.** Your portrait, name, job and ID at the top, then your cash, bank and level, then: **Self / Profile** (what F7 shows), **Actions - General** (phone, sound, gangs, the burner phone, your motel room, the players online), **Actions -** your job (contracts and everything you can do where you stand), **Admin / Tools** for staff, and the **Store** (what F5 opens).
- **It wears your job's colours.** Police blue, EMS orange, Hacker cyan, Taxi yellow, Cleaner teal, crime red, everyone else green, with a portrait and a backdrop to match.
- **Arrows and Enter**, or the mouse. **←** or **Backspace** goes back, **Esc** closes. F5 and F7 still open the store and your profile directly; the police radar is in the police actions too (and still F10).
- Server owners, how to install this build: `install_windows.bat` (the server may be running), then restart, or `ensure cy-cnc` in the console. Which job gets which look is `Config.CncMenu.jobThemes` in cy-cnc's config.lua.

## 🪙 CnCoins, your own plate, and bundles (79)
- **CnCoins.** Buy a pack on the website (1,000 for $4.99, up to 27,000 with a 35% bonus) and spend the coins in **F5**: your balance is at the top of the store, next to Close. What you buy with coins waits in **My purchases** like anything else. A purchase asks once more before it takes the coins.
- **Custom plate (400 CnCoins).** Your own text on one of your cars: 2 to 8 letters, numbers and spaces. Claim it in My purchases, pick the car (it has to be parked in a garage) and type the plate; the trunk, the glovebox and the mud upgrades come along.
- **Bundles.** One purchase, several things: each part shows in My purchases by itself (VIP and coins at once, the rest to claim).
- **Cars** can be sold too, but only add-on cars the server has the right to sell; none are in the store yet.
- Server owners, how to install this build: `install_windows.bat` (the server may be running), then restart the server. The tables `store_wallets` and `store_coin_ledger` and the column `store_entitlements.spec` are created by themselves. Create the coin packs in Tebex (category CnCoins, the same four commands as the VIP packages) and put each package id in `Config.CoinPacks` in cy-store's config.lua. Selling coins is against the Cfx.re licence (§3.1); `Config.Coins.enabled = false` turns all of it off.

## 🛒 The store opens: F5, VIP and My purchases (78)
- **F5 is the store.** VIP Bronze, Silver and Gold, what each gives and what it costs. **Buy** opens the CnC store in your own browser (eagle84.github.io/cnc-website): you log in there with the same Cfx.re account you play with and pay on Tebex. `/store` opens it too.
- **My purchases.** Everything bought with your Cfx.re account, newest first: when, what, and where it is. An item waits there until you **Claim** it on the character you are playing; VIP is on your whole account by itself, and the top of the menu says until when. A purchase reaches the server about a minute after you pay, also while you are offline.
- **Nothing for in-game money, nothing random.** Payments are on Tebex only, and the store sells no money and no loot boxes (the Cfx.re rules).
- **Keys.** F5 was the list of players: hold **U** for it, as before. The police radar moved from F5 to **F10**; F9 stays the panic button.
- Server owners, how to install this build: `install_windows.bat` (the server may be running), then restart the server. It adds `ensure cy-store` (and `exec tebex.cfg` when that file is next to server.cfg) to server.cfg; the tables `store_entitlements`, `store_memberships` and `store_audit` are created by themselves. In the Tebex panel give each package the commands in docs/STORE-DESIGN.md 6.3 in place of the placeholder `cy_store_pending`.

## 📊 Your rank is whatever you're doing right now (77)
- **Every job has its own rank now.** Police, EMS, taxi, hitman, civilian, any career — each tracks its own XP and rank separately. Check your rank bar while you're driving a cab and it's your taxi rank; switch to the hitman job and it's your hitman rank. Nobody's overall numbers from before this build carried over — everyone starts every role at rank 1.
- **Ranks are a real grind now** — about 3x steeper than before. Getting anywhere takes sessions, not minutes.
- **Qualifying for a job (police, hitman) is checked against your civilian rank specifically** — you build the reputation to get in as a civilian, then the job's own rank starts fresh once you're in it.
- **Hitman is a job again.** Taking the contract work means giving up whatever job you had, same as taking any other job — the "keep your other job" trick from build (73) is gone. Everything else from that build stays: contracts held in the database, capped fines, offers in the phone, Backspace to cancel, the mission-waypoint chain.
- **The city level is gone** — your level, rank title, unlocks, and level-up rewards all come from whichever job's rank you currently hold, same as everything else in this build. A promotion in any job now pays the same level-up cash and lists what it unlocked.
- `/myranks` lists every rank you've ever earned, not just the one showing right now.
- Server owners, how to install this build: `install_windows.bat` (the server may be running), then restart, or `ensure cy-xpprogressbar` / `ensure cy-hitman` / `ensure cy-cnc` in the console.

## 🧨 The hitman needs more than a trigger (74)
- **Gear up or get intel before the kill counts.** Once a contract goes active, the hitman gets a short errand first: a weapon dead drop, a tip from an informant, maybe both, picked at random from spots spread across the map. Clear every stop (walk up, press E) in order before the kill is paid out — killing the target early still works, it just doesn't pay. Some caches need a weapon permit; without one the stop still clears, just without the gun.
- **Drag works again.** The star-based police menu had quietly lost its Drag option; a cuffed suspect, on their feet, not already being dragged, can be dragged again.
- **The chase sound moved off X.** It shared the key with hands-up; it's **B** now (still rebindable in GTA's own keybind settings).
- **A taxi left nearby is safe.** Stepping a few steps from your rented cab no longer starts its 15-second repossession clock against you — only actually walking away does.
- **Every taxi office shows up on the map now**, not just the one you started at — muted grey until you've taken the job, full colour once you have.
- **The ATM hack has a direct prompt now.** Stand at a machine with a hack kit (or a hacker's laptop) and a **Press E** prompt starts it right there — F6 and the kit's own Use still work too.
- Server owners, how to install this build: `install_windows.bat` (the server may be running), then restart, or `ensure cy-hitman` / `ensure cy-policejob` / `ensure cy-ambulancejob` / `ensure cy-taxijob` in the console. cy-hitman's phone patch bumps to `v3` automatically on next start.

## 🎯 The hitman gets a licence, and its missions become real (73)
- **A licence, not a job.** Signing up at Hitman Services no longer changes your job. You keep the job you had, your dirty money, the black market and the Dark Web (the hitman job locked you out of all three). Anyone but the police and the medics can sign up now, not only the unemployed. It needs rank 10 and $25,000 on you (cash or bank; it is not charged), and the menu says so. A character who still has the old hitman job is moved to the licence at the next login.
- **Contracts that cannot lose your money.** A hit is held in the database. A contract nobody takes in 30 minutes ends and the price goes back to your bank, and so does one that a restart or a crash cut off. You can cancel your own contract from the phone while nobody has taken it. A hitman who fails pays at most $25,000 and never more than they have (a hitman with less than that used to pay nothing and nothing worked right). A poster who logs out no longer cancels the contract or fines the hitman.
- **Offers are a list in the phone.** The Hitman app lists the contracts you can take with the price, the fine and the time left, and an Accept button: the first click wins (no more racing for Y). The app also shows the contracts you put out. The key to change your mind in the first 5 seconds is **Backspace** (it was X, which is hands up).
- **The Dark Web takes the licence.** Taking a contract there needs rank 10 and the licence; the board is read only without them and says where to get it. The phone's badge counts only what you could take, and the Dark Web's kill window is read from the config (the code said 10 whatever it was).
- **The hitman's missions do what they say.** The Tail: a mark walks the streets and you stay 10 to 80 metres behind, in sight; too close, too far or out of sight for 8 seconds and it is lost; where they stop is where you photograph. Getaway Driver: your client sits beside you and has to be alive and in the car at the docks. Take out the guards: the guards have to be down, a timer is not enough.
- **F4 > Places** lists the three Hitman Services men (Elysian Island docks, Sandy Shores, West Vinewood back alley).
- Server owners, how to install this build: `install_windows.bat` (the server may be running), then restart the server, or `ensure cy-hitman` in the txAdmin console (it patches the phone and restarts qb-phone once). `update_live` plus `/cyupdate` brings in the missions, the Dark Web and the Places list, but not cy-hitman itself. The table `cy_hitman_contracts` is created by itself (oxmysql).

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
