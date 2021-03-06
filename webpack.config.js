module.exports={
    mode : "development",
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude:'node_modules',
                use:[{
                    loader:'babel-loader',
                    
                }]
            },
            {
                test: /\.(png | jpg | gif)$/,
                use:[{
                    loader:'file-loader',
                    options: {
                        outputPath: 'images',
                        name:'[name]-[sha1:hash:7].[ext]'
                    }
                }]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use:[{
                    loader:'file-loader',
                    options: {
                        outputPath: 'images',
                        name:'[name]-[sha1:hash:7].[ext]'
                    }
                }]
            }
        ]
    }
   
}