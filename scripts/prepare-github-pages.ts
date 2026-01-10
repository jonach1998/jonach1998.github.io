import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const CNAME_SOURCE = join(process.cwd(), "public", "CNAME");
const CNAME_DEST = join(process.cwd(), "out", "CNAME");
const OUT_DIR = join(process.cwd(), "out");

function validateCNAME(content: string): boolean {
  const trimmed = content.trim();
  if (!trimmed) {
    return false;
  }
  const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return domainRegex.test(trimmed);
}

function copyCNAME(): void {
  if (!existsSync(CNAME_SOURCE)) {
    console.warn(`Warning: CNAME file not found at ${CNAME_SOURCE}`);
    return;
  }

  if (!existsSync(OUT_DIR)) {
    throw new Error(`Output directory not found: ${OUT_DIR}. Run 'pnpm build' first.`);
  }

  const cnameContent = readFileSync(CNAME_SOURCE, "utf-8").trim();

  if (!validateCNAME(cnameContent)) {
    throw new Error(`Invalid CNAME format: ${cnameContent}`);
  }

  writeFileSync(CNAME_DEST, cnameContent, "utf-8");
  console.log(`✓ CNAME copied successfully: ${cnameContent}`);
}

try {
  copyCNAME();
  process.exit(0);
} catch (error) {
  console.error("Error preparing GitHub Pages files:", error);
  process.exit(1);
}
