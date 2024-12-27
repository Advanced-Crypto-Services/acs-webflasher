export default function Footer() {
  return (
    <footer className='border-t'>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <div className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} ESP32 Firmware Flasher. All rights reserved.
          </div>
          <div className='flex space-x-6'>
            <a
              href='https://github.com/Advanced-Crypto-Services/acs-webflasher'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              GitHub
            </a>
            <a
              href='#'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              Support (TBD)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
