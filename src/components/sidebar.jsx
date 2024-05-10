"use client";
import { useGlobalStore } from "@/store";
import { AppWindow, LayoutDashboard, Users, FolderClosed, File, CalendarCheck, PieChart, Settings, SquareArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SideBarItem } from "@/components";
import clsx from "clsx";
const Sidebar = () => {
  const { isCollapsed, setIsCollapsed } = useGlobalStore();
  return (
    <>
      <div className='fixed h-full font-bold'>
        <aside
          className={clsx("w-72 bg-background shadow h-full px-6 duration-200", {
            "px-0 w-16": isCollapsed,
          })}
        >
          <div className='flex flex-col justify-center'>
            {/* Logo部分 */}
            <div className='py-8 px-4 flex items-center overflow-hidden gap-1.5'>
              <AppWindow
                size={30}
                className={clsx("w-[30px] h-[30px]", {
                  "px-0": isCollapsed,
                })}
              />
              <h1
                className={clsx({
                  hidden: isCollapsed,
                })}
              >
                NextAdmin
              </h1>
            </div>
            {/* 菜单部分 */}
            <div>
              <ul className='flex flex-col gap-1.5'>
                <SideBarItem url='/dashboard' name='首页' icon={<LayoutDashboard />} />
                <SideBarItem url='/team' name='团队' icon={<Users />} />
                <SideBarItem url='/project' name='项目' icon={<FolderClosed />} />
                <SideBarItem url='/file' name='文件' icon={<File />} />
                <SideBarItem url='/log' name='日志' icon={<CalendarCheck />} />
                <SideBarItem url='/report' name='报告' icon={<PieChart />} />
                <SideBarItem url='/setting' name='设置' icon={<Settings />} />
              </ul>
            </div>
            {/* 底部伸缩按钮 */}
            <div
              className={clsx("absolute bottom-2 right-6", {
                "right-1": isCollapsed,
              })}
            >
              <Button
                onClick={() => {
                  setIsCollapsed(!isCollapsed);
                }}
                className={clsx("bg-foreground hover:bg-foreground/80", {
                  "": isCollapsed,
                })}
              >
                <SquareArrowLeft
                  className={clsx("duration-300", {
                    "rotate-180": isCollapsed,
                  })}
                />
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
