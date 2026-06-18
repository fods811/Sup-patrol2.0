import { defineConfig, loadEnv } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined) {
      process.env[key] = value
    }
  }

  return {
    resolve: {
      tsconfigPaths: true,
      dedupe: ['react', 'react-dom', '@tanstack/react-query'],
    },
    plugins: [
      devtools(),
      tailwindcss(),
      tanstackStart({
        prerender: {
          enabled: true,
          autoStaticPathsDiscovery: true,
          crawlLinks: true,
        },
      }),
      viteReact(),
    ],
  }
})
