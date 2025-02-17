import { CreateClientConfig } from "@hey-api/client-next";

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: 'https://fakerestapi.azurewebsites.net/',
})
