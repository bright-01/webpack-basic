var path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist') // __dirname 현재 폴더 기준으로
    },
    devtool: 'source-map' // 빌드 결과물과 원본소스를 매칭해줌
};