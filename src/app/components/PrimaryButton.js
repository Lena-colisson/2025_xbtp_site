// components/PrimaryButton.js
'use client';
import Link from 'next/link';

export default function PrimaryButton({ href = '#', children }) {
  return (
    <Link
      href={href}
      className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition font-semibold"
    >
      {children}
    </Link>
  );
}
