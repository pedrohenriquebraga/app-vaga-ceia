
# Message Classification

## Pré-requisitos

- Node.js (v14+)
- npm ou yarn
- React Native CLI
- Ambiente React Native configurado

## Setup da API Unicorn

### 1. Iniciar a API
Inicie como fornecido no anexo enviado na avaliação

## Setup React Native

### 1. Instalar dependências
```bash
cd app
npm install 
```

ou 

```bash
cd app
yarn
```

### 2. Executar no Android
```bash
npm run android
```

Note que, o app foi testado em ambiente Windows 11 e Emulador do Android Studio, então recomendo que siga o mesmo ambiente para que o app funcione conforme o esperado

## Mais orientações:

- Limpar cache: `npm start -- --reset-cache`
- Reinstalar node_modules: `rm -rf node_modules && npm install`
- Em caso de erro no "ninja.exe" e/ou erro de limite de caracteres (encontrado no Windows 11), seguir tutorial abaixo:

https://github.com/expo/expo/issues/36274#issuecomment-3124737069

- Em caso de dúvidas na configuração do ambiente React Native, consultar link abaixo:

https://reactnative.dev/docs/set-up-your-environment