# Configuração SUPER SIMPLES do Formulário de Contato

## Passo 1: Criar conta no Formspree (2 minutos!)
1. Acesse: https://formspree.io/
2. Clique em "Get Started" 
3. Cadastre-se com seu email
4. Confirme o email

## Passo 2: Criar formulário (1 minuto!)
1. No dashboard, clique em "New Form"
2. Digite um nome: "Contato DevLizard"
3. Adicione seu email: devlizardltda@gmail.com
4. Clique em "Create Form"
5. **COPIE o código que aparece** (algo como: https://formspree.io/f/xpzgkqyw)

## Passo 3: Colar no código (30 segundos!)
No arquivo `index.html`, na linha que tem:
```html
<form class="form-contato" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Substitua `YOUR_FORM_ID` pelo seu código.

Exemplo final:
```html
<form class="form-contato" action="https://formspree.io/f/xpzgkqyw" method="POST">
```

## PRONTO! 🎉

- **Total: 3 minutos de configuração**
- **200 envios gratuitos por mês**
- **Funciona automaticamente**
- **Emails chegam direto na sua caixa**

## Como funciona:
1. Usuário preenche o formulário
2. Clica em "Enviar"
3. Email chega automaticamente no devlizardltda@gmail.com
4. Usuário vê uma página de confirmação

Muito mais simples que o EmailJS! 😊
