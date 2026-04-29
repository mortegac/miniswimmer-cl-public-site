"use client";
import { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Hide the loader after the first paint completes rather than
    // blocking with a fixed 1 s timeout that delays LCP/FCP.
    const raf = requestAnimationFrame(() => setLoading(false));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
        </div>
      )}
    </>
  );
};

export default Loader;
