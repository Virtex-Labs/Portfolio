# SEO & GEO Implementation Guide

This document outlines the Search Engine Optimization (SEO) and Generative Engine Optimization (GEO) features implemented in this portfolio. These methods ensure optimal discoverability by both traditional search engines (Google, Bing) and AI agents (LLMs, AI search engines).

## 1. Traditional SEO Implementation

### Meta Tags & Open Graph
**Location:** `src/layouts/PageLayout.astro`
- Dynamic generation of title and meta description.
- Global keywords and author meta tags.
- Comprehensive Open Graph (OG) tags for rich sharing on platforms like Facebook and LinkedIn (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`).
- Twitter Cards for rich media previews on X (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).

### Structured Data (JSON-LD)
**Location:** `src/layouts/PageLayout.astro`
- Implements `Organization` Schema.org structured data.
- Helps search engines understand the brand name, logo, and associated social media links.

### Sitemaps & Technical SEO
- **Sitemap:** Links to `/sitemap-index.xml` generated automatically.
- **Canonical URLs:** Uses the `canonical` tag to prevent duplicate content issues.
- **Preconnections:** Connects to `https://www.google-analytics.com` to optimize script loading.
- **Robots.txt:** Configured in `public/robots.txt` to guide crawler access.
- **Google Site Verification:** Verified using a meta tag for Google Search Console integration.

## 2. Generative Engine Optimization (GEO) & AI Agent Setup

### Markdown Content Negotiation (Cloudflare Worker)
**Location:** `src/worker.ts`
To optimize for LLM scrapers and AI agents that prefer plain text over HTML, a Cloudflare Worker interceptor is used:
- Checks incoming requests for the `Accept: text/markdown` header.
- Converts the Astro-generated HTML response into clean Markdown dynamically.
- Removes unnecessary tags (`<head>`, `<script>`, `<style>`, `<svg>`) and converts structural tags to Markdown headers, lists, links, and paragraphs.
- Appends `x-markdown-tokens` to the headers to provide agents with rough token estimations to manage context windows efficiently.

### Web Model Context Protocol (WebMCP) Support
**Location:** `src/layouts/BaseLayout.astro`
Natively supported in-browser AI context using the Web Model Context Protocol (WebMCP):
- Inject script checks for the `navigator.modelContext` API.
- If an agent's environment supports it, exposes the `get_portfolio_info` tool directly to the agent’s context.
- Enables seamless querying of portfolio details by agents without needing to scrape and parse the DOM.

### Agent Skills Manifest
**Location:** `public/.well-known/agent-skills/index.json`
Exposes an Agent Skills manifest adhering to the `agentskills.io` schema:
- Enables autonomous agents to programmatically discover capabilities available on the site.
- Currently exposes a `portfolio-info` skill pointing to an OpenAPI specification to retrieve public information.

### API Catalog & Authentication for Agents
**Locations:** `src/worker.ts`, `public/auth.md`
- **API Catalog:** The Cloudflare Worker enforces the correct `application/linkset+json` Content-Type for the `/.well-known/api-catalog` endpoint, aiding agents in discovering available APIs.
- **Authentication Guidelines:** The `public/auth.md` file serves as a readable endpoint detailing authentication protocols. It specifies current public access and lays groundwork for OAuth 2.0 registration (`/.well-known/oauth-authorization-server`) for future protected resources.
