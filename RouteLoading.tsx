import { Flame } from 'lucide-react';

export default function RouteLoading() {
  return (
    <div
      className="min-h-[70vh] flex flex-col items-center justify-center gap-4 pt-24 bg-cream dark:bg-brown-deep"
      role="status"
      aria-label="Loading page"
    >
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-hearth-gradient animate-hearth-glow">
        <Flame className="w-6 h-6 text-cream" aria-hidden="true" />
      </span>
      <div className="flex flex-col items-center gap-2 w-full max-w-xs px-6">
        <div className="h-3 w-2/3 rounded-full bg-brown/10 dark:bg-cream/10 animate-pulse" />
        <div className="h-3 w-1/2 rounded-full bg-brown/10 dark:bg-cream/10 animate-pulse" />
      </div>
      <span className="sr-only">Loading&hellip;</span>
    </div>
  );
}
