const {
    defineConfig
} = require('@vue/cli-service')
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                // target: 'https://evosales.azurewebsites.net',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}