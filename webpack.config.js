var path = require('path');

module.exports = {
    mode: 'none', // production, development none
    entry: './src/index.js', // 시작점
    output: { // 결과물 만들어 냄 번들 js
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist') // __dirname 현재 폴더 기준으로
    },
    module: { // loader
        // entry -> output을 만들어 낼 때 개입되어야할 모듈
        rules : [
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    devtool: 'source-map' // 빌드 결과물과 원본소스를 매칭해줌
};