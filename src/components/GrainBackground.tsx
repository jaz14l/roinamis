const GrainBackground = () => {
  return (
    <>
      {/* Simple grey background */}
      <div className="fixed inset-0 -z-30 bg-neutral-400" />

      {/* Film grain overlay */}
      <div className="grain-overlay animate-grain" />
    </>
  );
};

export default GrainBackground;
