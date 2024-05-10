"use client";
import clsx from "clsx";
import propsTypes from "prop-types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useGlobalStore } from "@/store";

const SideBarItem = ({ url, name, children, icon, ...props }) => {
  const path = usePathname();
  const { isCollapsed } = useGlobalStore();
  return (
    <li
      className={clsx("py-2 px-4 rounded-lg hover:cursor-pointer hover:bg-accent hover:text-accent-foreground", {
        "bg-foreground text-background shadow hover:bg-foreground hover:text-background": path === url,
        "px-0 w-8 h-8 flex justify-center items-center mx-auto": isCollapsed,
      })}
    >
      {isCollapsed ? (
        <Link href={url}>{icon}</Link>
      ) : (
        <>
          <Link href={url} className='flex gap-1'>
            {icon}
            {name}
          </Link>
        </>
      )}
    </li>
  );
};

SideBarItem.propTypes = {
  url: propsTypes.string,
  name: propsTypes.string,
  children: propsTypes.node,
  icon: propsTypes.node,
  props: propsTypes.object,
};

export default SideBarItem;
