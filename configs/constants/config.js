let developmentConfig = require('../../env/development')

module.exports = function () {
    switch (process.env.NODE_ENV) {
        case 'development':
            return developmentConfig;

        case 'production':
            return productionConfig;

        case 'staging':
            return stagingConfig;

        default:
            return developmentConfig;

    }
}