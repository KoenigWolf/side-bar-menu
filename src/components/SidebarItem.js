"use client";

import Link from 'next/link';
import classNames from 'classnames';

export default function SidebarItem({ item, isActive, isCollapsed, IconComponent }) {
  return (
    <Link href={`/${item.id}`} passHref>
      <div className={classNames('flex items-center p-4 cursor-pointer', { 'bg-blue-600': isActive })}>
        <IconComponent className="w-6 h-6 mr-2" />
        {!isCollapsed && <span>{item.name}</span>}
      </div>
    </Link>
  );
}
