import { useState } from "react";

/** Copies text to the clipboard and reports `copied` for 2 seconds after. */
export function useCopy() {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string | Promise<string>) => {
    await navigator.clipboard.writeText(await text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return { copied, copy };
}
