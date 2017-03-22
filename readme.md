# Riot.js サンプル プロジェクト

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


