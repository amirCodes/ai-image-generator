"use client";
import {fetchSuggestion} from "@/lib/fetchSuggestionFromChatGPT";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
export default function TextInput() {
  const [input, setInput] = useState("");
  const { data: suggestion, error, isLoading, mutate, isValidating} = useSWR('/api/suggestion', fetchSuggestion, 
  {
    revalidateOnFocus:false
  });
  console.log(suggestion)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <div className="m-10">
      <form className="flex flex-col  lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
        <textarea
          name="textarea"
          id="textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 outline-none p-2 w-full rounded-md border-0 items-center text-gray-900 ring-1  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter a prompt..."
        />
        <button
          type="submit"
          className={`p-4 m-1 rounded-md border-2 border-gray-300 font-bold ${
            input
              ? "bg-violet-500 text-white transition-colors duration-200"
              : "text-gray-500 cursor-not-allowed"
          }`}
        >
          Generate
        </button>
        <button
          type="button"
          className="p-4 m-1 rounded-md bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-4 m-1 rounded-md bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
}
