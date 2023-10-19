import { XMLParser } from "fast-xml-parser";

export const getSuggests = async (query: string) => {
  const url = "http://www.google.com/complete/search";
  const params = {
    q: query,
    hl: "ja",
    ie: "utf_8",
    oe: "utf_8",
    output: "toolbar",
  };
  const headers = {
    "Content-Type": "text/xml; charset=UTF-8",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0",
  };
  try {
    const response = await fetch(`${url}?${new URLSearchParams(params)}`, {
      headers,
    });
    const text = await response.text();
    const parser = new XMLParser({
      ignoreDeclaration: true,
      ignoreAttributes: false,
    });
    const obj = parser.parse(text);
    return obj.toplevel.CompleteSuggestion.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (v: any) => v.suggestion["@_data"],
    ) as string[];
  } catch {
    return [];
  }
};
