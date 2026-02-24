import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(true);
  const [activeForm, setActiveForm] = useState(null);

  // ⭐ New Success / Error Messages
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ⭐ Form Data for both forms
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
    subject: "",
  });

  useEffect(() => {
    setOpen(true);
  }, []);

  // 🚀 Universal Change Handler
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // 🚀 Send data to PHP
  const handleSubmit = async () => {
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch(
        "http://localhost/AMR-LEGACY-APP/backend/sendMail.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const result = await res.json();

      if (result.status === "success") {
        setSuccessMsg("Message sent successfully!");

        // Reset form
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
          date: "",
          subject: "",
        });

        setTimeout(() => setSuccessMsg(""), 4000);
      } else {
        setErrorMsg(result.message || "Mail sending failed!");
        setTimeout(() => setErrorMsg(""), 4000);
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Try again later.");
      setTimeout(() => setErrorMsg(""), 4000);
    }
  };

  const faqs = [
    { q: "What is the project location?", a: "The project is located in Gowrelly with ORR connectivity." },
    { q: "Do you provide site visits?", a: "Yes, guided site visits are available with prior booking." },
    { q: "What amenities are included?", a: "Clubhouse, gym, sports court, parks, and more." },
    { q: "What is the price range?", a: "Pricing depends on plot size and orientation." },
    { q: "How can I book a villa?", a: "You can book via enquiry or direct site visit." }
  ];

  return (
    <>
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

            {/* ⭐ SUCCESS / ERROR MESSAGE */}
            {successMsg && (
              <p className="bg-green-100 text-green-700 p-2 rounded mb-3 text-sm">
                {successMsg}
              </p>
            )}
            {errorMsg && (
              <p className="bg-red-100 text-red-700 p-2 rounded mb-3 text-sm">
                {errorMsg}
              </p>
            )}

            {/* BUTTONS */}
            {!activeForm && (
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setActiveForm("site");
                    setForm((f) => ({ ...f, subject: "Site Visit Request" }));
                  }}
                  className="w-full bg-[#d1a32c] text-white py-3 rounded-lg font-medium hover:bg-[#b98c22] transition"
                >
                  Book a Site Visit
                </button>

                <button
                  onClick={() => {
                    setActiveForm("enquiry");
                    setForm((f) => ({ ...f, subject: "General Enquiry" }));
                  }}
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

                <input
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="Name"
                />

                <input
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="Phone"
                />

                <input
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="Email"
                />

                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  className="w-full border p-2 rounded"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#d1a32c] text-white py-3 rounded-lg font-medium"
                >
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

                <input
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="Name"
                />

                <input
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="Phone"
                />

                <input
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="Email"
                />

                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="Message"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#203370] text-white py-3 rounded-lg font-medium"
                >
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

            {/* FAQ */}
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