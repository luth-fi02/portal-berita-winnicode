"use client";
import { useEffect } from "react";
import { AiOutlineFrown } from "react-icons/ai";

export default function Error({
  error,
}: {
  error: Error & { digest?: string },
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="space-y-4">
        <AiOutlineFrown className="h-24 w-24 text-pink-500" />
        <h1 className="text-4xl font-bold text-gray-900">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg text-gray-700">
          This is an error page. Please try again later.
        </p>
        <p className="text-pink-800 italic">{error.message}</p>
      </div>
    </div>
  );
}