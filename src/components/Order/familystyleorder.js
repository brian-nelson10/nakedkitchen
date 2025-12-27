import { useState } from "react";
import { MENU, TAX_RATE } from "./menu";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
export default function FamilyMealOrder({ setConfirmedOrder }) {
    const navigate = useNavigate();
    const [guest, setGuest] = useState({
        name: "",
        phone: "",
        email: "",
        notes: "",
    });

    const [mains, setMains] = useState({});
    const [sides, setSides] = useState([]);

    /* -------------------------
       Pricing: MAINS ONLY
    -------------------------- */
    const subtotal = Object.entries(mains).reduce((sum, [id, qty]) => {
        const item = MENU.find(i => i.id === Number(id));
        return sum + item.price * qty;
    }, 0);

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    /* -------------------------
       Side selection (max 3)
    -------------------------- */
    const toggleSide = (id) => {
        if (sides.includes(id)) {
            setSides(sides.filter(s => s !== id));
        } else if (sides.length < 3) {
            setSides([...sides, id]);
        }
    };

    /* -------------------------
       Submit
    -------------------------- */
    const submitOrder = () => {
        if (
            !guest.name ||
            !guest.phone ||
            !guest.email ||
            subtotal === 0 ||
            sides.length !== 3
        ) {
            alert("Please complete all fields, add a main, and select 3 sides.");
            return;
        }

        const mainRows = MENU
            .filter(item => mains[item.id])
            .map(
                item => `
        <tr>
          <td>${item.name}</td>
          <td align="right">${mains[item.id]}</td>
        </tr>
      `
            )
            .join("");

        const sideList = sides
            .map(id => MENU.find(i => i.id === id)?.name)
            .join(", ");

        emailjs.send(
            "service_a0rnzoa",
            "template_7whofrh",
            {
                name: guest.name,
                phone: guest.phone,
                email: guest.email,
                notes: `${guest.notes || "None"} | Sides: ${sideList}`,
                order: mainRows,
                subtotal: subtotal.toFixed(2),
                tax: tax.toFixed(2),
                total: total.toFixed(2),
                order_time: new Date().toLocaleString(),
            },
            "1_fpATBP2kGy7HEy6"
        );

        setConfirmedOrder({
            guest,
            order: mains,
            subtotal,
            tax,
            total,
        });
        navigate("/confirmation");
    };

    return (
        <div className="max-w-xl mx-auto p-6 space-y-10">
            <h1 className="font-summer text-center text-[#FD3E31] text-[5rem] -my-[4rem]">
                naked kitchen
            </h1>
            <h1 className="text-3xl uppercase font-roboto tracking-[.1rem] text-center font-bold">
                Family Meal Order
            </h1>
            <div className="space-y-2">
            <h2 className="text-sm md:text-md uppercase font-roboto tracking-[.1rem] text-center font-semibold">
                24 Hour Notice!
            </h2>
            <h2 className="text-sm md:text-md uppercase font-roboto tracking-[.1rem] text-center font-semibold">
                SAME DAY ORDER AVAILABLE IF PLACED IN THE MORNING!
            </h2>
            </div>
            {/* ---------------- MAINS ---------------- */}
            <div className="space-y-4">
                <h2 className="text-xl font-roboto font-semibold uppercase text-center tracking-[.2rem] border-b-[.5rem] border-[#FFB91D] pb-1">
                    Main
                </h2>

                {MENU.filter(i => i.category === "Main").map(item => (
                    <div key={item.id} className="border border-gray-500 p-4 rounded-xl">
                        <div className="flex justify-between">
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                            <p>${item.price}</p>
                        </div>

                        <input
                            type="number"
                            min="0"
                            placeholder="Qty"
                            className="mt-2 w-20 border border-gray-500 rounded px-2 py-1"
                            onChange={e =>
                                setMains({
                                    ...mains,
                                    [item.id]: Number(e.target.value),
                                })
                            }
                        />
                    </div>
                ))}
            </div>

            {/* ---------------- SIDES ---------------- */}
            <div className="space-y-4">
                <h2 className="text-xl font-roboto font-semibold uppercase text-center tracking-[.2rem] border-b-[.5rem] border-[#FFB91D] pb-1">
                    Choose 3 Sides
                </h2>

                <p className="text-center text-sm text-gray-500">
                    Included with your family meal
                </p>

                {MENU.filter(i => i.category === "Sides").map(item => (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleSide(item.id)}
                        className={`w-full text-left border p-4 rounded-xl transition
              ${sides.includes(item.id)
                                ? "bg-[#FFB91D] border-black"
                                : "border-gray-500"
                            }`}
                    >
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </button>
                ))}

                <p className="text-center font-semibold">
                    {sides.length} / 3 selected
                </p>
            </div>

            {/* ---------------- GUEST INFO ---------------- */}
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
                onChange={e => setGuest({ ...guest, email: e.target.value })}
            />

            <textarea
                placeholder="Special instructions"
                className="w-full border border-gray-400 p-2 rounded"
                onChange={e => setGuest({ ...guest, notes: e.target.value })}
            />

            {/* ---------------- TOTAL ---------------- */}
            <div className="text-right">
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p className="font-bold text-xl">Total: ${total.toFixed(2)}</p>
            </div>

            <button
                onClick={submitOrder}
                className="w-full bg-[#FFB91D] text-black font-semibold py-3 rounded-xl hover:opacity-90"
            >
                Confirm Family Meal
            </button>
        </div>
    );
}
