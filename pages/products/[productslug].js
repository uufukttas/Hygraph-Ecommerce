import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Image from 'next/image';

const singleproduct = ({ product }) => {
    console.log(product.image.url)
    return (
        <div className="container single-container">
            <div className="left-section">
                <Image src={product.image.url} width={700} height={700} alt="" />
            </div>
            <div className="right-section">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: product.description.html,
                    }}
                ></div>
                <a className="btn">Add to cart 🛒</a>
            </div>
        </div>
    );
};

export default singleproduct;


export async function getStaticProps({ params }) {
    const client = new ApolloClient({
        uri: process.env.NEXT_PUBLIC_HYGRAPH_API_URL,
        cache: new InMemoryCache(),
    });

    const data = await client.query({
        query: gql`
          query MyQuery($slug: String) {
             product(where: { slug: $slug }) {
                id
                name
                price
                slug
                description {
                   html
                }
                image {
                   url
                }
             }
          }
       `,
        variables: {
            slug: params.productslug,
        },
    });

    const product = data.data.product;
    return {
        props: {
            product,
        },
    };
};

export async function getStaticPaths() {
    const client = new ApolloClient({
        uri: process.env.NEXT_PUBLIC_HYGRAPH_API_URL,
        cache: new InMemoryCache(),
    });
    const data = await client.query({
        query: gql`
          query ProductsQuery {
             products {
                id
                name
                slug
                price
                image {
                   url
                }
             }
          }
       `,
    });

    const paths = data.data.products.map((singleProduct) => {
        return {
            params: {
                productslug: singleProduct.slug,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};