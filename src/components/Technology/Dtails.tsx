import { use, useState, useEffect } from 'react';
import type { IDetails } from "../../Types/DetailsType";
import TechnologyCard from './TechnologyCard';
import StackPanel from './StackPanel';


import { toast } from "react-toastify";

interface DetailsProps {
  detailsPromise: Promise<IDetails[]>;
}

const Dtails = ({ detailsPromise }: DetailsProps) => {

  const details = use(detailsPromise);

  const [selectedStack, setSelectedStack] = useState<IDetails[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("techStack");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("techStack", JSON.stringify(selectedStack));
  }, [selectedStack]);

  const addToStack = (tech: IDetails) => {
    if (!selectedStack.some(item => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
      toast.success(`✅ ${tech.name} added to Stack!`, {
        position: "top-right",
        autoClose: 2500,
      });
    } else {
      toast.info(`ℹ️ ${tech.name} is already in Stack!`, {
        position: "top-right",
        autoClose: 2500,
      });
    }
  };

  const removeFromStack = (id: string) => {
    const item = selectedStack.find(t => t.id === id);
    setSelectedStack(selectedStack.filter(t => t.id !== id));
    if (item) {
      toast.warn(`${item.name} removed from Stack!`, {
        position: "top-right",
        autoClose: 2500,
      });
    }
  };


  const removeAll = () => {
    setSelectedStack([]);
    toast.error(" All technologies removed from Stack!", {
      position: "top-right",
      autoClose: 2500,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">
        Explore the <span className="bg-linear-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
      </h1>
      <p className="text-gray-500 mb-8">Pick one technology per Category to build your ideal stack</p>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
          {details.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              isAdded={selectedStack.some(item => item.id === tech.id)}
              onAdd={addToStack}
            />
          ))}
        </div>

        <StackPanel
          selectedStack={selectedStack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />
      </div>
    </div>
  );
};

export default Dtails;