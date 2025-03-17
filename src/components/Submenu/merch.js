import React from "react";
import kim from "../../assets/images/kim.png";
import clem from "../../assets/images/clem.png";
import elec from "../../assets/images/electric.png";
const products = [
    {
        id: 1,
        image: kim,
        title: "Kimchi Grilled Cheese Tee",
        description: "Kimchi grilled cheese shirt reppin' Godzilla, Ultraman, and a Kaiju. Oversized back print with pocket Naked Kitchen Logo on front. Printed on Comfort Colors black pocket tee.",
        price: "$25",
        buybuttonid: "buy_btn_1Q76ydB3OInBaAUnmYU8xjBh",
        publishablekey: "pk_live_51NOKTIB3OInBaAUnvrJx5QEK7UKLkB1sRz2R9vixw3X7k0rxLGHmn4XT370M2NOtuQXsikfozTt2GnYteNfUjwbQ00lk56yFck",
    },
    {
        id: 2,
        image: clem,
        title: "Clementine Tee",
        description: "Clementine tee with oversized back print and pocket sized clementine on front. Printed on Comfort Colors white tee.",
        price: "$25",
        buybuttonid: "buy_btn_1PgS06B3OInBaAUnXs4Oh1lj",
        publishablekey: "pk_live_51NOKTIB3OInBaAUnvrJx5QEK7UKLkB1sRz2R9vixw3X7k0rxLGHmn4XT370M2NOtuQXsikfozTt2GnYteNfUjwbQ00lk56yFck",
    },
    {
        id: 3,
        image: elec,
        title: "Electric Sando Tee",
        description: "The Electric Sando Tee with a oversized back print and a pocket chest print of just the tiger on front. Printed on Comfort colors white tee.",
        price: "$25",
        buybuttonid: "buy_btn_1PKLWxB3OInBaAUnRpZFl4hs",
        publishablekey: "pk_live_51NOKTIB3OInBaAUnvrJx5QEK7UKLkB1sRz2R9vixw3X7k0rxLGHmn4XT370M2NOtuQXsikfozTt2GnYteNfUjwbQ00lk56yFck",
    },
];

const MerchPage = () => {

    return (
        <div className="merch min-h-screen p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-2xl shadow-lg">
                        <div className="h-100 bg-gray-200 flex justify-center items-center rounded-lg">
                            <img src={product.image} alt={product.title} className="h-full w-full object-cover rounded-lg" />
                        </div>
                        <h2 className="mt-4 text-xl font-semibold font-benditos">{product.title}</h2>
                        <p className="mt-2 text-gray-600 font-poppins">{product.description}</p>
                        <p className="mt-4 mb-4 text-xl font-bold font-poppins">{product.price}</p>
                        <stripe-buy-button
                            buy-button-id={product.buybuttonid}
                            publishable-key={product.publishablekey}
                            >
                        </stripe-buy-button>
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default MerchPage;
