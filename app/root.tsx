import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";

import "./app.css";
import NavigationBar from "./routes/components/NavigationBar";
import Quote from "./routes/components/Quote";
import Footer from "./routes/components/Footer";

export function meta({}: Route.MetaArgs) {
    return [
        { 
            title: "Modern React From the Beginning - Class Projects"
        }, 
        { 
            name: "description",
            content: "Learning React from the ground up along with modern environments such as React Router v7, TanStack, MERN, etc."
      },
  ];
}

export const links: Route.LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {rel: "icon", type: "image/ico", href: "/favicon.ico"},
  {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"},
  {rel: "stylesheet", href: "https://www.w3schools.com/w3css/5/w3.css"},
  {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Lato"},
  {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Montserrat"},
  {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <head>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <Meta />
              <Links />
          </head>
          <body>
              <NavigationBar />
              <main>
                  {children}

                  <Quote 
                      quote="Learning React from the ground up along with modern environments such as React Router v7, TanStack, MERN, etc."
                  />
              </main>
              <Footer />
              
              <ScrollRestoration />
              <Scripts />
          </body>
      </html>

  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
