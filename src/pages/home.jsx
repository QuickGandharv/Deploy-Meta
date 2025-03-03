import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <div>
      <h1 className="text-primary-default font-semibold text-xl">
        Welcome to Home Page
      </h1>
      <Link to="/admin" className="text-info-default font-semibold text-xl">
        Go to Admin Dashboard
      </Link>
    </div>
  );
};

export default MainHome;
