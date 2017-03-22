# Riot.js サンプル プロジェクト

https://github.com/Kazunori-Kimura/riot-sample-project

## はじめに

このプロジェクトは [Riot.js](http://riotjs.com/ja/) をプリコンパイルし、[browserify](https://www.npmjs.com/package/browserify) で 1ファイルに結合するサンプルです。

`npm run build` コマンドで `src/tags` ディレクトリ配下の Riot tagファイル を `src/tags/index.js` ファイルに出力します。


## 使い方

### build

```
> npm run build
```

`dist` ディレクトリ内をクリアした後、`src` ディレクトリ配下をプリコンパイルし `dist/bundle.js` として出力します。

### 起動

```
> npm start
```

`build` を実施した後、プロジェクトのルートフォルダを `browser-sync` で公開します。
`src` ディレクトリ配下を監視し、変更があった場合は随時 `build` を行います。
`build` 完了後、`browser-sync` の再読込が行われます。


## 試行錯誤の経緯

*Riot.js* の tagファイルをプリコンパイルする手段として、[riotify](https://github.com/riot/riotify) が提供されていますが、これを使用して `--type es6` のオプションを設定しましたが、正しく es6 -> es5 の変換が行われませんでした。

このプロジェクトでは `riot` コマンドを使用し、`src/tags` 配下の tagファイルを jsファイルに変換・結合した後、`browserify + babelify` で `require` の解決と es6 -> es5 変換を行っています。


プリコンパイル、結合処理はタスクランナーを使用せずに `npm script` で定義しています。

`package.json` は以下のようになっています。

```json
{
  "name": "riot-sample",
  "version": "1.0.0",
  "description": "riot.js sample project",
  "main": "index.js",
  "scripts": {
    "clean": "rimraf dist/bundle.js",
    "prestart": "npm run build",
    "start": "npm-run-all -p watch server",
    "build": "npm-run-all clean build:riot build:browserify",
    "build:riot": "riot -m src/tags src/tags/index.js",
    "build:browserify": "browserify src/index.js > dist/bundle.js --debug",
    "server": "browser-sync start --server --files \"*.html\" \"dist/*\"",
    "watch": "chokidar \"src/**/*\" -i \"src/tags/index.js\" -c \"npm run build\""
  },
  "keywords": [
    "riot",
    "babel",
    "browserify",
    "sample"
  ],
  "author": "kazunori.kimura.js@gmail.com",
  "license": "MIT",
  "devDependencies": {
    "babel-preset-es2015": "^6.24.0",
    "babel-preset-es2016": "^6.22.0",
    "babelify": "^7.3.0",
    "browser-sync": "^2.18.8",
    "browserify": "^14.1.0",
    "chokidar-cli": "^1.2.0",
    "npm-run-all": "^4.0.2",
    "rimraf": "^2.6.1",
    "riot": "^3.3.2"
  },
  "browserify": {
    "transform": [
      [
        "babelify",
        {
          "presets": [
            "es2015",
            "es2016"
          ]
        }
      ]
    ]
  }
}
```

`build:riot` が Riot.js Tagファイル のプリコンパイル処理、`build:browserify` が `require` の解決と es6 -> es5 変換処理になります。

各処理を `npm-run-all` で順次実行するように指定しています。
