# hasanyelaldi.github.io

Personal site of Hasan Yelaldı. Plain HTML, CSS and a little JavaScript, no build step, no dependencies.

- `index.html`: all content
- `style.css`: all styles; colours and font are the variables at the top
- `script.js`: one hidden extra (try the Konami code); the page works without it
- `fonts/`: Departure Mono by Helena Zhang (SIL Open Font License, see `fonts/OFL.txt`)

## Preview locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

GitHub Pages serves the repository as is. In the repository settings, set **Pages → Build and deployment → Source** to **Deploy from a branch**, branch `main`, folder `/ (root)`.
