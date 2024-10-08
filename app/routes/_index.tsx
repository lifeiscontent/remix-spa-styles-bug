import type { MetaFunction } from "@remix-run/node";
import { Home } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return <Home />;
}
