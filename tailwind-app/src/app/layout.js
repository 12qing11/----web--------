import "./globals.css"; // 修改为正确的相对路径
import Footer from "../components/Footer";

export const metadata = {
  title: "练习导航",
  description: "前端技术课程作业导航页",
};

// 确保只有一个默认导出
// 删除其他多余的 export default 声明
// 删除类似这样的重复导出
// export default RootLayout;
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