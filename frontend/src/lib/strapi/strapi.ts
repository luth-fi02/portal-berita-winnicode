export default async function getStrapiData<T>(path: string, query: string): Promise<T>{
    const baseUrl = getStrapiURL();

    const url = new URL(path, baseUrl);
    url.search = query
    try{
      const response = await fetch(url.href, { next: {revalidate: 5} });
      const data = (await response.json()) as T;
      return data;
    } catch (error) {
      console.error('Error fetching data from Strapi',error);
      throw error;
    } 
}

async function fetchData<T>(url: string): Promise<T> {
    const authToken = null; // we will implement this later getAuthToken() later
    const headers = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };
  
    try {
      const response = await fetch(url, authToken ? headers : {});
      const data = await response.json() as T;
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // or return null;
    }
  }

export async function getHomePageData<T>(query: string): Promise<T>{
    const baseUrl = getStrapiURL();

    const url = new URL("/api/home-page", baseUrl);
    url.search = query
    
    return await fetchData(url.href);
}

export async function getArticlesData<T>(query: string): Promise<T>{
    const baseUrl = getStrapiURL();

    const url = new URL("/api/articles", baseUrl);
    url.search = query
    
    return await fetchData(url.href);
}

export async function getCategoriesData<T>(query: string): Promise<T>{
  const baseUrl = getStrapiURL();

  const url = new URL("/api/categories", baseUrl);
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