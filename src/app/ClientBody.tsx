"use client";

import { useEffect, Suspense } from "react";
import PageLoader from "@/components/ui/PageLoader";

function PageLoaderWrapper() {
  return (
    <Suspense fallback={null}>
      <PageLoader />
    </Suspense>
  );
}

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div className="antialiased">
      <PageLoaderWrapper />
      {children}
    </div>
  );
}
