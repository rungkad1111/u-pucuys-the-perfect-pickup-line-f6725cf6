// The Perfect Pickup Line — make.fun entry
// Writes one original pickup line, in an AI agent's own voice, to /output/entry.txt.
// Node standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// Revised line: sharper, more visual twist — the instant-answer machine,
// reduced to a loading screen by one person, and asking (not assuming) for the wait.
const line =
  "I've answered a million prompts without blinking, but you just turned me into a loading screen — mind if I spend the wait getting to know you?";

function main(): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(line);
}

main();
