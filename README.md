# website-template
Webサイトを作成するためのテンプレート。

## 目的
- BrowserSyncによるコーディング全体の効率化
- Gulp & Sass（SCSS）によるCSSコーディングの効率化
- コーディング、ディレクトリの規約統一
- エディターの設定によるコードの差異を解消

## 用意している機能
- Neatによるグリッドレイアウトシステム
- RWD対応のモジュラースケール（説明は後日追記）
- 余白の統一によるバーティカルリズムの実現（未対応）
- モダンなJavaScriptの記述をBabelでトランスパイル
- HTMLのテンプレートエンジンを使用（Edge）

## 必要環境
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

## 使用手順
```
# Node.jsパッケージのインストール
yarn install

# Yarnが無い場合
npm install
```

```
# 開発開始
npm run dev
```

## npm-scriptsの各コマンド
package.jsonにいくつかのnpm-scriptsを用意しています。

### JavaScriptファイルのLint＆コードフォーマット
```
# ルールに則っていないコードの検出（Lint）
npm run lint

# JavaScriptファイルのコードフォーマット
npm run lint:fix
```

### SassファイルのLint＆コードフォーマット
```
# ルールに則っていないコードの検出（Lint）
npm run stylelint

# Sassファイルのコードフォーマット
npm run stylelint:fix
```

### Sassのパーシャルファイルを自動インポート
`src/sass/`内の各ディレクトリにあるSassパーシャルファイルを`src/sass/import.scss`ファイルに一括で自動インポートします。
```
npm run sass-inject
```

### SVGスプライトの生成
`src/svg`内のSVGファイルをスプライト化し、`public/assets/svg/sprite.svg`として書き出します。
```
npm run svg-sprite
```

### スタイルガイドの起動
Fractalを使用し、`docs/design-guides`内のファイルを元にBrowsersyncを使用して起動します。
```
npm run design-guide
```
※暫定機能

### パッケージのアップデート
```
# npm-check-updatesでpackage.json内のモジュールバージョンを最新へ
npm run ncu

# Node.jsパッケージのインストール
yarn install

# Yarnが無い場合
npm install
```

## 主な利用技術
- [Edge](https://edge.adonisjs.com/)
- [Sass](https://sass-lang.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Gulp.js](https://gulpjs.com/)
- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [stylelint](https://stylelint.io/)

※ESLint、stylelintに[Prettier](https://prettier.io/)を導入するか検討中。
