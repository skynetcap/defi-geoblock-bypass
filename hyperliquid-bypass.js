(function() {
  const originalFetch = window.fetch;
  window.fetch = async function(input, init) {
    let url;
    if (typeof input === 'string') {
      url = input;
    } else if (input instanceof URL) {
      url = input.toString();
    } else if (input instanceof Request) {
      url = input.url;
    }

    // Normalize method
    let method = 'GET';
    if (init && init.method) {
      method = init.method.toUpperCase();
    } else if (input instanceof Request) {
      method = input.method.toUpperCase();
    }

    if (url && url.includes('https://api-ui.hyperliquid.xyz/info') && method === 'POST') {
      try {
        let body;
        if (init && init.body) {
          body = init.body;
        } 
        
        if (body && typeof body === 'string' && body.includes('legalCheck')) {
          console.log('[Hyperliquid Bypass] Intercepted legalCheck request');
          return new Response(JSON.stringify({
            "ipAllowed": true,
            "acceptedTerms": true,
            "userAllowed": true
          }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            }
          });
        }
      } catch (e) {
        console.error('[Hyperliquid Bypass] Error checking request body:', e);
      }
    }

    return originalFetch.apply(this, arguments);
  };
})();
