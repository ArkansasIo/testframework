import test from "node:test";
import assert from "node:assert/strict";

test("basic assertion utilities are available in Node's test runtime", () => {
  assert.equal(2 + 2, 4);
  assert.ok(Array.isArray([]));
});
