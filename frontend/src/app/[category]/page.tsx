import NotFound from '@/app/not-found';
import { getCategoriesData } from '@/lib/strapi/strapi';
import CategoryQueryResponse, { Category } from '@/types/category';
import qs from 'qs';

export const categoryQuery = qs.stringify({
    fields: ['name']
});

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const strapiData = await getCategoriesData<CategoryQueryResponse>(categoryQuery);
  console.dir(strapiData.data, {depth: null});
  const allowedParams: Category[] = strapiData.data;
  const { category } = params;

  const validate = allowedParams.find(
    (categoryItem) => categoryItem.name.toLowerCase() === category.toLowerCase()
  );
  
  if (!validate) {
    NotFound();
  }

  return <h1>Category: {category}</h1>;
}