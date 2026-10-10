import CategoryPage from "@/components/CategoryPage";
import { IProductType } from "@/types/types";
import { Suspense } from "react";

async function CategoryContent({ params, }: { params: Promise<{ categoryid: string }> }) {
    const { categoryid } = await params;
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${categoryid}`);
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    const category: IProductType[] = await res.json();
    return <CategoryPage category={category} />;
}


const CategoryDetailsPage = ({ params, }: { params: Promise<{ categoryid: string }>; }) => {

    return (
        <section>
            <Suspense fallback="loading...">
                <CategoryContent params={params} />
            </Suspense>
        </section>
    );
};

export default CategoryDetailsPage;