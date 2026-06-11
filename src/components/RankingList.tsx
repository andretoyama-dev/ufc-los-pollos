import { ChevronUp, ChevronDown } from "lucide-react";

interface Athlete {
  rank: number;
  name: string;
  movement?: "up" | "down";
  movementValue?: number;
  isInterim?: boolean;
}

interface RankingListProps {
  athletes: Athlete[];
}

const RankingList = ({ athletes }: RankingListProps) => {
  return (
    <ul className="space-y-3">
      {athletes.map((athlete) => (
        <li key={athlete.rank} className="flex items-center gap-3">
          <span className="ranking-number">{athlete.rank}</span>
          <span className="athlete-name-link flex-1">{athlete.name}</span>
          
          {athlete.isInterim && (
            <span className="text-[10px] border border-ufc-gray text-ufc-gray px-1.5 py-0.5 uppercase">
              Interino
            </span>
          )}
          
          {athlete.movement && (
            <span className={`flex items-center text-xs ${
              athlete.movement === "up" ? "movement-up" : "movement-down"
            }`}>
              {athlete.movement === "up" ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
              {athlete.movementValue}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default RankingList;
