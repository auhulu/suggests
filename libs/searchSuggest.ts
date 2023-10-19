export const searchSuggests = async (query: string) => {
  const url = "/api/suggests";
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };
  const response = await fetch(url, params);
  const { suggests } = await response.json();
  return { suggests } as { suggests: { c: string; list: string[] }[] };
};
