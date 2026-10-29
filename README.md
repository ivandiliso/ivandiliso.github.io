# Ivan Diliso — personal website

React + Vite + SCSS. Minimal, Iosevka Charon, blue / purple / cyan palette.

## Work on it with live updates

    npm install       # once
    npm run dev       # opens http://localhost:5173

Leave `npm run dev` running and keep the browser open. Every time you save a
file (a page, the data, or a style) the browser updates by itself. Style
changes apply without even reloading. Stop it with Ctrl+C.

## Publish

    npm run build     # static site in dist/
    npm run preview   # check the built version locally

Upload the contents of `dist/` anywhere (GitHub Pages works as is).

## Change the colours

Edit `src/styles/_colors.scss`:

    $primary    blue    links, nav, 1st section
    $secondary  purple  2nd section, bold text
    $tertiary   cyan    3rd section, badges

Sections, nav items, projects and cats cycle through the three colours
automatically. To force a colour on one entry: `<Entry color="secondary">`.

## Lowercase

Only the header, nav, page titles, section titles and footer are lowercase
(one rule at the top of `main.scss`). Everything else keeps its capitals.

## Icons

- Links show the favicon of the site they point to, automatically.
- Other icons come from lucide-react (https://lucide.dev/icons), e.g.
  `import { Calendar } from "lucide-react"` then `<Calendar className="icon" />`.

## Where things are

    src/data/          all the text: publications, projects, resume, cats
    src/pages/         one file per page
    src/components/    reusable pieces (Page, Section, Entry, Links, Navbar, Footer)
    src/styles/
      _colors.scss     the three colours
      main.scss        all the styles (one short file)

## Images

- `public/images/cats/*.jpeg` — cat photos (already included)

## Add a page

1. Create `src/pages/MyPage.jsx` using the `<Page>` component.
2. Add a `<Route>` in `src/App.jsx`.
3. Add a link in `src/components/Navbar.jsx`.
