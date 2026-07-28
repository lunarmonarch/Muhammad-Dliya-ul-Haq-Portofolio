import React, { useState } from 'react';

const FORM_ENDPOINT = 'https://formspree.io/f/your-form-id'; // <-- replace with your Formspree endpoint

export default function ContactForm() {
  const [status, setStatus] = useState('');
  return (
    <form
      action={FORM_ENDPOINT}
      method="POST"
      className="max-w-xl mx-auto flex flex-col gap-4"
    >
      <input name="name" placeholder="Name" required className="border p-2 rounded" />
      <input name="email" type="email" placeholder="Email" required className="border p-2 rounded" />
      <textarea name="message" rows="5" placeholder="Message" required className="border p-2 rounded" />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}