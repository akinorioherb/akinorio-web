# SEO対策以前に戻す手順

このディレクトリは SEO/AIO 最適化実施前の状態をバックアップしたものです。

## 「SEO対策以前に戻して」と伝えられた場合のコマンド

```bash
cp -r /Users/ichinoseshougo/claude/akinorio-marketing-hq/akinorio-web/_backup_before_seo/src/* \
      /Users/ichinoseshougo/claude/akinorio-marketing-hq/akinorio-web/src/

# 追加ファイル（sitemap.ts / robots.ts）を削除
rm -f /Users/ichinoseshougo/claude/akinorio-marketing-hq/akinorio-web/src/app/sitemap.ts
rm -f /Users/ichinoseshougo/claude/akinorio-marketing-hq/akinorio-web/src/app/robots.ts
rm -f /Users/ichinoseshougo/claude/akinorio-marketing-hq/akinorio-web/src/app/about/AboutContent.tsx
```

## バックアップ日時
2026-03-22

## 変更されたファイル一覧
- src/app/layout.tsx
- src/app/page.tsx
- src/app/about/page.tsx（server componentに変換）
- src/app/products/page.tsx
- src/app/products/[slug]/page.tsx
- src/app/sitemap.ts（新規）
- src/app/robots.ts（新規）
- src/app/about/AboutContent.tsx（新規：client部分を分離）
