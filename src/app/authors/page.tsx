import { Authors } from "@/app/authors/authors";
import { getQueryClient } from "@/app/get-query-client";
import { getApiV1AuthorsOptions } from "@/http/openapi/@tanstack/react-query.gen";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Page() {
  const queryClient = getQueryClient()

  const data = await queryClient.fetchQuery({...getApiV1AuthorsOptions()})

  if (!data) return <h1>error</h1>

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Authors />
    </HydrationBoundary>
  );
}
