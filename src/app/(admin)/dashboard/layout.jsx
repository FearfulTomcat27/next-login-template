import { Sidebar } from "@/components";
const Layout = ({ children }) => {
  return (
    <div>
      {/* sidebar部分 */}
      <Sidebar />
      {/* 内容部分 */}
      <div>
        {/* header部分 */}

        {/* main部分 */}
        <main>{children}</main>
        {/* footer部分 */}
      </div>
    </div>
  );
};

export default Layout;
