# Solana DeFi Geoblock Bypass Extension

A Chrome extension that helps you access DeFi platforms from geo-blocked regions.

## Supported Platforms

- **Drift Protocol** (drift.trade)
- **Kamino Finance** (kamino.com)

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked"
4. Select this extension's directory

## How It Works

The extension intercepts geolocation API requests and redirects them to return allowed country codes:
- Drift Protocol: Returns "RU" (Russia)
- Kamino Finance: Returns "MX" (Mexico)

## Files

- `manifest.json` - Extension configuration and permissions
- `rules.json` - Declarative net request rules for redirecting geolocation APIs
