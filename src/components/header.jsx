"use client";
import { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DarkModeSwitcher } from "@/components";
import { SearchInput } from "@/components";

const Header = ({ className, ...props }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <header className='border-b sticky top-0'>
        <div className='h-16 px-4 shadow flex items-center'>
          <div className='ml-auto w-80 flex items-center gap-2'>
            {/* <Input placeholder='请输入搜索内容' /> */}
            <SearchInput
              value={searchValue}
              placeholder='请输入搜索内容'
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <DarkModeSwitcher />
            <Avatar>
              <AvatarImage src='https://ui.shadcn.com/avatars/01.png' />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
