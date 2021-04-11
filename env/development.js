module.exports = {
    mongoURI: "mongodb://localhost:27017/node_demo",
    port: process.env.PORT || 3000,
    jwtSecret: 'secret',
    saltRounds: 10
}