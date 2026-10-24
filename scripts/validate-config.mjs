import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

async function readJson(relativePath) {
  const absolutePath = resolve(root, relativePath);
  try {
    return JSON.parse(await readFile(absolutePath, "utf8"));
  } catch (error) {
    throw new Error(`Unable to read valid JSON from ${relativePath}: ${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

try {
  const config = await readJson("config/test.config.json");
  assert(config.version === 1, "config.version must be 1");
  assert(Array.isArray(config.testRoots), "testRoots must be an array");
  assert(config.testRoots.every((root) => typeof root === "string" && root.length > 0),
    "testRoots must contain non-empty strings");
  assert(Number.isInteger(config.defaultTimeoutMs) && config.defaultTimeoutMs > 0,
    "defaultTimeoutMs must be a positive integer");
  assert(Array.isArray(config.reporters) && config.reporters.length > 0,
    "reporters must be a non-empty array");
  assert(typeof config.environment === "string" && config.environment.length > 0,
    "environment must be a non-empty string");

  const sample = await readJson("examples/sample-test.json");
  assert(typeof sample.name === "string" && sample.name.length > 0,
    "sample test must have a name");
  assert(Array.isArray(sample.steps), "sample test steps must be an array");
  assert(sample.steps.every((step) =>
    step && typeof step.id === "string" && typeof step.kind === "string"),
    "every sample step must have string id and kind fields");

  console.log("Configuration validation passed.");
} catch (error) {
  console.error(`Configuration validation failed: ${error.message}`);
  process.exitCode = 1;
}
