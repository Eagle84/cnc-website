# What's new in Cops & Criminals

Short and simple. The newest news is first. (Build numbers are in brackets.)

## 🧾 Your purchases on the website (101)
- **My purchases on the CnC website.** Sign in with Cfx.re (top right) and open **My purchases** from the account menu: your VIP and until when, your CnCoins, and every purchase with what is ready to claim, claimed or refunded. The same list as F5, without starting the game. **Receipts (Tebex)** in the same menu has your invoices and cancels a subscription.
- Server owners, how to install this build: `install_windows.bat` (or `scripts/install_linux.sh`), then restart, or `ensure cy-store`. The website asks the game server over HTTPS at `<public address>/cy-store/history` (a Tailscale Funnel to the game port works: `sudo tailscale funnel --bg <port>`), and that address goes in the website's `historyApi` (assets/js/config.js). Only the signed-in Cfx.re account's purchases are sent, after Tebex confirms the sign-in; nothing about characters. `Config.Web.enabled = false` turns it off.

## 📦 More room: storage upgrades, a bigger trunk and a $1.99 coin pack (100)
- **Storage upgrades for CnCoins**, in **F5 > Store**, for the character you are playing, a level at a time:
  - **Motel locker:** 40 slots / 150 kg today, then 60 / 300 kg (300 coins), 80 / 500 kg (500), 100 / 800 kg (800).
  - **Apartment stash:** 100 slots / 2,000 kg today, then 150 / 3,000 kg (500), 200 / 4,000 kg (900).
  - **Personal stash:** your own stash, opened anywhere with **F5** or `/stash`: 30 slots / 200 kg (600), then 50 / 400 kg (600). Not while you are wanted, cuffed, down or in a vehicle.
- **Bigger trunk (350 coins):** half as much again in the trunk of one of your cars. Pick the car in **My purchases**; it stays with the car, also after a new plate.
- **A 400 CnCoins pack for $1.99**, enough for a custom plate.
- Server owners, how to install this build: `install_windows.bat` (or `scripts/install_linux.sh`), then restart the server. The tables `store_upgrades` and `store_trunks` are created by themselves; two small patches make qb-inventory's trunks and qb-apartments' stash ask cy-store for their size. Sizes and prices are `Config.Upgrades` and `Config.Trunk` in cy-store's config.lua. Create the 400-coin pack in Tebex like the other coin packs and put its id in `Config.CoinPacks`.

## 🏗️ Garages and warehouses to rent or buy (99)
- **Twelve buildings on the map, for everyone.** Six garages (for your cars) and six warehouses (with a stash), in three sizes: a small one has one unit, a medium one four and a large one eight. Press **E** at a door: rent a unit for 1, 3 or 7 days, or buy it for good. Rent it longer from the same door, give it up, or sell a bought one back for half the price.
- **Private, and nobody knows whose.** A building looks the same to everybody: the same icon, the same door, the same menu. Nobody is told who has a unit; you alone see yours (your own building is green on your map, and F6 has a waypoint to it). In a big building several players share the walls and each sees only their own unit.
- **A garage unit keeps three of your cars.** Drive a car of yours up to the door and store it (its colours, tuning, fuel and damage are kept), or take one out: it appears on the road at the door, with its keys. Only cars you own, and only cars. **A warehouse unit is a stash** of its own, 80 slots, that only you can open.
- **When a rental runs out** you get 48 hours to renew it before anything is lost; then a warehouse is emptied and a garage's cars go to the depot (a fee to get them back). A bought unit is yours for good. You can hold at most two garage units and two warehouse units, one in a building.
- Server owners: the doors are first guesses at real places. The game moves each door to the nearest place a person can stand and a car to the nearest road, but if one is in a bad place stand where it belongs and type `/cncpoint prop_<name>` (for example `prop_pillbox`; `/cncpoint` lists them). `/cncprop` says how many units are taken in each building (never whose) and `/cncprop free <building> <unit>` lets one go. How to install this build: `update_live.bat` or `./scripts/update_live.sh`, then `/cyupdate` (it is all in cy-cnc; the new table `cnc_property` is made on its own).

## 🏧 Ten more cash machines, in the stores and the banks (98)
- **Ten new ATMs.** The city had its machines on the streets and none where people actually are. Now there is one in four 24/7 stores (Innocence Blvd, Vinewood, Sandy Shores, Harmony), two LTD stores (Grove Street, Little Seoul) and four Fleeca bank lobbies (Legion Square, Hawick Ave, Burton, Rockford Hills). Press **E** at one: deposit, withdraw, send money, and the hack for whoever may do it: they are the same as every other machine. Each has a small green ATM icon on the map.
- **Always where you can reach them.** The game puts each machine on the customer's side of the counter, in the same room as the clerk or the lobby, and never inside a wall or a shelf; where there is no clear place it does not appear. Admins: if one is in the wrong spot, stand where it belongs, face the way its screen should look and type `/cncpoint atm_<name>` (for example `atm_legion`); `/cncpoint` lists the names.
- Server owners, how to install this build: `update_live.bat` or `./scripts/update_live.sh`, then `/cyupdate` (it is all in cy-cnc).

## 👥 People in the jobs, and a line that says what to do (97)
- **The taxi City Tour has tourists.** It was three empty circles on the map. Now it is three real tourists: one waits at the hotel, you walk up and ask them to come, they get into the back of your cab, you drive them to the lookout, let them out and see them off; the next waits where the last one left, then the third. Every other taxi fare is a person too (the VIP, the flight crew, the night out, the patient, the wedding party, the long fare, the late flight): they wait for **your own cab**, not a marked one. They only ride in a taxi: in another car the card says to bring your taxi and the trip does not count.
- **Every job has its people.** Bus stops have passengers (and school kids), a protest has a crowd and someone to interview, a breakdown has its driver, a delivery has its customer, a deal has its buyer, the reporter's source, the celebrity, the witness of a crash, the inspector, the owner who signs, the people of a survey are all standing there, calm, in the pose that fits them. They are only for your crew's eyes and go when the step ends.
- **Every step says what to do.** Under the step on your job card there is now one short line: where to go, to stay in the marker, to walk up to the tourist and press E. A step with something special says it in its own words.
- Server owners, how to install this build: `update_live.bat` or `./scripts/update_live.sh`, then `/cyupdate` (everything of this build is in cy-cnc).

## 🛡️ A safer chat, and taxi, police and EMS cars that look the part (96)
- **The chat takes any symbol and no longer breaks.** Code and symbols (quotes, `<script>`, `%`, `{ }`, `;`, backticks, SQL) are only text: shown as you typed them, never run, never reaching the database (every query of the server is a template with placeholders, and a new test stops a query built from text). A long message in Hebrew or Arabic used to be cut in the middle of a letter, which the chat page could not take; the limit now counts letters, not bytes. Bytes that are not text turn into `?`, and hidden characters (the right-to-left override that writes a name backwards, zero-width spaces) are removed. A command with a `;` is not run (it would run two). `/ooc` and `/me` are cleaned and limited (one every 2 seconds). If you still see an exception, copy the red line from F8.
- **Taxi cabs are yellow, with the roof sign, whichever way you got them.** A cab you buy is saved with its paint and its sign: it was saved with none, so it came out of the garage in the model's own colour. Rented, signed out or a contract's cab: the first time a taxi driver drives it, it is made the yellow cab. (Only the Vapid Taxi has a roof sign: the other cabs are yellow without one.)
- **Police and EMS cars: the same.** A car bought in the police or EMS shop is saved with its colours, its livery and its lights, and a car bought without choosing a colour has the shop's colours for its model. The cars of the stations' and hospitals' stands come out in the job's colours (police black, ambulances in the EMS colours). The first time an officer or a medic drives one of the job's cars, its lights on top are switched on.
- Server owners, how to install this build: `update_live.bat` or `./scripts/update_live.sh`, then `/cyupdate` (cy-cnc: the lights and the yellow when a player of the job drives). The chat, cy-core, cy-taxijob, cy-policejob, cy-ambulancejob, cy-jobvehicles and cy-discord are not restarted by `/cyupdate`: they load at the next server restart.

## 🚕 Taxi offices: small yellow cabs for civilians, none for taxi drivers (95)
- **A taxi driver no longer sees the taxi offices on the map.** They are the taxi: they do not need to be shown where it is.
- **Everyone else sees them as a small yellow cab,** as small as the other icons (build 94 made them bigger, and build 93 lit them for the drivers). It is how a civilian finds where to take the job.
- Server owners, how to install this build: `update_live.bat` or `./scripts/update_live.sh`, then `/cyupdate`. The cy-cnc side (the `Config.Blips.tidy` rule for sprite 198, now with `hideFor = { 'taxi' }`) shows at once. cy-taxijob (1.0.51) is not restarted by `/cyupdate`: it loads at the next server restart, and until then the cy-cnc rule does the same.

## 🚕 The taxi offices are the yellow cab on every map (94)
- **Every taxi office is the yellow cab on your map, whatever your job is.** A player without the job saw the eight offices as small muted white dots, lost among the other icons. Now they are the yellow taxi icon for everyone, so a new player sees where to take the job; a driver's are bigger, with a yellow disc around them (build 93).
- Server owners, how to install this build: `update_live.bat` or `./scripts/update_live.sh`, then `/cyupdate`. The cy-cnc side (a `Config.Blips.tidy` rule for sprite 198) shows at once. cy-taxijob (1.0.50, which draws them yellow from the start) is not restarted by `/cyupdate`: it loads at the next server restart, and until then the cy-cnc rule does the same.

## 🗺️ Your job's places stand out on the map (93)
- **The places of your job are bigger, with a coloured disc around them.** The map is ninety-odd small icons, and the taxi offices were small yellow dots among them. Now the places of the job you work stand out: the **police stations** (blue), the **hospitals** (red), the **taxi offices** (yellow), the **tow yard** (orange), the **mechanic garages**, the **bus depot**, the **garbage dump**, the **trucker docks** and the **news studio**. The icon is bigger and a soft disc in the job's colour sits around it, on the big map and the minimap. Everyone else's icons stay as they were, and when you change job the old job's places go back to normal. A job's depot stays on every map (it is how you join).
- Server owners: `Config.Blips.mine` in cy-cnc's `config.lua` sets the size, the disc (`ring`, or `ring = false`), each job's colour and the sprites it looks for, and `places` adds more places for a job (for example the Davis police station). `/blips` (F8) lists the sprites on your map and how many of them are your job's. A script that draws another sprite for its place (a mechanic shop) is added to the job's `sprites`.
- Server owners, how to install this build: `update_live.bat` or `./scripts/update_live.sh`, then `/cyupdate` (cy-cnc restarts live; a mission in progress ends).

## 🚕 Taxi fares in a taxi, cabs with keys, people on the ground, /tpm on the street (92)
- **The mission cab is open and you have its keys.** The cab (and every car a contract sends you to take) appears unlocked and everyone in the crew gets its keys, so the game no longer asks you to search for keys with H. A car you are meant to steal stays locked.
- **A taxi passenger rides in a taxi.** The Stranded Tourist is picked up and taken to the hotel in a taxi (the taxi job's cars: Vapid Taxi, Dynasty, Cypher, Eudora, Ingot, Blista). On foot you see "Come in your taxi to pick them up." and the [E] stays locked; from the car it works within 5 m of them.
- **People and packages on the ground.** The tourist, the packages and the people you escort wait for the ground to load and are then put on it, not left in the air or under the street. A stop you walk or drive to ("Get to the festival", "Drop everyone at the pier") has a ring on the ground when you are near. [E] to take someone along says "Step out of the car first." when you sit in a car.
- **/tpm lands on the street, not on a roof.** A waypoint over a building put you on its roof. Now, when the spot is a roof and a main road is within 150 m, you land on the street: the pavement on foot, the road in a car. A hill, a bridge or a street over a tunnel lands where it did.
- Server owners, how to install this build: `update_live.bat` or `./scripts/update_live.sh`, then `/cyupdate` (cy-cnc restarts live; a mission in progress ends). The /tpm change is a patch in `qb-core`: the installer puts it in, and qb-core never restarts live, so it loads at the next server restart.

## 🔌 Live updates find the server on any port, and the VIP Fare spots (91)
- **`/cyupdate` finds a server that listens on another port.** The update script looked for the server on the port written in `server.cfg`. A server started with another port, or one whose `server.cfg` was changed after it started, looked stopped: the files were installed, but no update was waiting, and `/cyupdate` said so. Now the installer also looks for a running FXServer process, and `-Port <n>` (Linux: `--port <n>`, or the `CY_PORT` variable) names the port by hand. (A server started from a folder that has since been deleted still needs a restart: it cannot read the new files.)
- **VIP Fare spots.** Two of its pick-up places and its LSIA drop-off were moved to places checked in the game.
- Server owners, how to install this build: `update_live.bat` or `./scripts/update_live.sh`, then `/cyupdate` (cy-cnc restarts live; a mission in progress ends).

## 🚕 Taxi contracts, on the right spots (90)
- **Four taxi contracts start and end where they should.** The places were checked in the game and moved: **Night Out** (the club, and the Del Perro pier at the end), **Long Fare** and **Late Flight** (the LSIA front door, the Vinewood hotel at the end of Late Flight) and **Festival Shuttle** (Mirror Park, and it now ends at the Chumash pier). The Hospital Run keeps its old pick-up: a cab that appears next to the hospital would finish the fare the moment it showed up.
- Server owners, how to install this build: only cy-cnc's `config.lua` changed. `update_live.bat`, then `/cyupdate` (cy-cnc restarts live; a mission in progress ends).

## 🛡️ The server list shows the CnC logo (89)
- **The server list shows the CnC logo.** Some servers still showed the plain black "CYPHER" picture, or the first CnC square, in the server list and on the "last connected server" card: the installer left any 96x96 icon it found alone. Now it knows those two earlier logos of ours and puts the current CnC shield in their place (the old file stays in the backup). An icon you made yourself is still left alone; `-ReplaceIcon` swaps that one too.
- Server owners, how to install this build: `install_windows.bat` or `update_live.bat` (the server may be running). The server reads its icon when it starts, so restart it once; the list and the card can take a few minutes to follow.

## 🚍 Real vehicles for Bus, Garbage and Tow (88)
- **Sign out the right vehicle first.** Every Tow contract now starts by signing out a tow truck from the impound lot; every Garbage contract starts by signing out a garbage truck from the dump; and five of the six Bus contracts start by signing out a bus from the depot. Driving any random car (or nothing at all) used to be enough for several of these - not anymore.
- **Two jobs stay on foot on purpose.** Bus's Safety Check inspects three parked buses, not one you drive; a couple of Garbage/Tow debris-clearing jobs are genuinely foot-only work, so those were left as they were.
- Server owners, how to install this build: a cy-cnc-only content change (the F6 contracts in config.lua). `update_live.bat` covers it; no restart needed beyond the usual resource restart.

## 🎭 Your character on a rooftop, Resign from job, and the taxi map (87)
- **The character select shows your character.** The game's own view behind the select was whatever qb-multicharacter had set up, and on this server that was a metro platform with nobody on it. Now the camera goes to a rooftop at night and your character stands there, dressed as you left them. The first character is picked for you when the list opens; ↑ ↓ change it. If the scene cannot be built the painted night covers the whole screen, as before.
- **Resign from job, for every job.** F6 > Actions - your job > **Resign from job** (it asks first). Police, medics, taxi drivers, the careers: you are a civilian again and the kit your job handed out goes back; the EMS get back what they gave up at the desk. Not while in jail, down or cuffed.
- **Taxi drivers see the taxi offices in yellow.** The icons were drawn while you were still connecting, before your job was known, so a driver kept the muted white ones until the job changed. They are drawn again when your character loads.
- **The server-list icon.** A minute after the start the server says in the console, and in the Discord admin log, whether FiveM has the server's icon. Without one the list and the "last connected server" card show a plain gradient square. The installer now adds `load_server_icon myLogo.png` to server.cfg when the line is missing (and the 96x96 `myLogo.png` next to it, as before).
- Server owners, how to install this build: `install_windows.bat` with the server stopped (the character select is a page copied into `qb-multicharacter`, and server.cfg may get its icon line), then start it. The Resign row, the taxi icons and the preview scene are in cy-cnc and cy-taxijob, and the EMS leaving is in cy-ambulancejob. The scene's place and look are `Config.CharSelect` in cy-cnc's config.lua (`Config.Modules.charselect = false` puts the old way back), `Config.Modules.resign = false` hides the row.

## 🏧 Cash machines with a menu, a minute of jail a star, and tickets for admins (86)
- **Press E at a cash machine.** The ones inside the shops too. A small menu opens: deposit cash, withdraw from your bank, or send a little money to another player by their ID. No debit card and no PIN. It is for small amounts: $5,000 at once, $2,000 to another player, $15,000 a day out of the machines; the bank counter has no such limits.
- **The hack is in the same menu.** The police see the bank only. Everyone else also sees "Hack the ATM": ready when you carry the ATM Hack Kit (a Hacker's laptop works too), otherwise greyed out and saying which device you need.
- **Short sentences.** Jail is one minute for each wanted star you had, from 1 to 5, whatever the charges, so nobody is taken out of the game for an hour. An officer can no longer type a sentence of years either.
- **A ceiling on fines.** A person with no wanted stars can be fined $1,000 at the most, then $5,000 for each star, never over $25,000. (An officer could fine a billion dollars.) The Bill menu and `/fine` follow the same ceiling.
- **Admins: a tickets screen.** F6 > Admin / Tools > Tickets lists every open ticket, the ones nobody has first. Open one to take it, give it to any member of staff in the city, answer the player or close it. Discord follows: the ticket's card says who has it and its thread pings them. A ticket opened in the game was already a card in Discord, and in the thread `!assign @name` does the same from Discord.
- Server owners, how to install this build: `install_windows.bat` (the server may be running; it puts three patches into `qb-policejob` for the bill, fine and jail ceilings), then restart `qb-policejob` or the server once. The cash machine, the sentences and the tickets screen are in cy-cnc, cy-policejob and cy-discord, which `update_live.bat` loads without a restart, but the three patches need the installer. The tickets screen needs cy-discord; its table gets two new columns by itself. The numbers are `Config.Atm` and `Config.Justice` in cy-cnc's config.lua.

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
