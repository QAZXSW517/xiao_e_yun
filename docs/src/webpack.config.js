const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getEntry = () => {
    const entry = {};
    const path = './ts/'
    glob.sync("./ts/*.ts").forEach((name) => {
        const start = name.indexOf(path) + path.length; //前面路徑共8個位元的字串，設定的資料夾路徑不同，也要記得更改位元數喔!
        const end = name.length - 3; //減去附檔名 .js 共三個位元的字串
        const eArr = [];
        const n = name.slice(start, end); //取得每個js的名稱
        eArr.push(name); //push至陣列中
        entry[n] = eArr; //就會產生多筆入口的陣列囉！
    });
    console.log(entry);
    return entry;
};

module.exports = {
    entry: getEntry(),
    resolve: { extensions: [".ts", ".js"] },
    output: {
        path: path.resolve(__dirname, "./"),
        filename: '../resources/js/[name].js',
        sourceMapFilename: "../resources/js/[name].js.map"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: ["ts-loader"],
            },
            {
                test: /\.scss$/i,
                // 把 sass-loader 放在首要處理 (第一步)
                use: [MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                    },
                },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    },
                }
                ]
            },
        ]},
            plugins: [new MiniCssExtractPlugin({
                filename: "../resources/css/main.css",
            })],
};