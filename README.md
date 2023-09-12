# mapset.io and mapset.ch websites

Promo website for [mapset](https://editor.mapset.io/) plan editor.

This is project is the mapset website. It uses nextJS 13.

The website contains 3 pages:

- `/` which is the home page
- `/imprint` which the imprint page for ingo about license and stuff
- `/guide` which is the mapset user guide

The webiste is translated in 3 languages DE, EN, FR. Each page loads its own translations.

Translations are available on folder `src/content/[guide|home|imprint]>`.

## Pages

- Main: [mapset.io](https://mapset.io) and [mapset.ch](https://mapset.ch)
- User guide: [mapset.io/guide](https://mapset.io/guide/) and [mapset.ch/guide](https://mapset.ch/guide/)

## Environment

- <https://mapset.ch>
- <https://mapset.io>
- <https://dev.mapset.io> use vercel project [website-mapset-io](https://vercel.com/geops/website-mapset-io)
- <https://dev.mapset.ch>

## Development

There is only one environment variable to set, NEXT_PUBLIC_DOMAIN=io or NEXT_PUBLIC_DOMAIN=ch . It defines the domain where the app is deployed.

```bash
// Launch the web server on http://localhost:3000
cp .env.dist .env
yarn install
yarn dev
```

## Deploy

Project is deployed automatically on vercel project [mapset-ch](https://vercel.com/geops/mapset-ch) and [mapset-io](https://vercel.com/geops/mapset-io) .

The project [website-mapset-io](https://vercel.com/geops/website-mapset-io) was there for the update of nextJS13 will be removed when olivier/nextjs branch is merged.
