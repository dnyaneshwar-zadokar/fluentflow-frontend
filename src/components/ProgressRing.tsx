interface ProgressRingProps {
  progress: number; // 0-100
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
  children?: React.ReactNode;
}

const ProgressRing = ({
  progress,
  size = 120,
  strokeWidth = 8,
  color = "hsl(var(--primary))",
  backgroundColor = "hsl(var(--muted))",
  className = "",
  children
}: ProgressRingProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`relative inline-flex items-center justify-center animate-pulse-ring ${className}`}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          className="opacity-20"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="progress-ring transition-all duration-1000 ease-out"
          style={{
            filter: `drop-shadow(0 0 12px ${color})`
          }}
        />
        {/* Glow effect for higher scores */}
        {progress > 80 && (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius + 4}
            stroke={color}
            strokeWidth={2}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="opacity-30 animate-pulse"
          />
        )}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
      {/* Achievement sparkles for perfect scores */}
      {progress === 100 && (
        <div className="absolute -top-2 -right-2 text-yellow-400 animate-bounce-custom">
          ✨
        </div>
      )}
    </div>
  );
};

export default ProgressRing;