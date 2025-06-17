'use client'

import { useSearchParams, useRouter } from "next/navigation"

function LoadMore({path}:{path:string}) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleLoadMore = () => {
      const currentPage = parseInt(searchParams.get('page') ?? '1', 10)
      const newPage = currentPage + 1

      const params = new URLSearchParams(searchParams)
      params.set('page', newPage.toString())

      router.push(`/${path}?${params.toString()}`, {scroll:false})
    }
  return (
    <div className="text-center">
    <button
        className="font-semibold text-white bg-rose-400 p-4 rounded-xl hover:cursor-pointer hover:bg-rose-500 hover:outline-3 hover:outline-offset-1"
        onClick={handleLoadMore}
    >
      Muat Lebih Banyak
    </button>
</div>
  )
}

export default LoadMore