interface SparkFieldProps {
  count?: number;
  className?: string;
}

/**
 * Kitoko Hearth's signature ambient element: a handful of floating embers,
 * evoking the "hearth" — warmth and gathering — and the "spark" of an idea.
 * Used sparingly: hero backdrop, section transitions. Not decorative noise.
 */
export default function SparkField({ count = 6, className = '' }: SparkFieldProps) {
  const sparks = Array.from({ length: count });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {sparks.map((_, i) => {
        const left = 10 + ((i * 83) % 90);
        const delay = (i * 0.6) % 3.5;
        const duration = 3 + (i % 3);
        return (
          <span
            key={i}
            className="spark-particle"
            style={{
              left: `${left}%`,
              bottom: '10%',
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}
