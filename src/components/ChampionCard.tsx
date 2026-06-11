interface ChampionCardProps {
  weightClass: string;
  name: string;
  isTopRank?: boolean;
  imageUrl: string;
}

const ChampionCard = ({ weightClass, name, isTopRank, imageUrl }: ChampionCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <span className="weight-class-label">
          {weightClass}
        </span>
      </div>

      <h3 className="champion-name mb-1">{name}</h3>
      
      <span className="text-xs text-ufc-gray uppercase tracking-wider mb-4">CAMP.</span>

      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain object-bottom transition-transform duration-700 ease-out hover:scale-110"
        />
      </div>
    </div>
  );
};

export default ChampionCard;
