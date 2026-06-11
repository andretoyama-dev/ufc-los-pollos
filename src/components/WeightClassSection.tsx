import ChampionCard from "./ChampionCard";
import RankingList from "./RankingList";

interface Athlete {
  rank: number;
  name: string;
  movement?: "up" | "down";
  movementValue?: number;
  isInterim?: boolean;
}

interface WeightClassSectionProps {
  weightClass: string;
  championName: string;
  championImage: string;
  athletes: Athlete[];
  isTopRank?: boolean;
}

const WeightClassSection = ({
  weightClass,
  championName,
  championImage,
  athletes,
  isTopRank,
}: WeightClassSectionProps) => {
  return (
    <div className="flex flex-col">
      <ChampionCard
        weightClass={weightClass}
        name={championName}
        imageUrl={championImage}
        isTopRank={isTopRank}
      />
      <div className="mt-6">
        <RankingList athletes={athletes} />
      </div>
    </div>
  );
};

export default WeightClassSection;
