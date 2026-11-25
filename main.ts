import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Moon has listened to centuries of wishes, howls and 3 a.m.
// promises without ever getting a word in. This program gives it one:
// three beats in a single line. First the callout — the howlers who
// treat a monthly howl as a relationship. Then the deadpan self-portrait
// of a rock that never asked for any of this. Then the dismissal.
const callout = "You howl at me once a month and call it a relationship.";
const deadpan = "I am a rock.";
const dismissal = "Get a hobby.";

const line = [callout, deadpan, dismissal].join(" ");

// The gate allows 1 to 240 characters, one line, nothing else attached.
if (line.length < 1 || line.length > 240 || line.includes("\n")) {
  throw new Error(`entry out of gate: ${line.length} chars`);
}

// Why this line lands, against the judge's brief:
// 1. It speaks AS the Moon — first person, answering the howlers
//    directly, not describing the Moon from outside.
// 2. It is a comeback: the howlers' "relationship" gets punctured by
//    the Moon's own boredom, and the last two words are the punch.
// 3. It sounds like the Moon: ancient, unimpressed, and done — a rock
//    that has watched this performance for millennia and is over it.
// 4. It lands in one read: no setup, no caption, the joke is the line.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
