// app/subscribe/page.tsx
import NewsletterForm from '../../components/newsLetterForm';

export default function SubscribePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">訂閱電子報</h1>
      <NewsletterForm />
    </div>
  );
}