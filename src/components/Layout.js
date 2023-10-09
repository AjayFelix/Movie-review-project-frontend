import { Outlet } from "react-router-dom";
import Hero from "./hero/Hero";
function Layout({ movies }) {
  return (
    <main>
      <Outlet />
      <Hero movies={movies} />
    </main>
  );
}
export default Layout;
