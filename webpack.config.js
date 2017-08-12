const path = require('path')

module.exports = {
    
    entry: { 
        app: ['./src/app.js'] 
    },

    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'stage-2']
                    }
                }
            },
            {
                test: /\.styl/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'stylus-loader' },
                    ]  
            }
        ]
    },

    devtool: 'inline-source-map',
    
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 9000,
        host: '0.0.0.0',
        compress: true,
        disableHostCheck: true
    }

}
