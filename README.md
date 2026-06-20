# Portfolio Package — Abdel Rahman Waleed Ahmed

Complete portfolio deliverables for 10 production projects: CV docs, screenshots, website, GitHub READMEs, architecture diagrams, API docs, CI/CD examples, and case studies.

## Quick Links

| Deliverable | Location | Description |
|-------------|----------|-------------|
| **Portfolio Website** | [website/](./website/index.html) | Static showcase site — open in browser |
| **GitHub READMEs** | [github-readmes/](./github-readmes/) | Copy-paste README for each repo |
| **Architecture Diagrams** | [docs/architecture/](./docs/architecture/OVERVIEW.md) | Mermaid system diagrams |
| **API Documentation** | [docs/api/](./docs/api/OVERVIEW.md) | REST endpoint references |
| **CI/CD Examples** | [github-examples/](./github-examples/) | GitHub Actions + Docker Compose |
| **Case Studies** | [case-studies/](./case-studies/) | Business impact write-ups |
| **CV Project Docs** | `01-*` … `10-*` folders | Per-project CV text + screenshots |

## Open Portfolio Website

```powershell
start portfolio-cv/website/index.html
```

Or serve locally:

```powershell
cd portfolio-cv/website
npx --yes serve . -l 3000
```

## Projects

| # | Folder | Project | Stack |
|---|--------|---------|-------|
| 01 | [01-blackhorse/](./01-blackhorse/) | BlackHorse B2B Delivery | Node.js, MongoDB, Socket.IO, Flutter |
| 02 | [02-real-estate-all-stars/](./02-real-estate-all-stars/) | Real Estate All-Stars | Laravel, MySQL, Fawaterak |
| 03 | [03-erp-arabia/](./03-erp-arabia/) | ERP Arabia | Laravel, Vue 3, MongoDB |
| 04 | [04-boatbnb-erp-monorepo/](./04-boatbnb-erp-monorepo/) | BoatBnB + ERP | Laravel 12, Stripe, Vue 3 |
| 05 | [05-easternco-law-erp/](./05-easternco-law-erp/) | Eastern & Co Law ERP | Laravel Modules, MySQL |
| 06 | [06-estshary-admin/](./06-estshary-admin/) | Estshary Admin | Laravel, JWT, OpenAI |
| 07 | [07-estshary-patient-site/](./07-estshary-patient-site/) | Estshary Patient Site | Laravel, Blade |
| 08 | [08-hr-system/](./08-hr-system/) | HR System | Laravel 12, React 19, MongoDB |
| 09 | [09-trc-referrals/](./09-trc-referrals/) | TRC Referrals | Laravel, MySQL, Sanctum |
| 10 | [10-harvest-british-college/](./10-harvest-british-college/) | Harvest British College (SYS) | Laravel, Livewire, Modules, Twilio |

## Publishing to GitHub

1. Create a repo per project (see [github-readmes/README.md](./github-readmes/README.md))
2. Copy the matching README to repo root
3. Copy CI/CD workflows from [github-examples/.github/workflows/](./github-examples/.github/workflows/)
4. Add architecture and API docs to a `docs/` folder
5. Link case study in repo wiki or `docs/CASE_STUDY.md`

## Skills Summary

PHP (Laravel 10/12) · Node.js · Express · Vue 3 · React 19 · MongoDB · MySQL · Redis · Socket.IO · JWT · Sanctum · Firebase · Stripe · Tailwind CSS · Docker · CI/CD

## Screenshot Capture

```powershell
cd portfolio-cv
node capture-portfolio-validated.mjs
```

See [capture-log-validated.json](./capture-log-validated.json) for validation results.

---

**Author:** Abdel Rahman Waleed Ahmed
