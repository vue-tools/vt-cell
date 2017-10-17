var path = require('path')
var px2rem = require('postcss-px2rem')

module.exports = {
    port: 9999,
    webpack: {
        resolve: {
            alias: {
                'vt-cell': path.join(__dirname, 'dist')
            }
        },
        vue: {
            postcss: [
                px2rem({ remUnit: 75 })
            ]
        }
    },
    md: { dir: './' },
    vue: { dir: './docs' }
}