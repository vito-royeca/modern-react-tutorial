import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('./routes/layouts/home.tsx', [
        index('routes/pages/home/index.tsx')
    ]),
    layout('./routes/layouts/normal.tsx', [
        route('about', './routes/pages/about/index.tsx')
    ]),
    layout('./routes/layouts/project.tsx', [
        route('rating-ui', './routes/projects/rating-ui/index.tsx'),
        route('notes-app', './routes/projects/notes-app/index.tsx'),
        route('simple-timer', './routes/projects/simple-timer/index.tsx'),
        route('cryptodash', './routes/projects/cryptodash/index.tsx'),
        route('cryptodash/:id', './routes/projects/cryptodash/components/CoinDetails.tsx'),
        route('shopping-cart-ui', './routes/projects/shopping-cart-ui/index.tsx'),
        route('portfolio', './routes/projects/portfolio/index.tsx'),
        route('portfolio/:id', './routes/projects/portfolio/details.tsx'),
    ]),
] satisfies RouteConfig;
