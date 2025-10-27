# 💎 Safira Components

**Safira Components** é uma biblioteca moderna de componentes UI desenvolvida em **Nuxt 3**, utilizando **PrimeVue** e **TailwindCSS**, com foco em **performance, reusabilidade e design consistente** para os projetos da **Emerald Devs**.

---

## 🚀 Tecnologias

- [Nuxt 3](https://nuxt.com/) — Framework Vue moderno e performático
- [PrimeVue](https://primevue.org/) — Biblioteca rica de componentes UI
- [TailwindCSS](https://tailwindcss.com/) — Estilização utilitária
- [pnpm](https://pnpm.io/) — Gerenciador de pacotes rápido e eficiente

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/emeraldevs/safira-components.git
cd safira-components

Instale as dependências com pnpm:

pnpm install

🧩 Estrutura do Projeto

safira-components/
├── components/       # Componentes reutilizáveis
├── pages/            # Páginas de exemplo e documentação
├── assets/           # Estilos globais e imagens
├── plugins/          # Configuração de plugins (PrimeVue, etc.)
├── nuxt.config.ts    # Configuração principal do Nuxt
└── package.json

⚙️ Configuração do PrimeVue

O módulo do PrimeVue é configurado diretamente no arquivo nuxt.config.ts:

import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module'],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})

🧠 Scripts Disponíveis

# Ambiente de desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Preview do build
pnpm preview

# Lint (se configurado)
pnpm lint

🎨 Estilo & Design

Todos os componentes seguem a identidade visual Safira:

    Design escuro (dark theme)

    Bordas suaves e elementos translúcidos

    Foco em acessibilidade e responsividade

🧱 Criando um Novo Componente

Adicione um novo arquivo dentro da pasta components/:

pnpm nuxi add component MeuComponente

Depois, edite o componente e importe onde precisar:

<template>
  <MeuComponente />
</template>

🧭 Roadmap

Documentação interativa dos componentes

Sistema de temas customizáveis

Integração com Emerald Design Tokens

    Testes unitários com Vitest / Jest

💚 Emerald Devs

Desenvolvido com 💎 por Emerald Devs.
Todos os componentes da Safira são feitos para integrar-se com os sistemas Onyx, Topaz e Sapphire.