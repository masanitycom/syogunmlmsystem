"use client"

import { useEffect } from "react"
// import { Button } from "@/components/ui/button"  // 一時的にコメントアウト

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-red-600">エラーが発生しました</h1>
        <p className="mb-4 text-gray-700">申し訳ありませんが、問題が発生しました。</p>
        <button
          onClick={() => reset()}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          再試行
        </button>
      </div>
    </div>
  )
}