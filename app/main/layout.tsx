import Header from "@/lib/components/supported/header/header";
import NavBar from "@/lib/components/supported/navbar/navbar";
import { Wrapper } from "../wrapper";

export const metadata = {
  title: "Админ-панель",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="h-full bg-white">
        <Wrapper>
          <Header />
          <NavBar />
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              {children}
            </div>
          </div>
        </Wrapper>
      </body>
    </html>
  );
}