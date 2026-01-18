const GrainBackground = () => {
  return (
    <>
      {/* Simple grey background */}
      <div className="fixed inset-0 -z-30 bg-neutral-800" />

      {/* Film grain overlay */}
      <div className="grain-overlay animate-grain" />
    </>
  );
};

export default GrainBackground;
