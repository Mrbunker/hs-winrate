"use client";

interface TokenInputProps {
  onSubmit: (token: string) => void;
}

export function TokenInput({ onSubmit }: TokenInputProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = formData.get("xcxtoken") as string;
    if (token) {
      onSubmit(token);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            id="xcxtoken"
            name="xcxtoken"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md 
                     dark:border-gray-600 dark:bg-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="输入 xcxtoken..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md 
                     hover:bg-blue-600 focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:ring-offset-2"
          >
            确认
          </button>
        </div>
      </div>
    </form>
  );
}
