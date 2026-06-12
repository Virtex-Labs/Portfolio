# Generative Engine Optimization (GEO) & AI Agent Setup

This document outlines the Generative Engine Optimization (GEO) and AI Agent discoverability features implemented in this portfolio. These features ensure that Large Language Models (LLMs), AI search engines, and autonomous agents can easily understand, parse, and interact with the site.

## 1. Markdown Content Negotiation (Cloudflare Worker)
**Location:** `src/worker.ts`

To optimize for LLM scrapers and AI agents that prefer plain text over HTML, a Cloudflare Worker interceptor is used. 
- It checks incoming requests for the `Accept: text/markdown` header. 
- If present, the worker takes the generated HTML response from Astro and dynamically converts it into clean Markdown on-the-fly.
- It removes unnecessary tags like `<head>`, `<script>`, `<style>`, and `<svg>`, and converts tags like headers, links, paragraphs, and list items into standard Markdown syntax.
- The response is served with the `Content-Type: text/markdown` header along with a rough token approximation in the `x-markdown-tokens` header, allowing LLMs to manage context windows efficiently.

## 2. Web Model Context Protocol (WebMCP) Support
**Location:** `src/layouts/BaseLayout.astro`

The portfolio implements natively supported in-browser AI context using the Web Model Context Protocol (WebMCP).
- A script injected into the `<head>` checks for the `navigator.modelContext` API.
- If an agent's environment supports it, the site provides a `get_portfolio_info` tool directly to the agent's context.
- This allows agents to seamlessly query basic information about Virtex Labs without needing to scrape and parse the DOM.

## 3. Agent Skills Manifest
**Location:** `public/.well-known/agent-skills/index.json`

The portfolio exposes an Agent Skills manifest adhering to the `agentskills.io` schema.
- It allows autonomous agents to programmatically discover capabilities available on the site.
- Currently, it exposes a `portfolio-info` skill, pointing agents to an OpenAPI specification to retrieve public portfolio information and service details.

## 4. API Catalog & Authentication for Agents
**Locations:** `src/worker.ts`, `public/auth.md`

- **API Catalog:** The Cloudflare Worker enforces the correct `application/linkset+json` Content-Type for the `/.well-known/api-catalog` endpoint. This is standard practice to help agents discover available APIs on the domain.
- **Authentication Guidelines:** The `public/auth.md` file serves as a readable endpoint for agents detailing authentication protocols. It specifies that the site is currently public, but also sets the groundwork for standard OAuth 2.0 registration (`/.well-known/oauth-authorization-server`) should protected resources be added in the future.

## 5. AI Content Discovery
**Locations:** `public/robots.txt`, `public/llms.txt`

- **Robots Directives:** The `robots.txt` file is optimized to explicitly allow the 13 major AI web crawlers (such as GPTBot, ClaudeBot, and Google-Extended) to ensure full indexability by foundational models.
- **LLM Index:** A dedicated `llms.txt` file sits at the root domain to act as a markdown-friendly directory, giving Large Language Models immediate context about the site's structure and core links without requiring them to parse the DOM.

## 6. Structured Data (AI Search Signals)
**Location:** `src/layouts/BaseLayout.astro`

- **JSON-LD Entity Mapping:** A comprehensive `@graph` structured data payload is injected into the `<head>`. It maps the portfolio to `Organization`, `WebSite`, and `WebPage` entities.
- **Entity Linking & Freshness:** Using `@id` cross-referencing, AI systems can reliably construct knowledge graphs about Virtex Labs. The inclusion of `dateModified` ensures that AI engines factor in content freshness algorithms when ranking.

## 7. Advanced Agent Protocols
**Locations:** `src/components/Contact.astro`, `public/.well-known/*`, `public/openapi.json`

- **WebMCP Declarative Forms:** The contact form uses `tool-name` and `tool-description` HTML attributes, turning standard web forms into natively invokable tools for agents browsing the site.
- **Discovery Manifests:** The site supports modern AI orchestration protocols through well-known manifests:
  - `webmcp.json`: WebMCP tool discovery.
  - `agent.json`: Google A2A (Agent-to-Agent) Agent Card.
  - `mcp.json`: Model Context Protocol Server discovery.
  - `agents.json`: AI Agent directory routing.
- **OpenAPI Integration:** A programmatic `openapi.json` spec defines the `/api/contact` endpoint for agents to process automated inquiries.

## 8. Security & Trust for Agents
**Location:** `public/_headers`

- **Content Integrity:** AI agents rely on domain trust. The site implements a strict `Content-Security-Policy` alongside `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, and `Referrer-Policy` headers. This establishes a mathematically verifiable foundation of trust and prevents tampering, making AI systems more likely to surface and interact with the content.
