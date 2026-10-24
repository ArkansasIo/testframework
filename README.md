# TestFramework

A reusable, language-agnostic testing framework starter for ArkansasIo projects.

## Goals

- Provide a consistent structure for unit, integration, and end-to-end tests.
- Keep test configuration explicit and environment-variable based.
- Support local development and continuous integration.
- Make it easy to add language-specific test runners without coupling the framework to one stack.

## Repository layout

```text
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── config/
│   └── test.config.json
├── docs/
│   ├── ARCHITECTURE.md
│   └── CONTRIBUTING.md
├── examples/
│   └── sample-test.json
├── scripts/
│   └── validate-config.mjs
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .editorconfig
├── .gitignore
├── package.json
└── README.md
```

## Requirements

- Node.js 20 or newer (for the included configuration validation utility).
- A shell for running the npm scripts.

## Quick start

```bash
npm run validate
npm test
```

The starter's validation checks the JSON configuration and sample definition. The test script runs Node's built-in test runner. Add project-specific tests under `tests/` and update `package.json` as needed.

## Configuration

Edit `config/test.config.json` to configure test discovery, timeouts, and reporting. Do not commit secrets. Use environment variables for credentials and deployment-specific values.

## Test layers

- **Unit:** fast tests for isolated functions and classes.
- **Integration:** tests for interactions between modules, databases, queues, and external services (use isolated test resources).
- **End-to-end:** tests of user-visible workflows in a controlled environment.

## Continuous integration

GitHub Actions runs configuration validation and the test suite on pushes and pull requests to `main`.

## Security

Tests must not target systems without authorization. Keep API keys, database credentials, and other secrets in GitHub Actions secrets or local environment variables. Use dedicated test databases rather than production data.

## License

No license has been selected yet. Add a LICENSE file before redistributing the project.
