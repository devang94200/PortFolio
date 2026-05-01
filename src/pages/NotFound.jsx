import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center section-bg text-white text-center px-4">
      <p className="text-8xl font-extrabold gradient-text mb-4">404</p>
      <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
      <p className="text-slate-500 mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="btn-glow px-8 py-3 text-sm font-semibold">
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
