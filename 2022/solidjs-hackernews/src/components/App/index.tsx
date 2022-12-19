import { PropsWithChildren } from "solid-js";
import { useRoutes, Router } from "solid-app-router";
import routes from "../../routes";

type Props = PropsWithChildren<{}>;

export default function App(props: Props) {
  const Routes = useRoutes(routes);
  return (
    <Router>
      <Routes />
    </Router>
  );
}
