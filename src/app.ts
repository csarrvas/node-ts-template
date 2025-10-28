import { log } from "./utils/logger.js";

const PORT = process.env.PORT || 3000;

function main() {
  log(`🚀 Server running on port ${PORT}`);
}

main();
