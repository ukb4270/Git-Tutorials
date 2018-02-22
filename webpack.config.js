const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "app.bundle.css"
})


module.exports = {
    entry : path.resolve(__dirname+'/src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname + '/dist/') ,
        filename: 'bundle.js',
        publicPath : '/dist/',
    },
    devtool: 'source-map',
    module : {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets: ['env','react','stage-0']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                })
            }
        ]
    },
    plugins: [extractSass]    
};