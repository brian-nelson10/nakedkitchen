import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MENU } from "./menu";
import TypewriterText from "./typwriter";
import LocationMap from "./location";
export default function Confirmation({ data, reset }) {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            reset();
            navigate("/"); 
        }, 30000);

        return () => clearTimeout(timer);
    }, [reset]);

    return (
        <div className="max-w-xl mx-auto p-6 text-center space-y-2">
           <h1 className="font-summer text-center text-[#FD3E31] text-[5rem]">naked kitchen</h1>
            <h1 className="text-3xl uppercase font-roboto tracking-[.1rem] text-center font-bold">Online order</h1>
            <p className="font-roboto text-2xl font-bold mt-2 uppercase text-center">Thank you, {data.guest.name}.</p>

            <div className="text-left border p-4 rounded-xl">
                <p className="font-semibold text-xl mb-2">Order Summary</p>
                {Object.entries(data.order).map(([id, qty]) => {
                    const item = MENU.find(i => i.id === Number(id));
                    if (!item || qty === 0) return null;

                    return (
                        <p key={id}>
                            {item.name} x {qty}
                        </p>
                    );
                })}
                <hr className="my-2 border border-black" />
                <p className="mt-2">Subtotal: ${data.subtotal.toFixed(2)}</p>
                <p>Tax: ${data.tax.toFixed(2)}</p>
                <p className="font-bold">Total: ${data.total.toFixed(2)}</p>
            </div>
            <div className="font-roboto font-semibold text-xl">PLEASE PICK UP YOUR FOOD AT:</div>
            <TypewriterText />
            <LocationMap /> 
        </div>
    );
}
