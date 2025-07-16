"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

export default function BuyPinPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [pin] = useState("");

  const handleGoToLogin = () => {
    router.push("/");
  };

  const [, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Call your API to initiate payment
    try {
      const res = await fetch("/api/buy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          clientReference: `MH25_${Date.now()}`.slice(0, 32),
          description: "Mama Hogbe 2025 Registration Form Purchase",
        }),
      });
      const data = await res.json();
      if (!res.ok || (!data.checkoutUrl && !data.checkoutUrl)) {
        // Log the full response for debugging
        console.error("Payment API error response:", data);
        setError(data.error || "Failed to initiate payment.");
        setLoading(false);
        return;
      }
      setLoading(false);
      // Use checkoutDirectUrl for onsite/iframe integration
      const iframeUrl = data.checkoutDirectUrl;
      if (iframeUrl) {
        // Add merchant and amount info above the iframe modal
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100vw";
        modal.style.height = "100vh";
        modal.style.background = "rgba(0,0,0,0.7)";
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.style.zIndex = "9999";
        modal.innerHTML = `
          <div style="background:#fff;border-radius:1rem;max-width:600px;width:100%;height:700px;position:relative;box-shadow:0 8px 32px rgba(0,0,0,0.2);display:flex;flex-ion:column;">
            <button id="close-hubtel-iframe" style="position:absolute;top:10px;right:20px;font-size:2rem;background:none;border:none;cursor:pointer;z-index:2;">&times;</button>
            <iframe src="${iframeUrl}" style="width:100%;height:100%;border:none;border-radius:1rem;flex:1;" allow="payment *"></iframe>
          </div>
        `;
        document.body.appendChild(modal);
        document
          .getElementById("close-hubtel-iframe")
          ?.addEventListener("click", () => {
            document.body.removeChild(modal);
          });
      } else {
        setError("Payment link not available. Please try again.");
      }
      return;
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-white text-black">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold">Mama Hogbe 2025 Portal</h1>
          <h2 className="text-lg text-gray-700">Buy Registration PIN</h2>
        </div>

        {/* Logo or Banner Image */}

        <Image
          src="/Banner.jpg"
          alt="Mama Hogbe Banner"
          width={600}
          height={100}
          className="w-full h-30 object-cover rounded"
        />

        {pin ? (
          <div className="space-y-4 text-center">
            <p className="text-lg font-medium">
              🎉 Your PIN is:{" "}
              <span className="font-bold text-black">{pin}</span>
            </p>
            <p className="text-sm text-gray-600">
              Use this PIN to log in and complete your registration.
            </p>
            <button
              onClick={handleGoToLogin}
              className="w-full bg-black text-white py-2 rounded hover:opacity-90 transition"
            >
              Proceed to Login
            </button>
          </div>
        ) : (
          <form
            // onSubmit={handleBuyPin}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="2335XXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded hover:opacity-90 transition"
            >
              {loading ? "Processing..." : "Buy PIN (GH₵ 100)"}
            </button>
          </form>
        )}
        {/* Footer: Powered by Sendexa */}
        <div className="text-center text-xs text-gray-500">
          <p>
            Powered by{" "}
            <a
              href="https://sendexa.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Sendexa LLC
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
