import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
     <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-[min(40px,8vw)] text-[#444]">404 - Page Not Found</h1>
      <p className="text-[min(16px,2vw) text-[#666]">
        Oops! The page you are looking for does not exist.
      </p>
      <p className="text-[min(16px,2vw) text-[#666]">
        You can go back to the <Link to="/dashboard">homepage</Link>.
      </p>
    </div>
  );
}

