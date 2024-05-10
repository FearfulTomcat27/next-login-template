"use client";
import { Sidebar, Header } from "@/components";
import clsx from "clsx";
import { useGlobalStore } from "@/store";
const Layout = ({ children }) => {
  const { isCollapsed } = useGlobalStore();
  return (
    <div className='min-h-screen flex'>
      {/* sidebar部分 */}
      <Sidebar />
      {/* 内容部分 */}
      <div
        className={clsx("ml-72 h-[1200px] w-full min-h-screen", {
          "ml-16": isCollapsed,
        })}
      >
        {/* header部分 */}
        <Header />
        {/* main部分 */}
        <main>{children}</main>
        {/* footer部分 */}
      </div>
    </div>
  );
};

export default Layout;
