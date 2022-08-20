import { client } from '@utils/shopifyClient'
import Image from 'next/image'
import Link from 'next/link'
const Shop = (props) => {
  
  return (
     <div>


{props.products?.map(
                (product) =>
                  (
                    <Link key={product.id} href={`shop/product/${product.id}`}>
                      <article>
                        <Image src={product.images[0].src} width={250}
                height={250}
                objectFit={'contain'} />
                        <section>
                          <header>
                            <div>{product.title}</div>
                          </header>
                        </section>
                      </article>
                     </Link>
                  )
)}
    

   

    </div>
  )
}
export const getServerSideProps = async (context) => {
  const products = await client.product.fetchAll(); // Fetch product
  const infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page
  const policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any 
  return {
   props: {
   infos: JSON.parse(JSON.stringify(infos)),
   policies: JSON.parse(JSON.stringify(policies)),
   products: JSON.parse(JSON.stringify(products)),
  },
 };

};


export default Shop;