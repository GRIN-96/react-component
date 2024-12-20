import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: string }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/turn.js/4.1.0/turn.min.css"
                />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
