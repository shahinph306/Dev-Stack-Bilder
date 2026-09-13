import type { IDetails } from "../../Types/DetailsType";

interface StackPanelProps {
  selectedStack: IDetails[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackPanel = ({ selectedStack, onRemove, onRemoveAll }: StackPanelProps) => {
  return (
    <div className="w-full lg:w-80 bg-white border border-gray-200 rounded-xl p-5 h-fit">
      
      <h2 className="text-lg font-bold text-gray-800 mb-1">Your Stack</h2>
      <p className="text-gray-500 text-sm mb-4">
        {selectedStack.length} Technology{selectedStack.length !== 1 ? "ies" : ""} Selected
      </p>

      {selectedStack.length === 0 ? (
        <p className="text-gray-400 text-sm py-4 text-center">No technology selected yet.</p>
      ) : (
        <>

          <div className="space-y-3 mb-4">
            {selectedStack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
              >
                <div className="flex items-center gap-3">
                
                  <img className="w-8 h-8 object-contain" src={item.icon} alt={item.name} />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                    <p className="text-gray-500 text-xs">{item.category}</p>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(item.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors text-lg leading-none"
                > ✕</button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full py-2 rounded-lg border border-red-300 text-red-600 font-medium hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default StackPanel;