import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(true);
  const [activeForm, setActiveForm] = useState(null);

  useEffect(() => {
    setOpen(true); // Auto-open on each reload
  }, []);

  const faqs = [
    { q: "What is the project location?", a: "The project is located in Gowrelly with ORR connectivity." },
    { q: "Do you provide site visits?", a: "Yes, guided site visits are available with prior booking." },
    { q: "What amenities are included?", a: "We offer clubhouse, gym, sports court, parks, and more." },
    { q: "What is the price range?", a: "Pricing depends on plot size and orientation." },
    { q: "How can I book a villa?", a: "You can book via enquiry or direct site visit." }
  ];

  return (
    <>
      {/* CHAT BUTTON WHEN CLOSED */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed bottom-5 right-5 
            bg-[#203370] text-white 
            w-14 h-14 
            flex items-center justify-center 
            rounded-full shadow-xl 
            z-[9999]
            hover:scale-110 transition
          "
        >
          <MessageCircle size={30} />
        </button>
      )}

      {/* CHATBOT WIDGET */}
      {open && (
        <div
          className="
            fixed bottom-5 right-5 
            w-[90%] sm:w-80 
            bg-white rounded-xl shadow-2xl border 
            overflow-hidden 
            z-[9999]
            max-h-[80vh]
          "
        >
          {/* HEADER */}
          <div className="bg-[#203370] text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-semibold text-sm sm:text-base">AMR Legacy Support</h3>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 max-h-[50vh] overflow-y-auto">

            {/* SELECTION BUTTONS */}
            {!activeForm && (
              <div className="space-y-3">
                <button
                  onClick={() => setActiveForm("site")}
                  className="w-full bg-[#d1a32c] text-white py-3 rounded-lg font-medium hover:bg-[#b98c22] transition"
                >
                  Book a Site Visit
                </button>

                <button
                  onClick={() => setActiveForm("enquiry")}
                  className="w-full bg-[#203370] text-white py-3 rounded-lg font-medium hover:bg-[#1a2a5a] transition"
                >
                  Send an Enquiry
                </button>
              </div>
            )}

            {/* SITE VISIT FORM */}
            {activeForm === "site" && (
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-[#203370]">Book a Site Visit</h4>

                <input className="w-full border p-2 rounded" placeholder="Name" />
                <input className="w-full border p-2 rounded" placeholder="Phone" />
                <input className="w-full border p-2 rounded" placeholder="Email" />
                <input type="date" className="w-full border p-2 rounded" />

                <button className="w-full bg-[#d1a32c] text-white py-3 rounded-lg font-medium">
                  Submit
                </button>

                <button
                  onClick={() => setActiveForm(null)}
                  className="text-sm text-gray-600 underline w-full text-center"
                >
                  Back
                </button>
              </div>
            )}

            {/* ENQUIRY FORM */}
            {activeForm === "enquiry" && (
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-[#203370]">Send an Enquiry</h4>

                <input className="w-full border p-2 rounded" placeholder="Name" />
                <input className="w-full border p-2 rounded" placeholder="Phone" />
                <input className="w-full border p-2 rounded" placeholder="Email" />
                <textarea rows={3} className="w-full border p-2 rounded" placeholder="Message"></textarea>

                <button className="w-full bg-[#203370] text-white py-3 rounded-lg font-medium">
                  Submit
                </button>

                <button
                  onClick={() => setActiveForm(null)}
                  className="text-sm text-gray-600 underline w-full text-center"
                >
                  Back
                </button>
              </div>
            )}

            {/* FAQ SECTION */}
            <div className="mt-6">
              <h4 className="font-semibold text-[#203370] mb-3">Frequently Asked</h4>
              <div className="space-y-2">
                {faqs.map((f, index) => (
                  <details key={index} className="border rounded p-3 text-sm">
                    <summary className="cursor-pointer font-medium">{f.q}</summary>
                    <p className="mt-1 text-gray-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
