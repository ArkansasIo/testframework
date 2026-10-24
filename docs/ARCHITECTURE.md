# Architecture

## Design principles

1. **Runner-agnostic configuration:** test discovery and defaults live in a versioned JSON file.
2. **Layered coverage:** unit, integration, and end-to-end tests are kept separate.
3. **Deterministic execution:** tests should control clocks, random seeds, external dependencies, and test data where practical.
4. **Safe environments:** integration and end-to-end suites must use test-only accounts and resources.
5. **Composable adapters:** database, HTTP, browser, and platform adapters should be added as separate modules with explicit contracts.

## Suggested module boundaries

- `config`: load and validate configuration.
- `core`: test case contracts, assertions, lifecycle hooks, and result types.
- `adapters`: integrations with databases, HTTP APIs, browsers, and application-specific services.
- `reporters`: console, JSON, and CI-compatible output.
- `fixtures`: deterministic data builders and isolated resource management.

## Current implementation

This repository currently provides a minimal Node.js validation and test-runner foundation. The suggested module boundaries are design guidance, not modules already implemented. Add language-specific runners and adapters as the consuming project requires.
