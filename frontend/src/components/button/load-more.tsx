'use client'

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"

function LoadMore({path}:{path:string}) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)

    const handleLoadMore = () => {
      setIsLoading(true)

      const currentPage = parseInt(searchParams.get('page') ?? '1', 10)
      const newPage = currentPage + 1

      const params = new URLSearchParams(searchParams)
      params.set('page', newPage.toString())

      router.push(`/${path}?${params.toString()}`, {scroll:false})
    }

    useEffect(() => {
      setIsLoading(false)
    }, [searchParams.toString()]) // Trigger when searchParams update

  return (
    <div className="text-center">
    <button
        className="font-semibold text-white bg-pink1 p-4 rounded-xl hover:cursor-pointer hover:bg-pink1/90 hover:outline-3 hover:outline-biru/20"
        onClick={handleLoadMore}
    >
      {isLoading ? 'Sedang Memuat...' : 'Muat Lebih Banyak'}
    </button>
</div>
  )
}

export default LoadMore