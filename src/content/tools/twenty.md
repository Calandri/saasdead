---
name: Twenty
tagline: A CRM that doesn't feel like homework
category: CRM
replaces:
  - name: Salesforce
    price: from ~$25/user/mo
  - name: HubSpot
    price: from ~$15/seat/mo
  - name: Pipedrive
    price: from ~$14/user/mo
pricing: $0
website: https://twenty.com
github: https://github.com/twentyhq/twenty
---

## What is it?

Twenty is a CRM: the place where a company keeps track of customers, deals and conversations. It's open source, it looks like software from this decade, and it covers what people actually use day to day — contacts, companies, a visual pipeline, notes, tasks, email sync.

Your data sits in a normal Postgres database on your own machine. You can query it, back it up, or pack it up and leave whenever you want. Nobody can raise the rent on it.

## What does it replace?

For most small and mid-size teams, it covers the same ground as Salesforce (from ~$25/user/month), HubSpot (from ~$15/seat/month) or Pipedrive (from ~$14/user/month). Vendors adjust pricing often, so check their sites — but ten people on any of those adds up to a few hundred dollars a month, every month.

## What does it cost you?

Zero. No per-user pricing, no record limits, no tiers. You pay for the machine it runs on: your own computer, or a small rented server for a few dollars a month.

## Get it running

You don't need to understand the text below. Copy it, paste it into [Claude](https://claude.ai) (or Claude Code), and answer a few questions — mostly where to install and which passwords to use. About ten minutes later you have a CRM.

```text
Set up a self-hosted Twenty CRM on this machine using Docker Compose.

1. Follow the official self-hosting docs at https://twenty.com/developers/local-setup — use the docker compose setup from the twentyhq/twenty repo (packages/twenty-docker).
2. Create the .env file from the provided example, generating strong random values for every secret: the Postgres password, APP_SECRET, and the access, refresh, login, and file tokens.
3. Start the stack with `docker compose up -d` and confirm the server and worker containers stay healthy.
4. Verify the app responds at http://localhost:3000, then walk me through creating the first workspace and admin user.
5. When I'm ready to put it on a domain, set up a reverse proxy with TLS and update the server URL config accordingly.
```
