"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-2 p-2 rounded-lg bg-neutral-800/50 dark:bg-neutral-800/50">
        <div className="w-8 h-8" />
      </div>
    );
  }

  const themes = [
    { name: "light", icon: FiSun, label: "Light" },
    { name: "dark", icon: FiMoon, label: "Dark" },
    { name: "system", icon: FiMonitor, label: "System" },
  ];

  return (
    <div className="flex gap-2 p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800/50 border border-neutral-300 dark:border-gray-700">
      {themes.map(({ name, icon: Icon, label }) => (
        <button
          key={name}
          onClick={() => setTheme(name)}
          className={`p-2 rounded-md transition-all duration-200 ${
            theme === name
              ? "bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm"
              : "text-neutral-600 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white"
          }`}
          aria-label={`${label} mode`}
          title={`${label} mode`}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
}
