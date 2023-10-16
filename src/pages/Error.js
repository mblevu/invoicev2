import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="flex items-center justify-center flex-col mt-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-3 text-red-800 lg:mb-8">
        404 - Page Not Found
      </h1>
      <p className="text-xl mb-10 text-gray-600">
        Oops! The page you are looking for does not exist or may have been moved.
      </p>
      <Link to="/" className="text-blue-500 text-lg underline">
        <i className="fas fa-long-arrow-alt-left"></i> Back to Homepage
      </Link>
    </section>
  );
}
