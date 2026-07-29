import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Mission from '@/components/home/Mission';
import Stats from '@/components/home/Stats';
import Programmes from '@/components/home/Programmes';
import SuccessStories from '@/components/home/SuccessStories';
import Partners from '@/components/home/Partners';
import Newsletter from '@/components/home/Newsletter';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Stats />
      <Programmes />
      <SuccessStories />
      <Partners />
      <Newsletter />
    </>
  );
}
