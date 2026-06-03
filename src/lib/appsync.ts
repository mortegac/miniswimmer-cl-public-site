const ENDPOINT = process.env.APPSYNC_ENDPOINT!;
const API_KEY = process.env.APPSYNC_API_KEY!;

export async function appsyncQuery<T = unknown>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`AppSync HTTP ${res.status}`);

  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data as T;
}

/** Paginates through all items using nextToken. */
export async function appsyncQueryAll<T>(
  query: string,
  variables: Record<string, unknown>,
  getPage: (data: unknown) => { items: T[]; nextToken?: string | null },
): Promise<T[]> {
  const all: T[] = [];
  let nextToken: string | null = null;

  do {
    const data = await appsyncQuery(query, { ...variables, nextToken });
    const page = getPage(data);
    all.push(...page.items);
    nextToken = page.nextToken ?? null;
  } while (nextToken);

  return all;
}
