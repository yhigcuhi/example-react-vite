# example-react-vite
React + Viteの静的サイトのお試し

## 環境構築: React Vite + React router dom
+ docker用意
+ docker compose up -d
+ docker compose run --rm react yarn create vite
+ project name: ./
+ select framework: react
+ select variant: Javascript
+ docker compose run --rm react yarn install

※ 最小での作成のため Jsにしている

## ライブラリ
- react router ... 画面遷移用
- react-hook-form ... form制御用

## 参考サイト
[Vite + React のDocker](https://zenn.dev/sg4k0/articles/1da799501d2018)
[React Router V6](https://reffect.co.jp/react/react-router-6/#react-%E3%81%AE%E5%8B%95%E4%BD%9C%E7%A2%BA%E8%AA%8D)