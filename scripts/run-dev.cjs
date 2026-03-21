/**
 * Runs ts-node-dev for a single design-pattern example folder.
 * Invoked from repo root: npm run dev -- <example-folder>
 *
 * The working directory is set to that folder (relative imports). The shared
 * repo-root tsconfig.json is passed explicitly via --project.
 */

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// First arg after `npm run dev --` (argv[0]=node, argv[1]=this script)
const folderArg = process.argv[2];
if (!folderArg) {
  console.error("Usage: npm run dev -- <example-folder>");
  console.error("Example: npm run dev -- 1-strategy");
  process.exit(1);
}

const repoRoot = path.join(__dirname, "..");
// Normalize and take basename so `./1-strategy` or `1-strategy/` still work
const folder = path.basename(path.normalize(folderArg));
const exampleDir = path.join(repoRoot, folder);
const indexPath = path.join(exampleDir, "src", "index.ts");

if (!fs.existsSync(exampleDir)) {
  console.error(`Folder not found: ${folder}`);
  process.exit(1);
}
if (!fs.existsSync(indexPath)) {
  console.error(`No src/index.ts in: ${folder}`);
  process.exit(1);
}

// Run the CLI via Node so paths with spaces (and Windows .cmd shims) are not an issue
const tsNodeDevCli = path.join(
  repoRoot,
  "node_modules",
  "ts-node-dev",
  "lib",
  "bin.js"
);
const tsconfigPath = path.join(repoRoot, "tsconfig.json");
// Path to the executable that is running *this* script (usually node.exe); not a PATH lookup.
const nodeExecutable = process.execPath;
// Equivalent to: node <ts-node-dev>/lib/bin.js --project <tsconfig> src/index.ts
const result = spawnSync(
  nodeExecutable,
  [
    tsNodeDevCli, // ts-node-dev entry script (run as the first script argument to Node)
    "--project", // ts-node / compiler: which tsconfig.json to use
    tsconfigPath, // repo-root shared config (absolute path; safe if folders contain spaces)
    "src/index.ts", // entry file, resolved relative to cwd below
  ],
  {
    cwd: exampleDir, // example folder so imports resolve like a per-folder project
    stdio: "inherit", // child uses the same stdin/stdout/stderr as this process
    shell: false, // argv passed as a real array (no shell quoting issues on Windows)
  }
);

process.exit(result.status ?? 1);
