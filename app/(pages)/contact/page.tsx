"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, eventType, date, guests, message }),
    }).then((res) => {
      if (res.ok) {
        console.log("Demande de contact envoyée avec succès");
      } else {
        console.error("Erreur lors de l'envoi de la demande de contact");
      } 
    });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleEventTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEventType(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuests(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">Demander une animation</h1>
          <p className="mb-12 text-xl text-gray-600">
            Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement pour discuter
            de votre événement.
          </p>

          <form className="space-y-6 rounded-lg border bg-gray-50 p-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block font-semibold text-gray-900">
                Nom *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={handleNameChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-semibold text-gray-900">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-semibold text-gray-900">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="event-type" className="mb-2 block font-semibold text-gray-900">
                Type d&apos;événement *
              </label>
              <select
                id="event-type"
                name="event-type"
                required
                value={eventType}
                onChange={handleEventTypeChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-900"
              >
                <option value="">Sélectionnez un type</option>
                <option value="mariage">Mariage</option>
                <option value="anniversaire">Anniversaire</option>
                <option value="famille">Événement familial</option>
                <option value="amis">Soirée entre amis</option>
                <option value="communautaire">Événement communautaire</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="mb-2 block font-semibold text-gray-900">
                Date de l&apos;événement
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-900"
                value={date}
                onChange={handleDateChange}
              />
            </div>

            <div>
              <label htmlFor="guests" className="mb-2 block font-semibold text-gray-900">
                Nombre d&apos;invités (approximatif)
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-900"
                value={guests}
                onChange={handleGuestsChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-semibold text-gray-900">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Décrivez votre événement, vos attentes, vos questions..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-900"
                value={message}
                onChange={handleMessageChange}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Envoyer la demande
            </button>

            <p className="text-center text-sm text-gray-600">
              * Champs obligatoires. Nous vous répondrons dans les plus brefs délais.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
