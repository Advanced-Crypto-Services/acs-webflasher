import FirmwareFlasher from '@/components/firmware-flasher';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          ESP32 Firmware Flasher
        </h1>
        <p className="text-xl text-muted-foreground">
          Flash firmware to your ESP32 device directly from your browser.
          Connect, select, and flash - it's that simple.
        </p>
      </div>
      <FirmwareFlasher />
    </div>
  );
}