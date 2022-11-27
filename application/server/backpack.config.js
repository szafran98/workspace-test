module.exports = {
    webpack: (config, options, webpack) => {
        // Babel configuration
        config.module.rules[0].options = {
            presets: [
                ['@babel/preset-env']
            ],
            plugins: [
                ['@babel/plugin-transform-modules-commonjs']
            ]
        }

        console.log(config.module.rules)

        return config
    }
}
