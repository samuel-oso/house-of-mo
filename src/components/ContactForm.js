"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setResult(null);

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.status) {
        setResult({ ok: true, msg: "Message sent successfully!" });
        form.reset();
      } else {
        setResult({ ok: false, msg: json.error?.message || "Something went wrong." });
      }
    } catch {
      setResult({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name *"
          required
          className="w-full border border-gray-200 px-4 py-3 font-serif text-[15px] text-[#666] focus:outline-none focus:border-gold transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          className="w-full border border-gray-200 px-4 py-3 font-serif text-[15px] text-[#666] focus:outline-none focus:border-gold transition-colors"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject *"
        required
        className="w-full border border-gray-200 px-4 py-3 font-serif text-[15px] text-[#666] focus:outline-none focus:border-gold transition-colors"
      />
      <textarea
        name="message"
        placeholder="Message *"
        rows={5}
        required
        className="w-full border border-gray-200 px-4 py-3 font-serif text-[15px] text-[#666] focus:outline-none focus:border-gold transition-colors resize-none"
      />

      {result && (
        <p className={`text-sm ${result.ok ? "text-green-600" : "text-red-600"}`}>
          {result.msg}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="font-sans bg-black border border-black text-white py-[12px] px-[30px] font-medium text-[12px] uppercase tracking-[2px] hover:bg-white hover:text-black transition-all duration-500 disabled:opacity-50"
      >
        {sending ? "SENDING..." : "SAY HELLO!"}
      </button>
    </form>
  );
}
