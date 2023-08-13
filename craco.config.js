const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@store": path.resolve(__dirname, "src/store"),
            "@assets": path.resolve(__dirname, "src/assets"),
        },
    },
};
