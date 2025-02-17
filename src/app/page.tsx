import { queryClient } from "@/app/query-client";
import { Test } from "@/app/test";
import { getApiV1ActivitiesOptions } from "@/http/openapi/@tanstack/react-query.gen";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default function Home() {
  void queryClient.prefetchQuery({ ...getApiV1ActivitiesOptions() })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Test />
    </HydrationBoundary>
  );
}
