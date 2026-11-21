---
name: PeerTube
tagline: Your own video site. Upload, share, stream. No monthly fee.
category: Video Hosting
replaces:
  - name: Vimeo
    price: from ~$12/mo
  - name: Wistia
    price: from ~$19/mo
pricing: $0
website: https://joinpeertube.org
github: https://github.com/Chocobozzz/PeerTube
---

## What is it?

PeerTube is your own video site. Upload a video and it converts it for smooth streaming on any connection, organizes everything into channels, and gives you links and embeds to share. No ads, no recommendation algorithm, no upload quota set by somebody else's business plan.

It's built by a French non-profit and used by schools, media outlets and public institutions. One neat trick: when many people watch the same video, viewers share pieces of it between them, so your server stays calm under load.

## What does it replace?

It does what most people pay Vimeo (from ~$12/month) or Wistia (from ~$19/month, climbing quickly) for — check their sites for current pricing. Those are polished products; the question is whether you want to keep renting shelf space for your own videos.

## What does it cost you?

Nothing. The videos, the player and the audience are yours, and the library doesn't vanish if you stop paying a bill — because there is no bill.

## Get it running

Copy the text below, paste it into [Claude](https://claude.ai) (or Claude Code), answer its questions — mostly about your domain. About fifteen minutes, video conversion included.

```text
Set up a self-hosted PeerTube instance on this machine using Docker Compose.

1. Use the official Docker support from the PeerTube repo: fetch the files in support/docker-compose (docker-compose.yml plus the .env example) from https://github.com/Chocobozzz/PeerTube — follow the production guide at https://docs.joinpeertube.org/install/docker.
2. Configure the .env: set my domain as PEERTUBE_WEBSERVER_HOSTNAME, set a strong Postgres password, and fill in the admin email.
3. Start the stack with `docker compose up -d` and verify the peertube, postgres, redis, and webserver containers are healthy.
4. Retrieve the auto-generated root password from the container logs, log in, change it immediately, and upload a small test video to confirm transcoding works.
5. Set up TLS for my domain (the compose stack supports Let's Encrypt via env vars) and enable SMTP so notifications and password resets work.
```
