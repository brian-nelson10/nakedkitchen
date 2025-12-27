import { useState } from "react";
import { MENU, TAX_RATE } from "./menu";
import emailjs from "@emailjs/browser";
import NewButton from "../Button/newbutton";
import { useNavigate } from "react-router-dom";
export default function OrderForm({ onConfirm }) {
    const navigate = useNavigate();
    const [guest, setGuest] = useState({
        name: "",
        phone: "",
        email: "",
        notes: "",
    });

    const [order, setOrder] = useState({});

    const subtotal = Object.entries(order).reduce((sum, [id, qty]) => {
        const item = MENU.find(i => i.id === Number(id));
        return sum + item.price * qty;
    }, 0);

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    const submitOrder = () => {
        if (!guest.name || !guest.phone || !guest.email || subtotal === 0) {
            alert("Please complete all fields and add at least one item.");
            return;
        }
        const orderDetails = MENU
            .filter(item => order[item.id])
            .map(
                item => `
      <tr>
        <td>${item.name}</td>
        <td align="right">${order[item.id]}</td>
      </tr>
    `
            )
            .join("");
        emailjs.send(
            "service_a0rnzoa",
            "template_7whofrh",
            {
                name: guest.name,
                phone: guest.phone,
                email: guest.email,
                notes: guest.notes || "None",
                order: orderDetails,
                subtotal: subtotal.toFixed(2),
                tax: tax.toFixed(2),
                total: total.toFixed(2),
                order_time: new Date().toLocaleString(),
            },
            "1_fpATBP2kGy7HEy6"
        );

        onConfirm({
            guest,
            order,
            subtotal,
            tax,
            total,
        });
    };

    const categories = [
        "For Sharing",
        "Handhelds",
        "Bowls",
        "Sides",
        "Dessert",
    ]

    return (
        <div className="max-w-xl mx-auto p-6 space-y-10">
            <h1 className="font-summer text-center text-[#FD3E31] text-[5rem] -my-[4rem]">naked kitchen</h1>
            <h1 className="text-3xl uppercase font-roboto tracking-[.1rem] text-center font-bold">Online order</h1>
            <div className="m-10 text-center">
            <NewButton onClick={() => navigate("/family")}>
                Family Meal Order
            </NewButton>
            </div>
            {categories.map(category => (
                <div key={category} className="space-y-4">
                    <h2 className="text-xl font-roboto font-semibold uppercase text-center tracking-[.2rem] border-b-[.5rem] border-[#FFB91D] pb-1">
                        {category}
                    </h2>

                    {MENU.filter(item => item.category === category).map(item => (
                        <div key={item.id} className="border border-gray-500 p-4 rounded-xl">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                                <p>${item.price}</p>
                            </div>

                            <input
                                type="number"
                                min="0"
                                placeholder="Qty"
                                className="mt-2 w-20 border border-gray-500 rounded px-2 py-1"
                                onChange={e =>
                                    setOrder({
                                        ...order,
                                        [item.id]: Number(e.target.value),
                                    })
                                }
                            />
                        </div>
                    ))}
                </div>
            ))}
            <input
                placeholder="Name"
                className="w-full border border-gray-400 p-2 rounded"
                onChange={e => setGuest({ ...guest, name: e.target.value })}
            />

            <input
                placeholder="Phone Number"
                className="w-full border border-gray-400 p-2 rounded"
                onChange={e => setGuest({ ...guest, phone: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-400 p-2 rounded"
                required
                onChange={e => setGuest({ ...guest, email: e.target.value })}
            />

            <textarea
                placeholder="Special instructions"
                className="w-full border border-gray-400 p-2 rounded"
                onChange={e => setGuest({ ...guest, notes: e.target.value })}
            />

            <div className="text-right">
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p className="font-bold text-xl">Total: ${total.toFixed(2)}</p>
            </div>

            <button
                onClick={submitOrder}
                className="w-full bg-[#FFB91D] text-black font-semibold py-3 rounded-xl hover:opacity-90"
            >
                Confirm Order
            </button>
        </div>
    );
}
