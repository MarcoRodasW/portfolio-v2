"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const themes = ["light", "dark"];

export default function ThemeToggler() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="skeleton w-10 h-10 rounded-full" />;
	}

	return (
		<button
			className="btn btn-circle"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			{theme === "light" ? <Sun /> : <Moon />}
		</button>
	);
}
