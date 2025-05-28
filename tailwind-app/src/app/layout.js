import "../globals.css"; // 相对于 app 目录的路径
import Footer from "../components/Footer";

export const metadata = {
  title: "练习导航",
  description: "前端技术课程作业导航页",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}