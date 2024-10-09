"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { AppWindow, AppWindowIcon, AppWindowMac, ChevronDown } from "lucide-react";
import CoolHeaderText from "./cool-header-text";
import Particles from "./ui/particles";
import confetti from "canvas-confetti";

const download = () => {
	throwConfetti()
	window.location.replace(`https://realm.abunchofknowitalls.com/Realm.exe`)
}

const throwConfetti = () => {
	const end = Date.now() + 3 * 1000; // 3 seconds
	const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
	const frame = () => {
		if (Date.now() > end) return;

		confetti({
			particleCount: 2,
			angle: 60,
			spread: 55,
			startVelocity: 60,
			origin: { x: 0, y: 0.5 },
			colors,
		});
		confetti({
			particleCount: 2,
			angle: 120,
			spread: 55,
			startVelocity: 60,
			origin: { x: 1, y: 0.5 },
			colors,
		});
		requestAnimationFrame(frame);
	};
	frame();
};

export default function Header() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	return (
		<>
			<section
				id="hero"
				className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 text-center md:px-8"
			>
				<div className="relative">
					<CoolHeaderText />
				</div>
				<p className="mb-12 -translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
					Collaborate, Communicate, Connect
					<br className="hidden md:block" /> Because that's what you wanted and you deserve to own your content.
				</p>
				<div className="flex w-full flex-col justify-center md:flex-row">
					<a > 
						<Button className="-translate-y-4 animate-fade-in gap-1 text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black" onClick={download}>
							<span>Download Realm for </span>
							<svg className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="64" height="64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M.2 298.669L0 90.615l256.007-34.76v242.814H.201zM298.658 49.654L639.905-.012v298.681H298.657V49.654zM640 341.331l-.071 298.681L298.669 592V341.332h341.33zM255.983 586.543L.189 551.463v-210.18h255.794v245.26z"/></svg>
						</Button>
					</a>
				</div>
			</section>
			<Particles
				className="absolute inset-0 -z-10 hidden dark:block"
				quantity={50}
				ease={70}
				size={0.05}
				staticity={70}
				color="#ffffff"
			/>
			<Particles
				className="absolute inset-0 -z-10 block dark:hidden"
				quantity={30}
				ease={70}
				size={0.05}
				staticity={70}
				color="#000000"
			/>
		</>
	);
}
