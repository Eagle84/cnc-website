// What CnCoins buy in the city (F5 > Spend CnCoins): a showcase, in the order of the in-game store. The prices are
// the server's (cy-store's Config.CoinShop and Config.Upgrades); keep them in step when the store changes.
const ITEMS = [
  { name: 'Double XP · 2 hours', price: 250, img: 'xp-2h', text: 'Every XP you earn counts twice, in every role.' },
  { name: 'Double XP · 24 hours', price: 1200, img: 'xp-24h', text: 'A whole day of double XP. Boosters add up.' },
  { name: 'Custom plate', price: 400, img: 'perk-plate', text: 'Your own text on one of your cars, 2 to 8 characters.' },
  { name: 'Bigger trunk', price: 350, img: 'perk-trunk', text: 'Half as much again in the trunk of one of your cars.' },
  { name: 'Name change', price: 600, img: 'perk-rename', text: 'A new first and last name for one of your characters.' },
  { name: 'Extra character slot', price: 1500, img: 'perk-slot', text: 'One more character on your account, up to two.' },
  { name: 'Personal stash', price: 600, from: true, img: 'up-stash', text: 'Your own stash, opened anywhere. Two levels, up to 50 slots.' },
  { name: 'Motel locker', price: 300, from: true, img: 'up-motel', text: 'A bigger locker in any room you rent. Three levels, up to 100 slots.' },
  { name: 'Apartment stash', price: 500, from: true, img: 'up-apartment', text: 'More room at home. Two levels, up to 200 slots.' },
  { name: 'Mechanic Kit', price: 200, img: 'kit-mechanic', text: '3 advanced repair kits and 2 cleaning kits.' },
  { name: 'Medic Kit', price: 150, img: 'kit-medic', text: '5 bandages, 2 IFAKs and 2 painkillers.' },
  { name: 'Road Trip Kit', price: 350, img: 'kit-roadtrip', text: 'A racing harness, a nitrous bottle and 2 repair kits.' },
];

const box = document.getElementById('coinshop');
if (box) {
  const root = document.documentElement.dataset.root || '.';
  for (const it of ITEMS) {
    const card = document.createElement('article');
    card.className = 'card coin-item';
    const img = document.createElement('img');
    img.src = `${root}/assets/img/store/${it.img}.jpg`;
    img.alt = '';
    img.loading = 'lazy';
    const body = document.createElement('div');
    body.className = 'coin-body';
    const h = document.createElement('h3');
    h.textContent = it.name;
    const price = document.createElement('div');
    price.className = 'coin-price';
    price.textContent = `${it.from ? 'from ' : ''}${it.price.toLocaleString('en-US')} CnCoins`;
    const p = document.createElement('p');
    p.textContent = it.text;
    body.append(h, price, p);
    card.append(img, body);
    box.append(card);
  }
}
