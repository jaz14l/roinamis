# Project rules

- Keep the staged storefront in dedicated preview modules and under `/preview-shop`; the public root and fallback retain the production signup page so store work cannot replace email/SMS capture.
- Preview products do not expose invented prices or accept orders; enable commerce only after confirmed product data and a payment integration are supplied.
- Scope store styling to `.preview-store` using semantic CSS tokens so the existing signup design is unaffected.
- Store optional detail-photo galleries with preview product data and render them only on product pages, so close-ups are not listed as separate garments.