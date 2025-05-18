import qs from 'qs';

export const navigationBarQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                'layout.navigation-bar': {
                    populate: {
                        'link': {
                            populate: '*'
                        }
                    }
                }
            }
        }
    }
});

export const featuredQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                'layout.featured': {
                    populate: {
                        fields: ['description'],
                        thumbnail: {
                            fields: ['url']
                        },
                        'article': {
                            fields: ['title', 'publishedAt'],
                            populate:{
                                'author': {
                                     fields: ['name']
                                },
                            }
                        },
                    }
                }
            }
        }
    }
});

export const recentQuery = qs.stringify({
    sort: ['publishedAt:desc'],
    fields: ['title', 'publishedAt', 'slug'],
    pagination: {
        start: 0,
        limit: 15,
    },
});

export default async function getStrapiData<T>(path: string, query: string): Promise<T>{
    const baseUrl = process.env.STRAPI_URL;

    const url = new URL(path, baseUrl);
    url.search = query
    try{
      const response = await fetch(url.href, { next: {revalidate: 600} });
      const data = (await response.json()) as T;
      return data;
    } catch (error) {
      console.error('Error fetching data from Strapi',error);
      throw error;
    } 
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