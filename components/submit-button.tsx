import { useCallback, useMemo, useState } from "react";
import { Check } from "./svg/icons";

export const SubmitButton = ({ type, value, loading, done } : { type?: "button" | "reset" | "submit"; value: string; loading: boolean; done: boolean }) => {
  return (
    <div className="flex gap-4 items-center">
      <button disabled={loading} type={type} className="w-fit py-2 px-8 rounded-md bg-yllw font-semibold flex items-center justify-center">
        <span>{value}</span>
        <div className={`border-t-black border-yllw rounded-full ${loading ? ' border-2 border-t-2 ml-4 animate-spin w-4 h-4' : 'scale-0'} transition-all`} >
        </div>
        <Check className={`${done ? 'w-5 h-5 ml-4 opacity-100' : 'scale-0 w-0 h-0 opcaity-0'} transition-opacity`} />
      </button>
    </div>
  );
};