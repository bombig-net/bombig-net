import { defaultLocale } from '@/lib/i18n/settings';
import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the default locale
  redirect(`/${defaultLocale}`);
}
