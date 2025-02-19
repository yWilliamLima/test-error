'use client'

import { getApiV1ActivitiesOptions } from "@/http/openapi/@tanstack/react-query.gen"
import { useSuspenseQuery } from "@tanstack/react-query"
import Link from "next/link"

export const Activities = () => {
  const { data: activities } = useSuspenseQuery({
    ...getApiV1ActivitiesOptions(),
  })

  return (
    <div className="grid gap-8">
      <Link href="/authors">Authors</Link>
      <pre>{JSON.stringify(activities, null, 2)}</pre>
    </div>
  )
}