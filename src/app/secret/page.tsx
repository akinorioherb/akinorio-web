import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { bookContent } from "./content";
import type { Metadata } from 'next';

// Googleや検索エンジンにインデックスされないようにするSEO設定
export const metadata: Metadata = {
  title: 'スキンケア引き算の美学 - AKINORIO Secret Story',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function SecretBookPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white/90 selection:bg-rose-500/30 font-sans pb-32">
      {/* フローティングヘッダー */}
      <header className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl tracking-widest font-light text-rose-50">AKINORIO</div>
          <a
            href="/スキンケア引き算の美学.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-800 to-rose-900 hover:from-red-700 hover:to-rose-800 text-white text-sm tracking-widest transition-all duration-300 rounded shadow-[0_0_15px_rgba(159,18,57,0.3)] shadow-rose-900/50"
          >
            {/* HeroIcon等がない場合は簡易なSVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            PDFをダウンロード
          </a>
        </div>
      </header>

      {/* メインの読書エリア */}
      <main className="max-w-2xl mx-auto px-6 pt-12 md:pt-20">
        <div className="prose prose-invert prose-rose md:prose-lg prose-headings:font-light prose-h1:text-3xl prose-h1:tracking-wider prose-h1:mb-12 prose-h1:text-center prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:bg-gradient-to-r prose-h1:from-white prose-h1:to-zinc-400 prose-p:leading-loose prose-p:tracking-wide prose-p:text-zinc-300 prose-a:text-rose-400 prose-blockquote:border-l-rose-800 prose-blockquote:bg-rose-950/10 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r prose-img:rounded-xl shadow-2xl">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            // @ts-expect-error type declarations for rehype-raw might be missing
            rehypePlugins={[rehypeRaw]}
            components={{
              // カスタムスタイリング
              h2: ({node, ...props}) => <h2 className="text-2xl mt-20 mb-8 border-b border-zinc-800 pb-4 text-rose-50" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl mt-12 mb-6 text-zinc-100 flex items-center before:content-[''] before:block before:w-1 before:h-6 before:bg-rose-800 before:mr-3" {...props} />,
              img: ({node, ...props}) => <img className="w-full h-auto rounded-none md:rounded-lg shadow-black/50" {...props} />
            }}
          >
            {bookContent}
          </ReactMarkdown>
        </div>

        {/* 読了後のアクション */}
        <div className="mt-32 pt-16 border-t border-zinc-800/50 flex flex-col items-center text-center">
          <h4 className="text-2xl font-light text-white mb-6">肌の未来を変える準備はできましたか？</h4>
          <p className="text-zinc-400 mb-10 tracking-wide leading-relaxed">
            まずは公式オンラインストアで、<br className="md:hidden" />
            究極の引き算ケアアイテムをご覧ください。
          </p>
          <a
            href="/"
            className="px-10 py-4 bg-white text-zinc-950 hover:bg-zinc-200 transition-colors tracking-widest text-sm"
          >
            ブランドサイトへ戻る
          </a>
        </div>
      </main>
    </div>
  );
}
