import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-3">
      <h1 className="text-[min(40px,8vw)] text-[#444]">Something went wrong</h1>
      <p className="text-[min(16px,2vw) text-[#666] text-center">
        An error occurred while processing your request. Try again.
      </p>
      <p className="text-[min(16px,2vw) text-[#666] text-center">
        You can go back to the{" "}
        <Link to="/dashboard" className="text-center text-blue-700 underline">
          homepage
        </Link>
        .
      </p>
    </div>
  );
}
