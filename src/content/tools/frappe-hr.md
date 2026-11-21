---
name: Frappe HR
tagline: Vacation requests, payslips and employee records — without the per-employee bill
category: HR
replaces:
  - name: Factorial
    price: from ~$5/employee/mo
pricing: $0
website: https://frappehr.com
github: https://github.com/frappe/hrms
---

## What is it?

Frappe HR handles the paperwork side of having employees: records and org chart, time-off requests with approval flows, attendance, expense claims, performance reviews, recruitment, and payroll with proper payslips. There's a mobile app, so people can request vacation from the beach they requested it for.

It's made by the team behind ERPNext, which means it's actively maintained and used in production by companies around the world.

## What does it replace?

The same job as HR platforms like Factorial, which start around ~$5 per employee per month (check their site for current pricing). That sounds cheap until you multiply by headcount — and the bill grows with every hire, exactly when you're busiest.

## What does it cost you?

Nothing, at any headcount. One more consideration: salaries, reviews and personal records are about the most sensitive data a company holds. Keeping them on your own infrastructure instead of a third party's is not a bad idea.

## Get it running

Copy the text below, paste it into [Claude](https://claude.ai) (or Claude Code), answer its questions. This one builds a custom image, so give it about fifteen minutes.

```text
Set up a self-hosted Frappe HR (hrms) instance on this machine using Docker.

1. Use the official frappe_docker project: clone https://github.com/frappe/frappe_docker and read its docs on custom apps — hrms (https://github.com/frappe/hrms) is a Frappe app that must be baked into the image.
2. Build a custom image following the "Custom Apps" guide (docker build with APPS_JSON_BASE64 including frappe/hrms), then start the stack with docker compose, setting strong DB and admin passwords in the environment.
3. Create a new site, install the hrms app on it, and verify the Frappe HR login page loads in the browser.
4. Sign in as Administrator, complete the HR setup wizard, and create a sample employee, leave type, and leave application to prove the flow works.
5. Explain how to back up the site data and how to upgrade the hrms app to a newer release.
```
