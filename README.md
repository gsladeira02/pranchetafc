# Site oficial do Prancheta

Site estático preparado para `https://pranchetafc.app.br`.

## Publicar sem npm e sem terminal

1. Descompacte o ZIP.
2. Acesse o Vercel e crie um projeto usando o fluxo de upload/Drop.
3. Envie a pasta `pranchetafc-site` ou o ZIP.
4. Depois que o endereço `.vercel.app` funcionar, abra o projeto no Vercel.
5. Vá em **Settings → Domains** e adicione:
   - `pranchetafc.app.br`
   - `www.pranchetafc.app.br` (opcional)
6. O próprio Vercel mostrará os registros DNS exatos que devem ser cadastrados no provedor onde o domínio foi comprado.

## Ativar o botão de download

Abra o arquivo `site-config.js` e preencha:

```js
window.PRANCHETA_CONFIG = {
  version: "0.3.0",
  downloadUrl: "https://SEU-LINK/Prancheta-Setup.exe",
  fileName: "Prancheta-Setup-0.3.0.exe",
  sha256: "HASH_SHA256_DO_ARQUIVO"
};
```

Enquanto `downloadUrl` estiver vazio, o botão mostra **Em breve** e fica desativado.

## Arquivos

- `index.html`: página principal
- `styles.css`: visual e responsividade
- `site-config.js`: versão e link do instalador
- `script.js`: comportamento do botão e detalhes dinâmicos
- `favicon.svg`: ícone provisório
- `og-image.svg`: prévia ao compartilhar o site
- `vercel.json`: configuração simples para Vercel

## Logo

O site usa um símbolo provisório estilizado. Quando a logo oficial do Prancheta for adicionada, substitua o `favicon.svg` e o símbolo do cabeçalho ou envie a logo para que o layout seja atualizado.
