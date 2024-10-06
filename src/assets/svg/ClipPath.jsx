const ClipPath = () => {
  return (
    <svg className="block" width={0} height={0}>
      <clipPath id="benefits" clipPathUnits="objectBoundingBox">
        {/* Path with rounded corners */}
        <path d="M0.05,0 H0.95 Q1,0 1,0.05 V0.95 Q1,1 0.95,1 H0.05 Q0,1 0,0.95 V0.05 Q0,0 0.05,0 Z" />
      </clipPath>
    </svg>
  );
};

export default ClipPath;
