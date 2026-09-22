# ZepGO

ZepGO is a driver-first EV journey planning interface. It helps drivers understand their current range, arrival reserve, journey risk, and the next charging decision before they leave.

## Features

- Responsive ZepGO login and demo entry screen
- Journey dashboard for Hyderabad to Bengaluru
- Battery range, expected arrival, and safety reserve visibility
- Route visualization with recommended and backup charging stops
- Explainable journey risk indicators
- Recommended charger action with station availability
- Progressive journey planner
- Charging network, history, and contextual EV assistant views
- Mobile-friendly layouts and accessible labels

## Run locally

This is a dependency-free static app. With Python installed, run:

```powershell
python -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).

You can also open `index.html` directly in a browser.

## Project files

- `index.html` - application markup and views
- `styles.css` - responsive visual system and layout
- `app.js` - view navigation and demo interactions

## Notes

The current authentication and charging data are demo interactions intended for a product prototype. A backend can later replace the static sign-in flow and sample journey data.
