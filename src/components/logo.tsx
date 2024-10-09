"use client";
import { ny } from "@/lib/utils";
import React from "react";
import Image from "next/image";

export default function Logo({ withText, ...props }: any) {
	return (
		<div className="m-0 flex items-center" {...props}>
			<Image
				src={`logos/realm-black.svg`}
				width={40}
				height={40}
				alt="Realm Logo"
				className={ny(
					"transition-all duration-300 hover:scale-110",
					withText && "mr-2",
				)}
			/>
			{withText && <span className="ml-2 text-2xl font-bold">Realm</span>}
		</div>
	);
}
