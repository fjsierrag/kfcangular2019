export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    reviews: number;
    rating: 5;
    description?: string;
    image?: string;
    publishedDate?: Date;
}
