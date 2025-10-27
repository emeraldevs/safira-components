import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module'],

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  primevue: {
    // Instala automaticamente o plugin PrimeVue
    // (defina false se quiser configurar manualmente em /plugins/primevue.ts)
    usePrimeVue: true,

    // Importa automaticamente componentes, diretivas e composables
    autoImport: true,

    // Configurações principais do PrimeVue
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system', // "system" respeita o modo do SO
          cssLayer: false
        }
      }
    },

    // Caminho opcional para customizações via PassThrough API
    importPT: {
      from: '@/passthrough/mycustompt.js'
    },

    // Caminho opcional para customizações de tema
    importTheme: {
      from: '@/themes/mytheme.js'
    },

    // Configuração de componentes
    components: {
      prefix: 'Prime', // ex: <PrimeButton />
      include: ['Button', 'DataTable', 'Dialog'], // componentes desejados
      exclude: ['Carousel', 'Galleria'], // ignora esses
      name: ({ name }) => {
        // opcional: personaliza o nome do componente
        return name === 'Button' ? `My${name}` : name
      }
    },

    // Configuração de diretivas
    directives: {
      prefix: 'p', // ex: v-pripple, v-ptooltip
      include: ['Ripple', 'Tooltip'],
      exclude: []
    },

    // Configuração de composables
    composables: {
      include: ['useStyle'] // importa apenas este composable
    }
  }
})
