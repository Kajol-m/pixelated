// CrashTest.tsx
import { useEffect } from "react";

export default function CrashTest() {
  useEffect(() => {
    throw new Error("💥 Simulated crash for testing ErrorBoundary!");
  }, []);

  return <p>This will never render.</p>;
}
