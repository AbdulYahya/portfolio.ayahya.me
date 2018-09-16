const fs = require("fs");
fs.writeFileSync("./.env", `API_KEY=${process.env.MEDIA_LIBRARY_PUBLIC_KEY}\n`);
