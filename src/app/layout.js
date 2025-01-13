import "./globals.css";

export const metadata = {
  title: "Code Connect",
  description: "Umda rede social para devs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className>{children}</body>
    </html>
  );
}
