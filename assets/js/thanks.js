// Thanks page: the purchase went through, so the cart is done.
try { localStorage.removeItem('cnc-cart'); localStorage.removeItem('cnc-basket'); } catch { /* nothing stored */ }
