import { Sidebar } from "@/components";
const Layout = ({ children }) => {
  return (
    <div className='min-h-screen relative flex overflow-hidden'>
      {/* sidebar部分 */}
      <Sidebar />
      {/* 内容部分 */}
      <div className='relative ml-72'>
        {/* header部分 */}

        {/* main部分 */}
        <main>{children}</main>
        {/* footer部分 */}
      </div>
    </div>
  );
};

export default Layout;
