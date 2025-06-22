import RecentArticle from "@/components/recent/recent-article";
import { StrapiImage } from "@/components/strapi-image";
import { getArticlesData } from "@/lib/strapi/strapi";
import { ArticleQueryResponse } from "@/types/article";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "@/app/[category]/[slug]/block-renderer-client"
import qs from "qs";
import NotFound from "@/app/not-found";
import Related from "@/components/related/related";

function findArticle(slug: string){
  return qs.stringify({
    filters: {
        slug: {
          $eq: slug,
        }
    },
    fields: ['title', 'publishedAt', 'content'],
    populate: {
        'thumbnail': {
          fields: ['url']
        },
        'author': {
             fields: ['name']
        },
        'related':{
          fields: ['title', 'slug'],
          populate: {
            'thumbnail': {
              fields: ['url']
            },
            'category': {
              fields: ['href']
            }
          }
        }
    },
  });
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { slug } =await params;
  const strapiData = await getArticlesData<ArticleQueryResponse>(findArticle(slug))
  console.dir(strapiData, {depth: null})
  if (!strapiData){
    throw new Error("Failed to fetch article data from Strapi");
  }
  const data = strapiData.data[0];
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!data){
    return NotFound();
  }
  const content: BlocksContent = strapiData.data[0].content;

  return (
    <div className='flex flex-col items-center'>
        <StrapiImage
          src= {data.thumbnail.url}
          alt='logo'
          width={500}
          height={500}
          className='p-3 mb-5 mt-20'
        />
      <div className="flex flex-col w-full space-y-5 md:space-x-10 md:flex-row md:flex">
        <div className="flex flex-col flex-3/4">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <h4 className="font-medium text-xs p-2 text-gray-400">{new Date(data.publishedAt).toDateString()} {data.author.name}</h4>
          <div className="prose max-w-max">
            <BlockRendererClient content={content}/>
          </div>
        </div>
        <div className="flex flex-1/4">
          <RecentArticle/>
        </div>
      </div>
        <Related data={data.related}/>
    </div>
  )
}