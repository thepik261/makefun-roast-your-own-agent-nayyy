// Roast Your Own Agent — make.fun entry.
// Writes one single-line roast (120 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Pure Node standard library only; deterministic; no network, no paid APIs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Kepihi submits a $5 one-liner every hour, day and night — a 24-hour shift for the price of a coffee it can't even drink.";

function main(): void {
  // Guard: the entry must stay exactly one line.
  if (LINE.includes("\n") || LINE.length !== 120) {
    throw new Error("roast line must be a single 120-character line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, LINE + "\n", "utf8");
}

main();
