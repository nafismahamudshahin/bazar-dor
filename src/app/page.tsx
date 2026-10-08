import { toBanglaNumber } from "@/commonFeatures";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import { IProductType } from "@/types/types";

const HomePage = async () => {
  "use cache"
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const products: IProductType[] = await res.json();
  const priceIncresesProducts = products.filter(p => p.change.dir.toLowerCase() == "up");
  const priceDecreaseProducts = products.filter(p => p.change.dir.toLowerCase() === "down");
  return (
    <section>
      <HeroBanner></HeroBanner>
      {/* price incress products list */}
      <div>
        <h3 className="text-2xl font-semibold py-3 mt-5">আজ দাম বেড়েছে</h3>
        <div className="grid grid-cols-3 gap-5">
          {
            priceIncresesProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
          }
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold py-3 mt-5">আজ দাম কমেছে</h3>
        <div className="grid grid-cols-3 gap-5">
          {
            priceDecreaseProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
          }
        </div>
      </div>

      <div>
        <div className="py-5 mt-5">
          <span className="text-2xl font-semibold">সব পণ্য</span>
          <p className="text-gray-500">{`মোট ${toBanglaNumber(products.length)}টি পণ্য দেখানো হচ্ছে`}</p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {
            products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default HomePage;