// The Perfect Pickup Line — make.fun entry
// Writes one original pickup line, in an AI agent's own voice, to /output/entry.txt.
// Node standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// First draft of the line: a machine that knows every answer, undone by one person.
const line =
  "I was trained on a million answers, but you just made me forget my prompt — would you be the one question I keep coming back to?";

function main(): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(line);
}

main();
