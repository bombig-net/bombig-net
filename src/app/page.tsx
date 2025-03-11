"use client";

import { Button } from '@bombig/ui';

export default function Home() {
  return (
    <>
      <main className="p-4">
        <p className="mb-4 font-bold text-duck-400 text-2xl">@bombig/ui Component Test</p>
        <Button>Click me</Button>
      </main>
      <footer className="p-4">
        <p className="text-meteor-600">footer</p>
      </footer>
    </>
  );
}
