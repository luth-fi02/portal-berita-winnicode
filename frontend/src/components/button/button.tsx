'use client'

import { useSearchParams, useRouter } from "next/navigation"

function Button() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleLoadMore = () => {
      const currentPage = parseInt(searchParams.get('page') ?? '1', 10)
      const newPage = currentPage + 1

      const params = new URLSearchParams(searchParams)
      params.set('page', newPage.toString())

      router.push(`/search?${params.toString()}`, {scroll:false})
    }
  return (
    <div className="text-center">
    <button
        className="font-semibold text-white bg-pink-500 p-4 rounded-xl hover:cursor-pointer hover:bg-pink-600 hover:text-gray-100 hover:outline-3 hover:outline-offset-1"
        onClick={handleLoadMore}
    >Muat Lebih Banyak
    </button>
</div>
  )
}

export default Button