import { useState } from "react";

const AddCart = ({ onAddTask } : { onAddTask: (item: string) => void }) => {
  const [item, setItem] = useState<string>("");

  const addCart = () => {
    if (item.trim()) {
      onAddTask(item);
      setItem("");
    }
  };

  return (
    <div className="flex h-10">
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        type="text"
        className="rounded-lg  border-2 border-gray-300 px-4"
        placeholder="Add a new item"
      />
      <button
        onClick={() => addCart()}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Add Cart
      </button>
    </div>
  );
};

export default AddCart;
