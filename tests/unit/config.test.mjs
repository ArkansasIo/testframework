import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("test config has supported version and valid timeout", async () => {
  const config = JSON.parse(
    await readFile(new URL("../../config/test.config.json", import.meta.url), "utf8")
  );
  assert.equal(config.version, 1);
  assert.ok(Number.isInteger(config.defaultTimeoutMs));
  assert.ok(config.defaultTimeoutMs > 0);
  assert.ok(Array.isArray(config.testRoots));
});

test("sample test definition has at least one well-formed step", async () => {
  const sample = JSON.parse(
    await readFile(new URL("../../examples/sample-test.json", import.meta.url), "utf8")
  );
  assert.equal(typeof sample.name, "string");
  assert.ok(Array.isArray(sample.steps));
  for (const step of sample.steps) {
    assert.equal(typeof step.id, "string");
    assert.equal(typeof step.kind, "string");
  }
});
