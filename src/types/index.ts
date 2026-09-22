export type Category = 'All' | 'Electronics' | 'Home' | 'Lifestyle' | 'Accessories';
export interface Product { id:number; name:string; category:Exclude<Category,'All'>; price:number; rating:number; reviews:number; image:string; badge?:string; description:string; }
