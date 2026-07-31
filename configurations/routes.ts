type Route = {
  path: string;
  name: string;
  disabled: boolean;
  children?: Route[];
};

const routes: Route[] = [
  {
    path: "/cfp",
    name: "Call for Proposals",
    disabled: false,
  },
  {
    path: "/code-of-conduct",
    name: "Code of conduct",
    disabled: false,
  },
];

export default routes;
