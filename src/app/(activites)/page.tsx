import { Activities } from "@/app/(activites)/activities";
import { getQueryClient } from "@/app/get-query-client";
import { getApiV1ActivitiesOptions } from "@/http/openapi/@tanstack/react-query.gen";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default function Page() {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery({ ...getApiV1ActivitiesOptions() })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Activities />
    </HydrationBoundary>
  )
}
