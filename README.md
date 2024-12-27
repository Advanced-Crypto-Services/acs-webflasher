# ESP32 Firmware Flasher

A modern web application that allows users to flash firmware to ESP32 devices directly from their browser. Built with Next.js 13, TypeScript, and Shadcn UI.

## Features

- 🔌 Direct ESP32 device connection through Web Serial API
- 📁 Firmware file upload and validation
- ⚡ Real-time flashing progress monitoring
- 🌓 Dark/Light mode support
- 🎨 Modern, responsive UI with Shadcn/Radix components
- 💪 Type-safe development with TypeScript

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI / Radix UI
- **Theme:** Next-themes for dark/light mode
- **Language:** TypeScript
- **Deployment:** Static Export

## Getting Started

1. Clone the repository:

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx    # Root layout with theme provider
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/
│   ├── ui/          # Shadcn UI components
│   ├── header.tsx   # Application header
│   └── footer.tsx   # Application footer
└── public/
    └── ...         # Static assets
```

## Usage

1. Connect your ESP32 device to your computer
2. Click the "Connect" button to establish a connection
3. Select the appropriate COM port
4. Upload your firmware file (.bin)
5. Click "Flash" to begin the flashing process
6. Monitor the progress through the progress bar

## Development

The project uses Next.js with the App Router and static exports. Key files:

```typescript:app/layout.tsx
startLine: 1
endLine: 40
```

The main firmware flashing component:

```typescript:components/firmware-flasher.tsx
startLine: 1
endLine: 130
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
