// ItemCardSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export const ItemCardSkeleton = () => (
  <div className="animate-pulse pl-4 pr-4 lg:py-8 md:py-8 pt-4 pb-2">
    <div className="relative overflow-hidden">
      <Skeleton className="w-full h-[400px] rounded-md bg-gray-200" />
    </div>
    <div className="pt-5 space-y-2">
      <Skeleton className="h-4 w-3/4 bg-gray-200" />
      <Skeleton className="h-4 w-1/4  bg-gray-200" />
    </div>
  </div>
);
