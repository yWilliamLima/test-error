import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: {
    path: 'https://fakerestapi.azurewebsites.net/swagger/v1/swagger.json',
  },
  output: {
    path: './src/http/openapi',
  },
  plugins: [
    {
      name: '@hey-api/client-next',
      runtimeConfigPath: './src/http/client.ts',
    },
    '@tanstack/react-query',
  ],
})
