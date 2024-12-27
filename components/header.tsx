"use client";

import { Zap } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className='border-b'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Zap className='h-6 w-6 text-[#75FBA6]' />
            <span className='text-xl font-bold'>ESP32 Firmware Flasher</span>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
