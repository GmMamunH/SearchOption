/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const OnClickSearch = () => {
  const [searchTerm, setSearchTerm] = useState(""); // সার্চ ইনপুটের জন্য স্টেট
  const [results, setResults] = useState(null); // সার্চের রেজাল্টের জন্য স্টেট

  // সার্চ করার জন্য একটি অ্যারে
  const data = ["apple", "banana", "grape", "orange", "mango", "watermelon"];

  // সার্চ হ্যান্ডলার ফাংশন
  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredData); // সার্চ করা ফলাফল সেভ করা হচ্ছে
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">onClick Array Search </h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search here..."
        className="border p-2 rounded w-full max-w-sm"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Search
      </button>

      <div className="mt-4 w-full max-w-sm">
        {results !== null &&
          (results.length > 0 ? (
            <ul className="list-disc pl-5">
              {results.map((item, index) => (
                <li key={index} className="py-1">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-red-500 font-bold">Not Found</p>
          ))}
      </div>
    </div>
  );
};

export default OnClickSearch;
