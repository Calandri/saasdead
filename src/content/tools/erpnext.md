---
name: ERPNext
tagline: One free system to run the whole company — customers, invoices, stock, projects
category: CRM / ERP
replaces:
  - name: Salesforce
    price: from ~$25/user/mo
  - name: HubSpot
    price: from ~$15/seat/mo
pricing: $0
website: https://erpnext.com
github: https://github.com/frappe/erpnext
---

## What is it?

ERPNext tries to be the only login a small company needs: customers and deals, quotes and invoices, accounting, stock, projects, HR. It's open source, it's been around for years, and thousands of businesses run their operations on it.

The nice part is that the pieces connect. A quote becomes an invoice, the invoice lands in your books, the sale updates your stock. No exporting CSVs between five subscriptions that barely talk to each other.

## What does it replace?

The CRM part covers what most teams use Salesforce (from ~$25/user/month) or HubSpot (from ~$15/seat/month) for — check their sites for current pricing. On top of that, it tends to absorb a few other subscriptions you'd otherwise pay separately: invoicing, inventory, project tracking.

## What does it cost you?

Nothing, whether you have 3 users or 300. The software is free; the only cost is the machine it runs on.

## Get it running

Copy the text below, paste it into [Claude](https://claude.ai) (or Claude Code), answer its questions. This is the heaviest install on the site — give it fifteen minutes and make coffee.

```text
Set up a self-hosted ERPNext instance on this machine using Docker.

1. Clone https://github.com/frappe/frappe_docker — the official Docker setup for Frappe/ERPNext.
2. Follow its README: copy example.env to .env, set strong passwords for the DB and the ERPNext administrator account, then run `docker compose -f pwd.yml up -d`.
3. Wait for the `create-site` container to finish provisioning, then verify http://localhost:8080 loads the ERPNext login page and sign in as Administrator.
4. Enable the CRM module and show me where leads, opportunities, and the sales pipeline live.
5. Explain the routine for upgrading versions and taking database/backups of the site's volume data.
```
