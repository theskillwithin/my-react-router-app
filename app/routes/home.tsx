import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export const loader = () => {
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];
  return { options };
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({
  loaderData: { options },
}: Route.ComponentProps) {
  return <Welcome options={options} />;
}
