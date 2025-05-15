import dotenv from 'dotenv';
import qs from 'qs';

dotenv.config()

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

export default async function getStrapiData<T>(path: string, query: string): Promise<T>{
    const baseUrl = process.env.STRAPI_URL;

    const url = new URL(path, baseUrl);
    url.search = query
    try{
      const response = await fetch(url.href);
      const data = (await response.json()) as T;
      return data;
    } catch (error) {
      console.error('Error fetching data from Strapi',error);
      throw error;
    }
  
  }