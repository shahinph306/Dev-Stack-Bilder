import type { IDetails } from "../../Types/DetailsType";

interface TechnologyCardProps {
  tech: IDetails;
  isAdded: boolean;
  onAdd: (tech: IDetails) => void;
}

const getBadgeStyle = (badge: string) => {
  const styles: Record<string, string> = {
    Popular: "bg-blue-200 text-blue-500",
    Versatile: "bg-green-200 text-green-500",
    Fast: "bg-orange-200 text-orange-500",
    Standard: "bg-blue-200 text-blue-500",
    "Top SQL": "bg-purple-200 text-purple-500",
    Cache: "bg-red-200 text-red-500",
    Ubiquitous: "bg-amber-200 text-amber-600",
    Essential: "bg-amber-200 text-amber-600",
    Robust: "bg-green-200 text-green-500",
    Modern: "bg-blue-200 text-blue-500",
    Containers: "bg-blue-200 text-blue-500",
  };
  return styles[badge] || "bg-gray-200 text-gray-500";
};

const TechnologyCard = ({ tech, isAdded, onAdd }: TechnologyCardProps) => {
  return (
    <div
      className={`card border rounded-xl p-4 transition-all duration-200 ${
        isAdded
          ? "border-pink-300 bg-pink-50 shadow-sm"
          : "border-gray-300 bg-green-100 hover:shadow-md"
      }`}
    >

      <div className="iconImage-Badge flex justify-between items-start mb-3">
        <img className="w-10 h-10 object-contain" src={tech.icon} alt={tech.name} />
        <span className={`font-bold text-xs px-3 py-1 rounded-lg ${getBadgeStyle(tech.badge)}`}>
          {tech.badge}
        </span>
      </div>

      <h2 className="font-bold text-lg text-gray-800 mb-1">{tech.name}</h2>
      <p className="text-gray-500 text-sm mb-3">{tech.description}</p>

      <div className="flex justify-between font-bold mt-2 text-gray-500 text-sm mb-4">
        <span>{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span>⭐ {tech.rating}</span>
      </div>

       {isAdded ? (
        <button
          disabled
          className="w-full py-2 rounded-xl font-medium flex justify-center items-center bg-pink-50 text-pink-400 border border-pink-200 cursor-default"
        >
          ✅ Added to Stack
        </button>
      ) : (
        <button
          onClick={() => onAdd(tech)}
          className="w-full bg-black text-white py-2 mt-4 rounded-xl font-medium flex justify-center items-center
                     hover:bg-gray-800 transition-colors cursor-pointer"
        >
          Add to Stack
        </button>
      )}
    </div>
  );
};

export default TechnologyCard;