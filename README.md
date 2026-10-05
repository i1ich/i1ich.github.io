# i1ich.github.io

Personal landing page for **Ilia Doinikov** — Senior Backend Engineer (Java · Spring Boot · PostgreSQL · AWS), remote from Montevideo, Uruguay (UTC-3).

Java since 2020; the last four years full-time building Spring Boot services on AWS for a Caterpillar laboratory platform (Comtek).

🔗 **Live:** https://i1ich.github.io/

## What's here

| Path | Purpose |
|---|---|
| `index.html` | The landing page: experience timeline, "How I work" case studies, independent projects, skills, contact. Self-contained, no build step. Light and dark themes (follows the system setting, with a toggle). |
| `cobro-qr.html` | A live, working copy of the **Cobro QR · Uruguay** tool. Hosted here so the QR codes resolve to a public HTTPS URL (which the tool requires to work on other phones). |
| `photolist/` | Short URL `/photolist` that redirects to the PhotoList LATAM live demo. |

Static site, served directly by GitHub Pages from `main`. No framework, no build — just open `index.html`, or run `python -m http.server 4173` locally.

## Independent projects

- **[PhotoList LATAM](https://github.com/i1ich/photolist-latam)** — serverless photo-to-listing product: a vision LLM identifies the item, one click opens its MercadoLibre resale prices. Java 21 on AWS Lambda, API Gateway, DynamoDB, S3, AWS CDK. [Live demo](https://i1ich.github.io/photolist).
- **LeaseLens** — AWS backend for LLM clause extraction from legal documents, with a golden-set evaluation gate in CI.
- **Cobro QR · Uruguay** — zero-backend tool to get paid without dictating an account number. [Open it](https://i1ich.github.io/cobro-qr.html).

## Contact

[Email](mailto:ilia.doinikov.00@gmail.com) · [LinkedIn](https://www.linkedin.com/in/ilia-doinikov-d) · [GitHub](https://github.com/i1ich)
