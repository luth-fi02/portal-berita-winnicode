

async function fetchData<T>(url: string): Promise<T | null> {
    try {
      const response = await fetch(url, { cache: 'no-store' });
      const data = await response.json() as T;
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

export async function getHomePageData<T>(query: string): Promise<T|null>{
    const baseUrl = getStrapiURL();

    const url = new URL("/api/home-page", baseUrl);
    url.search = query
    
    return await fetchData(url.href);
}

export async function getArticlesData<T>(query: string): Promise<T|null>{
    const baseUrl = getStrapiURL();

    const url = new URL("/api/articles", baseUrl);
    url.search = query
    
    return await fetchData(url.href);
}

export async function getCategoriesData<T>(query: string): Promise<T|null>{
  const baseUrl = getStrapiURL();

  const url = new URL("/api/categories", baseUrl);
  url.search = query
  
  return await fetchData(url.href);
}

export async function getGlobalData<T>(query: string): Promise<T|null>{
  const baseUrl = getStrapiURL();

  const url = new URL("/api/global", baseUrl);
  url.search = query
  
  return await fetchData(url.href);
}

export function getStrapiURL() {
    return process.env.STRAPI_URL ?? "http://localhost:1337";
  }
  
export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}