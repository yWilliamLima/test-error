'use client'

import { getApiV1AuthorsOptions } from "@/http/openapi/@tanstack/react-query.gen"
import { useSuspenseQuery } from "@tanstack/react-query"
import Link from "next/link"

export const Authors = () => {
  const { data: authors } = useSuspenseQuery({
    ...getApiV1AuthorsOptions(),
  })

  return (
    <div className="grid gap-8">
      <Link href="/">Activities</Link>
      <pre>{JSON.stringify(authors, null, 2)}</pre>
    </div>
  )
}