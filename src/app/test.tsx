'use client'

import { getApiV1ActivitiesOptions } from "@/http/openapi/@tanstack/react-query.gen"
import { useSuspenseQuery } from "@tanstack/react-query"

export const Test = () => {
  const { data } = useSuspenseQuery({
    ...getApiV1ActivitiesOptions(),
  })

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}