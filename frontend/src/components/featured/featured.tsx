import getStrapiData, { featuredQuery } from '@/lib/strapi';
import Client from '.';
import { FeaturedQueryResponse } from '@/types/featured';

export default async function Featured() {
    const strapiData = await getStrapiData<FeaturedQueryResponse>('/api/home-page', featuredQuery)

    return (
        <Client strapiData = {strapiData}/>
    )
}
