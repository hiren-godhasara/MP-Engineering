import MainProducts from "../../../component/mainProducts/MainProducts";

export const revalidate = 0
const fetchProductsData = async (paramId: any) => {
    try {
        const response = await fetch(`https://dev-api.mydryfruit.com/s/product/${paramId}`, {
            method: 'GET',
            cache: 'no-store',
            next: { revalidate: 0 },
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
        throw error;
    }
}

export default async function Page({ params }: any) {
    console.log(params, '---------------');

    const productsData: any = await fetchProductsData(params.product.toLowerCase())
    console.log(productsData, 'productsData');


    return (
        <div>

            <MainProducts />


        </div>
    );
}

