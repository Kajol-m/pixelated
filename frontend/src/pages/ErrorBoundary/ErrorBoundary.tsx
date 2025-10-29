// ErrorBoundary.tsx
import Button from "@/common/Button/Button";
import { Component, type ReactNode, type ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  navigate?: (path: string | number) => void; // 👈 added
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("❌ Error Boundary Caught an error:", error, errorInfo);
  }

  render() {
    const { navigate } = this.props;

    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex justify-center items-center h-screen">
            <div className="border border-black p-6 rounded-lg text-center space-y-3">
              <p className="text-xl font-semibold">Woops!</p>
              <p>Something went wrong</p>
              <div className="flex gap-3 justify-center">
                <Button
                  variant="secondary"
                  onClick={() => navigate && navigate(-1)}
                >
                  Go Back
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
