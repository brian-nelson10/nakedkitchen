import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import GalleryHero from "../components/MenuHero/gallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import kungPaoBrussels from "../assets/images/brusselsYellow.png";
import kimchiGrilledCheese from "../assets/images/kimchiPink.png";
// import kimchiPotatoes from "../assets/kimchi-potatoes.jpg";
import friedChickenSliders from "../assets/images/chxSliders.png";

const menuItems = [
    { id: 1, name: "Kung Pao Brussels", image: kungPaoBrussels },
    { id: 2, name: "Kimchi Grilled Cheese", image: kimchiGrilledCheese },
    //   { id: 3, name: "Kimchi Potatoes", image: kimchiPotatoes },
    { id: 4, name: "Fried Chicken Sliders", image: friedChickenSliders },
    ...Array.from({ length: 11 }, (_, i) => ({
        id: i + 5,
        name: `Menu Item ${i + 5}`,
        image: `/images/placeholder-${i + 5}.jpg`
    }))
];

export default function Gallery() {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="scroll h-[100%] w-[100%] overflow-hidden font-benditos text-gray-800 grass">
            <section className="z-50">
                <Navbar />
            </section>
            <section className="grid grid-rows-3 w-screen text-center h-[67rem] z-40 px-[2rem] pt-[20rem] -space-y-[10rem] grass">
                <GalleryHero />
            </section>
            <section className="relative h-fit overflow-hidden bg-transparent bg-[#F6B092]">
            <div className="grass grid grid-cols-3 md:grid-cols-5 gap-[4rem]">
                {menuItems.map(item => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow hover:shadow-md cursor-pointer overflow-hidden"
                        onClick={() => setSelectedItem(item)}
                    >
                        <img src={item.image} alt={item.name} className="w-full h-28 object-cover" />
                        <div className="p-2 text-sm text-center font-medium">{item.name}</div>
                    </div>
                ))}
            </div>

            <Dialog open={!!selectedItem} onClose={() => setSelectedItem(null)} className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

                {selectedItem && (
                    <div className="bg-white rounded-xl overflow-hidden shadow-xl z-10 max-w-md w-full relative">
                        <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-64 object-cover" />
                        <div className="p-4 text-lg font-semibold text-center border-t">{selectedItem.name}</div>
                        <button
                            className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100"
                            onClick={() => setSelectedItem(null)}
                        >
                            ✕
                        </button>
                    </div>
                )}
            </Dialog>
            </section>
            <section className="mt-[20rem]">
                <Footer />
            </section>
        </div>
    );
}
