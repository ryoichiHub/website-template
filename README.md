# website-template
Webサイトを作成するためのテンプレート。
※まだ作りかけなので、ドキュメントも無いしGulpの警告文も表示されます。

## 目的
- BrowserSyncによるコーディング全体の効率化
- Gulp & Sass（SCSS）によるCSSコーディングの効率化
- コーディング、ディレクトリの規約統一
- エディターの設定によるコードの差異を解消

## 用意している機能
- Neatによるグリッドレイアウトシステム
- RWD対応のモジュラースケール（オリジナル）
- 余白の統一によるバーティカルリズムの実現
- モダンなJavaScriptの記述をBabelでトランスパイル
- HTMLのテンプレートエンジンを使用（Edge.js）

## 必要環境
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

## 利用する手順
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

## パッケージのアップデート
```
# npm-check-updatesでpackage.json内のモジュールバージョンを最新へ
npx ncu -u

# Node.jsパッケージのインストール
yarn install

# Yarnが無い場合
npm install
```
