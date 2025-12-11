import React from "react";
import kim from "../../assets/images/racoonBlackBack-min.png";
import clem from "../../assets/images/goodFoodblackBack-min.png";
// import elec from "../../assets/images/electric.png";
const products = [
    {
        id: 1,
        image: kim,
        title: "NEVER GONNA OPEN",
        description: "RACOON ROBBER TEE. WE NEVER GONNA OPEN. Oversized back print with pocket logo printed on front. Printed on Comfort Colors Black Pocket Tee.",
        price: "$25 (INCLUDES TAX)",
        buybuttonid: "buy_btn_1Q76ydB3OInBaAUnmYU8xjBh",
        publishablekey: "pk_live_51NOKTIB3OInBaAUnvrJx5QEK7UKLkB1sRz2R9vixw3X7k0rxLGHmn4XT370M2NOtuQXsikfozTt2GnYteNfUjwbQ00lk56yFck",
    },
    {
        id: 2,
        image: clem,
        title: "GOOD FOOD, MAKES GOOD NEIGHBORS",
        description: "Original Logo Tee. Oversized back print with pocket logo printed on front Printed on Comfort Colors Black Pocket tee.",
        price: "$25 (INCLUDES TAX)",
        buybuttonid: "buy_btn_1PgS06B3OInBaAUnXs4Oh1lj",
        publishablekey: "pk_live_51NOKTIB3OInBaAUnvrJx5QEK7UKLkB1sRz2R9vixw3X7k0rxLGHmn4XT370M2NOtuQXsikfozTt2GnYteNfUjwbQ00lk56yFck",
    },
    // {
    //     id: 3,
    //     image: elec,
    //     title: "Electric Sando Tee",
    //     description: "The Electric Sando Tee with a oversized back print and a pocket chest print of just the tiger on front. Printed on Comfort colors white tee.",
    //     price: "$25",
    //     buybuttonid: "buy_btn_1PKLWxB3OInBaAUnRpZFl4hs",
    //     publishablekey: "pk_live_51NOKTIB3OInBaAUnvrJx5QEK7UKLkB1sRz2R9vixw3X7k0rxLGHmn4XT370M2NOtuQXsikfozTt2GnYteNfUjwbQ00lk56yFck",
    // },
];

const MerchPage = () => {

    return (
        <div className="merch min-h-screen p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-2xl shadow-lg items-center text-center">
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
