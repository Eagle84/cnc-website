// CnC website settings. Public values only: everything here is visible to anyone.
export const CONFIG = {
  serverName: 'Cops & Criminals',
  // cfx.re/join code of the server (txAdmin dashboard, or the server's page on servers.fivem.net). Empty: Play explains how to join.
  joinCode: 'vqqxjrx',
  // Live player count in the header. Off: the Cfx.re server list does not answer browsers on other sites (CORS); needs a proxy first.
  playerCount: false,
  discord: 'https://discord.gg/4hAmtXET8',
  supportEmail: 'onlycyph3r@gmail.com',
  // Tebex Headless public token (Tebex panel > Integrations > API keys). Empty: the store shows store/catalog.json.
  tebexToken: '14u3x-34e7bac67ec8411cc96cb631bfe4b4d2090f2358',
  // The Tebex storefront, used when there is no token, and for payment history.
  tebexStore: 'https://cnc-store.tebex.io',
  tebexPaymentHistory: 'https://checkout.tebex.io/payment-history',
  // The game server's public HTTPS address for My purchases (cy-store's /history), no trailing slash. The server runs
  // behind a Tailscale Funnel. Empty: My purchases only links to the Tebex receipts.
  historyApi: 'https://cnc-server.tail0b6f50.ts.net/cy-store',
  // Release Notes languages offered on the site. Only English for now; add 'he', 'lt', 'ar' to show the language switch again.
  noteLanguages: ['en'],
};
