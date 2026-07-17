type Route = {
  path: string;
  name: string;
  disabled: boolean;
  children?: Route[];
};

const routes: Route[] = [
  {
    path: "/code-of-conduct",
    name: "Code of conduct",
    disabled: false,
  },
];

export default routes;
