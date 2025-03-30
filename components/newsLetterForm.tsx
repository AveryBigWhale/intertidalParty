'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err); // Log the error
      setStatus('error');
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-intertidalDarkMain font-bold mb-2">閱讀電子報</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="請輸入電子郵件"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border text-intertidalDarkMain rounded-md"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md">
          訂閱
        </button>
      </form>
      {status === 'success' && <p className="text-green-600 mt-2">訂閱成功！</p>}
      {status === 'error' && <p className="text-red-600 mt-2">訂閱失敗，請稍後再試。</p>}
    </div>
  );
}