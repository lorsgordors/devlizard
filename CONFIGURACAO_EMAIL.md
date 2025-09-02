# Configuração do EmailJS para Formulário de Contato

## Passo 1: Criar conta no EmailJS
1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up" e crie sua conta gratuita
3. Confirme seu email

## Passo 2: Configurar serviço de email
1. No dashboard, clique em "Email Services"
2. Clique em "Add New Service"
3. Escolha "Gmail" (recomendado) ou outro provedor
4. Configure com o email da empresa: devlizardltda@gmail.com
5. Anote o **Service ID** gerado

## Passo 3: Criar template de email
1. Clique em "Email Templates"
2. Clique em "Create New Template"
3. Configure o template assim:

**Subject (Assunto):**
```
Novo contato via site DevLizard: {{subject}}
```

**Content (Conteúdo):**
```
Olá DevLizard!

Você recebeu uma nova mensagem através do site:

Nome: {{user_name}}
Email: {{user_email}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Mensagem enviada automaticamente via site DevLizard
```

4. Teste o template e anote o **Template ID**

## Passo 4: Obter Public Key
1. Vá em "Account" > "General"
2. Copie sua **Public Key**

## Passo 5: Configurar no código
No arquivo `index.html`, substitua:
- `SEU_PUBLIC_KEY_AQUI` pela sua Public Key
- `SEU_SERVICE_ID` pelo ID do serviço
- `SEU_TEMPLATE_ID` pelo ID do template

Exemplo:
```javascript
emailjs.init({
    publicKey: "sua_public_key_aqui",
});

emailjs.sendForm('service_gmail', 'template_contato', this)
```

## Passo 6: Testar
1. Salve as alterações
2. Faça commit e push
3. Teste o formulário no seu site

## Limites da conta gratuita:
- 200 emails por mês
- Perfeito para um site de portfólio/empresa

## Dicas:
- Use o Gmail da empresa (devlizardltda@gmail.com)
- Configure filtros no Gmail para organizar os emails recebidos
- Teste primeiro com seu email pessoal antes de ir ao ar
