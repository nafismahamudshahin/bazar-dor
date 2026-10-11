
import ProductDetailsCard from "@/components/ProductDetailsCard";
import { IProductType } from "@/types/types";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function ProductContent({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

    if (!res.ok)
        throw new Error("Failed to fetch products");

    const products: IProductType[] = await res.json();
    const product = products.find((p) => p.slug === slug);

    if (!product)
        notFound();
    const maxPrice = Math.max(...product.markets.map((m) => Number(m.max)));
    const minPrice = Math.min(...product.markets.map((m) => Number(m.min)));
    return <ProductDetailsCard product={product} maxPrice={maxPrice} minPrice={minPrice} />
}

const ProductDetailsPage = ({ params }: { params: Promise<{ slug: string }> }) => {
    return (
        <section>
            <Suspense fallback={<p className="p-4">Loading product...</p>}>
                <ProductContent params={params} />
            </Suspense>
        </section>
    );
};

export default ProductDetailsPage;
