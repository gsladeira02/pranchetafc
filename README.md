# Site oficial do Prancheta FC

Domínio principal:
`https://pranchetafc.app.br`

Download configurado:
`https://download.pranchetafc.app.br/Instalador-Prancheta-FC.exe`

## Arquitetura

- Site: GitHub Pages
- Instalador: Cloudflare R2
- Domínio do site: pranchetafc.app.br
- Subdomínio do download: download.pranchetafc.app.br

## Publicação do site no GitHub Pages

1. Crie/abra um repositório público no GitHub.
2. Envie TODOS os arquivos desta pasta para a raiz do repositório.
3. Abra Settings → Pages.
4. Em Source/Build and deployment, escolha Deploy from a branch.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve.
7. Em Custom domain, use `pranchetafc.app.br`.

O arquivo `CNAME` já está incluído e configurado.

## Cloudflare R2

Crie um bucket e envie o instalador com este nome EXATO:

`Instalador-Prancheta-FC.exe`

Depois, em Settings → Public access → Custom Domains, conecte:

`download.pranchetafc.app.br`

O botão do site já aponta para:

`https://download.pranchetafc.app.br/Instalador-Prancheta-FC.exe`

## SHA-256

`6a4ab1654e74140b0576906e03e1612ad3e9f87fe122ebe85bd0d744c068add1`

Tamanho aproximado do instalador enviado: 223.1 MB
