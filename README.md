# Automação com o Cypress 💻

Nesse repositório você vai encontrar o meu projeto de automação de um formulário de cadastro simples. Esse teste cobre o fluxo completo de submissão do formulário e valida mensagens de sucesso e interações, utilizando boas práticas e código limpo.


## Detalhes do projeto 🔍

- Para essa automação, testei o seguinte formulário de cadastro: [***Formulário de Cadastro Simples***](https://jamesonbatista.github.io/projectqatesterweb/cadastro-simples.html).
- Para a criação de dados dinâmicos, utilizei a biblioteca do [**Faker**](https://www.npmjs.com/package/@faker-js/faker). 
- Comandos personalizados.
- Utilização de boas práticas, como o uso do `beforeEach`.

## Instalação do Cypress 🔧

### **Pré-requisitos**

1-Certifique-se de que o [Node.js](https://nodejs.org/) está instalado na sua máquina, com o gerenciador de pacotes npm junto.

2-Inicialize um projeto Node.js
Caso ainda não tenha um arquivo `package.json` no seu projeto, inicie-o com o comando:

```bash
npm init -y
```
### **Instalação**
Execute o comando abaixo para instalar o Cypress como uma dependência de desenvolvimento:
```bash
npm install cypress --save-dev
```
### **Abrindo o Cypress**
Após a instalação, você pode abrir o Cypress com o seguinte comando:
```bash
npx cypress open
```

## Instalação do Faker 🎩
Caso deseje utilizar o Faker no seu projeto, basta instalá-lo com o seguinte comando:  

```bash
npm install --save-dev @faker-js/faker
```
