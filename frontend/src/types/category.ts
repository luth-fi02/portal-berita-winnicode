export interface Category{
    id: number;
    documentId: string;
    name: string;
}

export default interface CategoryQueryResponse {
    data: Category[];
}