const SponsorBanner = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="bg-ufc-black text-white flex items-center px-8 py-4 gap-6">
        <span className="font-heading text-2xl italic tracking-tighter">UFC</span>
        <div className="w-px h-8 bg-white/30"></div>
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-wide">VeBetter</span>
          <span className="text-[10px] text-white/70">by vechain</span>
        </div>
        <span className="text-[8px] uppercase tracking-wider text-white/60 ml-4">
          Official Global Partner
        </span>
      </div>
    </div>
  );
};

export default SponsorBanner;
