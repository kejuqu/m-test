import { Link, Outlet } from "umi";

export default function Layout() {
  return (
    <div className=" m-6">
      <ul className=" flex gap-4">
        <li>
          <Link to="/">Test1</Link>
        </li>
        <li>
          <Link to="/test2">Test2</Link>
        </li>
        <li>
          <Link to="/test3">test3</Link>
        </li>
      </ul>
      <div className=" mt-6">
        <Outlet />
      </div>
    </div>
  );
}
