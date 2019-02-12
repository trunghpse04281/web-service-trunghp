const config = {
    server: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "AndroidFinalProject",
    user: process.env.DB_USER || "sa",
    password: process.env.DB_PASS || "123456",
    port: process.env.DB_PORT || 1433
}
module.exports = config;