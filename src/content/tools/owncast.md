---
name: Owncast
tagline: Your own live streaming channel, under your rules
category: Live Streaming
replaces:
  - name: Twitch
    price: platform sets the rules
  - name: StreamYard
    price: from ~$20/mo
pricing: $0
website: https://owncast.online
github: https://github.com/owncast/owncast
---

## What is it?

Owncast turns any computer into your own live streaming channel. You get a page where people watch and chat in real time, and you broadcast to it from OBS or any standard streaming software — the same workflow streamers already know.

It's famously light: it runs on a cheap rented server, a home machine, even a Raspberry Pi. There's a simple admin page for your stream key, viewer stats and chat moderation.

## What does it replace?

It's the independent option next to Twitch, and it covers what streaming tools like StreamYard (from ~$20/month — check their site) charge for. Big platforms work on a simple trade: they take a cut and set the rules. With Owncast there's no cut, and the rules are yours.

## What does it cost you?

Zero. Unlimited streams, as many viewers as your bandwidth can carry.

## Get it running

The easiest install on this site. Copy the text below, paste it into [Claude](https://claude.ai) (or Claude Code), and if you already use OBS you'll be live in about ten minutes.

```text
Set up a self-hosted Owncast live streaming server on this machine.

1. Install Owncast the official way (https://owncast.online/docs): either run the one-line installer script for the standalone binary, or use Docker with `docker run -d -p 8080:8080 -p 1935:1935 --name owncast owncast/owncast:latest` — prefer Docker if it's available here.
2. Verify the service is up: the public page should load at http://localhost:8080 and the admin dashboard at http://localhost:8080/admin (default stream key/admin password is abc123 — change it immediately and show me how).
3. Walk me through connecting OBS: server rtmp://<this-machine>:1935/live with the stream key, and recommend sane bitrate/encoder settings for this machine's hardware.
4. Do a short local test stream and confirm playback and chat work in the browser.
5. When I'm ready to go public, set up TLS and open/forward ports 8080 and 1935.
```
