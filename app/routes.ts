import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index('routes/pages/home/index.tsx'),
    route('about', './routes/pages/about/index.tsx'),
    route('rating-ui', './routes/projects/rating-ui/index.tsx'),
    route('notes-app', './routes/projects/notes-app/index.tsx'),
    route('simple-timer', './routes/projects/simple-timer/index.tsx'),
    route('cryptodash', './routes/projects/cryptodash/index.tsx'),
    route('shopping-cart-ui', './routes/projects/shopping-cart-ui/index.tsx'),
] satisfies RouteConfig;
