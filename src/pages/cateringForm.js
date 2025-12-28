import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CateringForm() {
    const formRef = useRef();
    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false);
    const [countdown, setCountdown] = useState(10);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_a0rnzoa",
                "template_2tchb0t",
                formRef.current,
                "1_fpATBP2kGy7HEy6"
            )
            .then(() => {
                setSubmitted(true);
            })
            .catch((error) => {
                console.error(error);
                alert("Something went wrong. Please try again.");
            });
    };

    // Countdown + redirect
    useEffect(() => {
        if (!submitted) return;

        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        if (countdown === 0) {
            navigate("/");
        }

        return () => clearInterval(timer);
    }, [submitted, countdown, navigate]);

    return (
        <section
            id="catering-form"
            className="w-full bg-neutral-950 text-white px-6 py-24 min-h-[80vh]"
        >
            <div className="max-w-4xl mx-auto">
                <AnimatePresence mode="wait">

                    {/* FORM */}
                    {!submitted && (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h1 className="font-summer text-center text-[#FFB91D] text-[5rem] -mt-[6rem]">naked kitchen</h1>
                            <h2 className="font-benditos text-4xl md:text-5xl uppercase mb-6">
                                Catering Request
                            </h2>

                            <p className="text-neutral-400 mb-12 max-w-2xl">
                                Request catering for <strong>office lunches</strong>,
                                <strong> grazing boards</strong>, or
                                <strong> after-work mixers</strong>.
                                We’ll follow up within 1 - 4 hours.
                            </p>

                            <form
                                ref={formRef}
                                onSubmit={sendEmail}
                                className="grid md:grid-cols-2 gap-6"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className="bg-black border border-neutral-800 p-4 text-white"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="bg-black border border-neutral-800 p-4 text-white"
                                />

                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company / Organization"
                                    className="bg-black border border-neutral-800 p-4 text-white"
                                />

                                <select
                                    name="event_type"
                                    required
                                    className="bg-black border border-neutral-800 p-4 text-white"
                                >
                                    <option value="">Event Type</option>
                                    <option value="Office Lunch">Office Lunch</option>
                                    <option value="Grazing Board / Mixer">
                                        Grazing Board / Mixer
                                    </option>
                                    <option value="Corporate Event">Corporate Event</option>
                                    <option value="Other">Other</option>
                                </select>

                                <input
                                    type="date"
                                    name="event_date"
                                    required
                                    className="bg-black border border-neutral-800 p-4 text-white"
                                />

                                <input
                                    type="number"
                                    name="guest_count"
                                    placeholder="Estimated Guest Count"
                                    required
                                    className="bg-black border border-neutral-800 p-4 text-white"
                                />

                                <textarea
                                    name="message"
                                    placeholder="Tell us about your event (office lunch, mixer, grazing boards, timing, budget, etc.)"
                                    rows="5"
                                    className="md:col-span-2 bg-black border border-neutral-800 p-4 text-white"
                                />

                                <button
                                    type="submit"
                                    className="md:col-span-2 bg-[#FFB91D] text-black py-4 rounded-full font-benditos text-xl hover:scale-105 transition"
                                >
                                    Send Catering Request
                                </button>
                            </form>
                        </motion.div>
                    )}
                    {/* CONFIRMATION */}
                    {submitted && (
                        <motion.div
                            key="confirmation"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-center flex flex-col items-center justify-center min-h-[60vh]"
                        >
                        <h1 className="font-summer text-center text-[#FFB91D] text-[5rem] -mt-[6rem]">naked kitchen</h1>
                            <h2 className="font-benditos text-5xl uppercase mb-6">
                                Request Sent
                            </h2>

                            <p className="text-neutral-400 max-w-xl mb-8">
                                Thanks for reaching out. We’ve received your catering request
                                and will follow up within 1 - 4 hours.
                            </p>

                            <p className="text-md text-neutral-500 mb-10">
                                Returning to homepage in {countdown} seconds…
                            </p>

                            <button
                                onClick={() => navigate("/")}
                                className="bg-[#FFB91D] text-black px-10 py-4 rounded-full font-benditos text-xl hover:scale-105 transition"
                            >
                                Return Home Now
                            </button>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </section>
    );
}
