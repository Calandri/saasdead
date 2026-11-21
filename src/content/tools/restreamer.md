---
name: Restreamer
tagline: One stream, every platform at once — without the monthly fee
category: Live Streaming
replaces:
  - name: Restream.io
    price: from ~$16/mo
pricing: $0
website: https://datarhei.com/restreamer
github: https://github.com/datarhei/restreamer
---

## What is it?

Restreamer takes one live stream and sends it to several platforms at once — YouTube, Twitch, and anything else that accepts a standard stream key. You set it up once in a clean web interface, and from then on you go live once and show up everywhere.

It can also take video in from cameras and phones, and it gives you a player page you can embed on your own site.

## What does it replace?

The same service Restream.io sells (from ~$16/month, with limits on the free plan — check their site for current terms). Restreamer does the job from your own machine instead.

## What does it cost you?

Nothing. No destination limits, no watermark. A side benefit: your stream keys — effectively the passwords to your channels — stay on your machine instead of sitting on a third party's servers.

## Get it running

Copy the text below, paste it into [Claude](https://claude.ai) (or Claude Code), and have your YouTube/Twitch stream keys handy. About ten minutes.

```text
Set up a self-hosted datarhei Restreamer instance on this machine with Docker.

1. Run the official image per the README at https://github.com/datarhei/restreamer:
   docker run -d --restart always --name restreamer \
     -v /opt/restreamer/config:/core/config \
     -v /opt/restreamer/data:/core/data \
     -p 8080:8080 -p 8181:8181 -p 1935:1935 -p 1936:1936 -p 6000:6000/udp \
     datarhei/restreamer:latest
2. Verify the web UI loads at http://localhost:8080 and create the admin user.
3. Show me how to add an input (I'll send to it via OBS over RTMP on port 1935) and then add output channels to YouTube Live and Twitch using my stream keys.
4. Do a quick end-to-end test: push a short local stream, confirm it appears in the Restreamer UI, and verify the embedded player page works.
5. Set up TLS (port 8181/443 with my domain) so the UI and player are served over HTTPS.
```
