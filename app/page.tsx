"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      {/* タイトル */}
      <h1 className="text-4xl font-black mb-10 text-primary">
        お悩み解決アプリ
      </h1>

      {/* 左右に分ける親要素 */}
      <div className="flex gap-10">
        {/* --- 左側：1のエリア（登録・管理） --- */}
        <div className="flex-1 space-y-6">
          <h2 className="text-xl font-bold border-b pb-2">お悩み登録</h2>
          <p className="text-sm text-gray-500">
            新しい悩みと解決策を、下のボタンから登録しよう！
          </p>
          {/* モーダルを開くボタン（型エラー対策済み） */}
          <button
            className="btn btn-primary w-full text-white shadow-lg"
            onClick={() =>
              (
                document.getElementById("my_modal_1") as HTMLDialogElement
              ).showModal()
            }
          >
            ＋ 悩みを登録
          </button>
          {/* モーダル本体（設計図①） */}
          <dialog id="my_modal_1" className="modal text-black">
            <div className="modal-box bg-white border-2 border-primary max-w-lg">
              <h3 className="font-bold text-xl mb-6 border-b pb-2">
                お悩みと解決策を登録してください
              </h3>

              <div className="flex flex-col gap-5">
                {/* タイトル入力 */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold text-gray-700">
                      お悩みタイトル
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="例：スマホを使いすぎてしまう"
                    className="input input-bordered w-full bg-white border-gray-300"
                  />
                </div>

                {/* 詳細入力 */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold text-gray-700">
                      お悩み詳細や気持ち
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24 bg-white border-gray-300"
                    placeholder="例：寝る前にスマホを2時間も見てしまい、翌朝が辛い。"
                  ></textarea>
                </div>

                {/* 解決策入力 */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold text-gray-700">
                      解決策
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24 bg-white border-gray-300 w-full"
                    placeholder="例：寝る1時間前にスマホをリビングに置く"
                  ></textarea>
                </div>
                {/* キーワード入力 */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold text-gray-700">
                      キーワード
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="例：生活習慣, 睡眠"
                    className="input input-bordered w-full bg-white border-gray-300"
                  />
                </div>
              </div>

              {/* 下部のボタンエリア */}
              <div className="modal-action mt-8">
                <form method="dialog" className="flex gap-3">
                  <button className="btn btn-ghost px-8">キャンセル</button>
                  <button className="btn btn-primary text-white px-8 shadow-md">
                    登録する
                  </button>
                </form>
              </div>
            </div>
          </dialog>{" "}
        </div>

        {/* --- 右側：3のエリア（検索・一覧） --- */}
        <div className="flex-3 space-y-8">
          {/* 設計図②：検索エンジン */}
          <section className="bg-gray-50 p-6 rounded-3xl border shadow-sm">
            <h2 className="text-2xl font-bold mb-3 text-black">お悩み検索</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="悩みタイトルやキーワードで検索..."
                className="input input-bordered flex-1 bg-white text-black"
              />
              <button className="btn btn-square btn-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </section>

          {/* 設計図③：カード一覧 */}
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">お悩み一覧</h2>
            </div>

            {/* 新しい「スッキリ表示」のお悩みカード */}
            <div className="w-full bg-white border-2 border-gray-200 rounded-none overflow-hidden mb-4">
              <div className="flex">
                {/* 左〜中央：項目と内容エリア */}
                <div className="flex-1 divide-y divide-gray-200">
                  {/* 1行目：タイトル */}
                  <div className="flex items-center h-12">
                    <div className="w-32 bg-gray-50 h-full flex items-center px-4 font-bold border-r border-gray-200 text-sm">
                      タイトル
                    </div>
                    <div className="px-4 text-black">
                      スマホに時間を溶かしてしまう
                    </div>
                  </div>

                  {/* 2行目：キーワード */}
                  <div className="flex items-center h-12">
                    <div className="w-32 bg-gray-50 h-full flex items-center px-4 font-bold border-r border-gray-200 text-sm">
                      キーワード
                    </div>
                    <div className="px-4 flex gap-2">
                      <span className="badge badge-outline badge-sm text-gray-500">
                        スマホ
                      </span>
                      <span className="badge badge-outline badge-sm text-gray-500">
                        生活
                      </span>
                    </div>
                  </div>

                  {/* 3行目：悩み内容 */}
                  <div className="flex items-center min-h-16">
                    <div className="w-32 bg-gray-50 min-h-[4rem] flex items-center px-4 font-bold border-r border-gray-200 text-sm">
                      悩み内容
                    </div>
                    <div className="px-4 py-2 text-black text-sm">
                      寝る前にYouTubeを2時間見てしまう。
                    </div>
                  </div>

                  {/* 4行目：解決策 */}
                  <div className="flex items-center min-h-[4rem]">
                    <div className="w-32 bg-gray-50 min-h-[4rem] flex items-center px-4 font-bold border-r border-gray-200 text-sm">
                      解決策
                    </div>
                    <div className="px-4 py-2 text-black text-sm font-medium text-primary">
                      寝る1時間前にスマホをリビングに置く。
                    </div>
                  </div>
                </div>

                {/* 右側：編集・削除ボタンエリア */}
                <div className="w-16 flex flex-col border-l border-gray-200 divide-y divide-gray-200">
                  <button className="flex-1 hover:bg-gray-100 text-xs font-bold text-blue-600 transition-colors">
                    編集
                  </button>
                  <button className="flex-1 hover:bg-red-50 text-xs font-bold text-red-600 transition-colors">
                    削除
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
