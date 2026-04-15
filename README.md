# Blog de Gameplays (Astro) — GitHub Pages

Site estático moderno, responsivo e rápido para publicar gameplays (texto + embed do YouTube + imagens por URL).

## Rodar local

```sh
npm install
npm run dev
```

## Criar novo post (gameplay)

Cria um arquivo novo em `src/content/blog/<slug>.md` com frontmatter pronto:

```sh
npm run new:post -- dead-angle "Dead Angle (Master System) — Terminado"
```

Depois é só editar o `.md` e colocar:

- `youtubeUrl` (ou `youtubeId`)
- `heroImageUrl` (capa por URL) ou `heroImage` (imagem local)
- `images` (lista de URLs de screenshots)

## Deploy grátis no GitHub Pages

Já existe workflow em `.github/workflows/deploy.yml`.

1. No GitHub, vá em **Settings → Pages** e selecione **GitHub Actions** como source.
2. Em **Settings → Variables and secrets → Actions → Variables**, crie:
   - `SITE_URL`: `https://<seu-user>.github.io/<seu-repo>/`
   - `BASE_PATH`: `/<seu-repo>/`

Se você usar **usuário.github.io** (repo especial), use:

- `SITE_URL`: `https://<seu-user>.github.io/`
- `BASE_PATH`: `/`
