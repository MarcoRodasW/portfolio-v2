import ThemeToggler from "@/components/shared/themeToggler";

export default function Home() {
	return (
		<div className="flex flex-col">
			<h1 className="text-2xl">Hello world from Daysi UI</h1>
			<ThemeToggler />
		</div>
	);
}
