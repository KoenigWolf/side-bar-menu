"use client";

import { useState } from 'react';
import SidebarItem from './SidebarItem';
import { FaHome, FaCog, FaBell, FaFileAlt, FaTools, FaCamera, FaCloudSun, FaChevronLeft } from 'react-icons/fa';

const icons = {
  dashboard: FaHome,
  settings: FaCog,
  alerts: FaBell,
  reports: FaFileAlt,
  maintenance: FaTools,
  camera: FaCamera,
  weather: FaCloudSun,
  toggle: FaChevronLeft,
};

const menuItems = [
  { name: 'Dashboard', icon: 'dashboard', id: 'dashboard' },
  { name: 'Monitoring Settings', icon: 'settings', id: 'settings' },
  { name: 'Alert Log', icon: 'alerts', id: 'alerts' },
  { name: 'Log and Report', icon: 'reports', id: 'reports' },
  { name: 'Maintenance Management', icon: 'maintenance', id: 'maintenance' },
  { name: 'Camera Footage Link', icon: 'camera', id: 'camera' },
  { name: 'Meteorological Data Link', icon: 'weather', id: 'weather' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className={`bg-blue-900 text-white h-screen ${isCollapsed ? 'w-20' : 'w-64'} transition-width duration-300`}>
      <div
        className="flex items-center justify-center p-4 cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <icons.toggle className="w-6 h-6" />
      </div>
      {menuItems.map(item => {
        const IconComponent = icons[item.icon];
        return (
          <SidebarItem
            key={item.id}
            item={item}
            isActive={activeItem === item.id}
            isCollapsed={isCollapsed}
            IconComponent={IconComponent}
          />
        );
      })}
    </div>
  );
}
