import { motion } from "framer-motion";
import NewButton from "../Button/newbutton";
import { useNavigate } from "react-router-dom";
export default function CateringLanding() {
    const navigate = useNavigate();
    return (
        <section className="w-full bg-black text-white px-6 py-24">
            <div className="max-w-6xl mx-auto">

                {/* HERO */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h1 className="font-benditos text-5xl md:text-7xl uppercase tracking-tight">
                        Office Catering &<br />Grazing Boards
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg text-neutral-300">
                        Bold, farm-driven catering for <strong>office lunches</strong>,
                        <strong> corporate meetings</strong>, and
                        <strong> after-work mixers</strong>.
                        Naked Kitchen delivers elevated street food and grazing boards
                        people actually talk about.
                    </p>
                </motion.div>

                {/* FEATURES */}
                <div className="grid md:grid-cols-3 gap-10 mb-24">
                    {[
                        {
                            title: "Office Lunch Catering",
                            text: "Fast, flexible catering for teams of 10–200. Perfect for recurring office lunches, meetings, and staff celebrations."
                        },
                        {
                            title: "Grazing Boards & Mixers",
                            text: "Large-format grazing boards built for after-work get togethers, networking events, and creative mixers."
                        },
                        {
                            title: "Local & Farm-Forward",
                            text: "We source from local farms and vendors whenever possible — better food, better impact."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-neutral-800 p-6 hover:border-[#FFB91D] transition"
                        >
                            <h3 className="font-benditos text-2xl mb-3 uppercase">
                                {item.title}
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* STYLE SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="font-benditos text-4xl md:text-5xl mb-6 uppercase">
                        Our Catering Style
                    </h2>

                    <ul className="grid md:grid-cols-2 gap-4 text-neutral-300">
                        <li>• Build-your-own bowl spreads</li>
                        <li>• Street-inspired handhelds</li>
                        <li>• Grazing boards for mixers & happy hours</li>
                        <li>• Seasonal vegetables & bold sauces</li>
                        <li>• Vegetarian & vegan-friendly options</li>
                        <li>• Designed for sharing, not chafing dishes</li>
                    </ul>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="border-t border-neutral-800 pt-16"
                >
                    <h3 className="font-benditos text-3xl uppercase mb-4">
                        Let’s Feed Your Team
                    </h3>
                    <p className="text-neutral-400 max-w-xl mb-8">
                        Booking office catering, grazing boards, and after-work events
                        throughout Jacksonville. Pickup, delivery, and full service available.
                    </p>

                    {/* <a
            href="#catering-form"
            className="inline-block bg-[#FFB91D] text-black px-10 py-4 rounded-full font-benditos text-xl hover:scale-105 transition"
          >
            Request Catering
          </a> */}
                    <NewButton onClick={() => navigate("/cateringform")}>
                        Request Catering
                    </NewButton>
                </motion.div>
            </div>
        </section>
    );
}
