# Contributing

## Workflow

1. Create a focused branch.
2. Add or update tests with each behavior change.
3. Run `npm run check` locally.
4. Open a pull request describing the change, test evidence, and any configuration changes.

## Test conventions

- Prefer descriptive test names that state the expected behavior.
- Keep unit tests independent from network and production services.
- Reset mutable state between tests.
- Use explicit timeouts and deterministic fixtures.
- Keep secrets out of source control and logs.

## Dependency policy

The starter uses Node.js built-in test utilities and has no third-party runtime dependencies. Add dependencies only when they provide clear value, and pin or lock versions using the chosen package-manager workflow.
