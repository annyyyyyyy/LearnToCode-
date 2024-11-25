import { useEffect, useState } from "react"
import { Card } from "../../../components"
import { getFeaturedList } from "../../../services";
import { toast } from "react-toastify";

export const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
      setProducts(data);
      } catch(error) {
        toast.error(error.message);
      }
    }
    fetchProducts();

  }, []);

    return (
      <section className="my-20">
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
          <div className="flex flex-wrap justify-center lg:flex-row">
              { products.map((prod) => (
                <Card key={prod.id} prod={prod} />
              )) }
          </div>
      </section>
    )
  }