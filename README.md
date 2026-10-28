# Craque: Rumo ao Estrelato — site beta

Site responsivo em HTML, CSS e JavaScript puro. Não precisa de instalação nem de build.

## O que já funciona
- Layout responsivo para celular e computador.
- Identificação de acesso antecipado e versão beta 0.1.0.
- Seções de apresentação, recursos, atualizações e feedback.
- Botão “Iniciar jogo” abre uma janela de jogo.
- Formulário de feedback valida a mensagem e tenta copiá-la para a área de transferência.

## Jogo já integrado
O arquivo HTML que você enviou está incluído em `game/index.html`. O botão **Iniciar jogo** abre essa versão dentro da janela de jogo do site.

O jogo usa `localStorage` para salvar a carreira. Como a página do jogo está na mesma origem do site quando publicado, o salvamento local deve funcionar normalmente no navegador. Os dados ficam no dispositivo/navegador do jogador; não são sincronizados entre dispositivos.

Se você atualizar o jogo no futuro, substitua `game/index.html` pelo novo arquivo HTML. Se o jogo passar a depender de imagens, sons ou outros arquivos separados, coloque esses arquivos na pasta `game/` preservando a estrutura de pastas e os caminhos relativos.

## Testar localmente
Basta abrir `index.html` no navegador. Para evitar restrições de arquivos locais, também pode usar uma extensão de servidor local ou executar `python -m http.server 8000` na pasta do projeto e acessar `http://localhost:8000`.

## Publicar gratuitamente com GitHub Pages
1. Crie uma conta em https://github.com/ e um repositório público, por exemplo `craque-rumo-ao-estrelato`.
2. Envie todos os arquivos desta pasta para a raiz do repositório (o `index.html` principal deve ficar na raiz).
3. No repositório, abra **Settings → Pages**.
4. Em “Build and deployment”, selecione **Deploy from a branch**, escolha `main` e `/ (root)` e salve.
5. Aguarde o GitHub publicar e abra a URL apresentada na página de configurações do Pages.

Alternativas: Netlify ou Cloudflare Pages. Para publicar, envie a pasta completa do site. Se adicionar o jogo depois, envie também os novos arquivos.

## Receber feedbacks automaticamente
O formulário atual não envia os dados para um servidor: ele prepara e copia a mensagem no dispositivo do visitante. Para receber respostas remotamente, conecte um serviço de formulários (por exemplo, Formspree) ou crie uma API/backend e altere o evento `submit` em `script.js`. Não colete dados pessoais desnecessários.

## Atualizar o número da versão
Edite os textos `BETA 0.1.0` em `index.html` e atualize as notas em “Atualizações” sempre que publicar uma nova versão.

## Estrutura
- `index.html` — página principal
- `styles.css` — aparência e responsividade
- `script.js` — interações e feedback
- `game/index.html` — placeholder para a entrada do jogo real
