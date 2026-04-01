export default function RootLayout({ children }: { children: React.ReactNode }) {
  const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY;
  const VALID_KEY = "my-secure-certificate-123";

  const isAllowed = SITE_KEY === VALID_KEY;

  return (
    <html lang="en">
      <body>
        {!isAllowed ? (
          <div className="flex items-center justify-center h-screen bg-black text-white text-center px-4">
            <div>
              <h1 className="text-2xl font-bold mb-4">
                🚫 Website Unavailable
              </h1>
              <p className="text-gray-400">
                Validate with your certificate provider to gain access.
              </p>
            </div>
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
