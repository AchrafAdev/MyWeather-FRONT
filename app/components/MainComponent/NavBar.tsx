"use client";
import React from "react";

import SearchButton from "@/app/components/MainComponent/SearchButton";

const NavBar: React.FC = () => {
	const handleSearch = (query: string) => {
		alert(query);
		// Realiza la búsqueda aquí
	};

	return (
		<div>
			<div>
				<h2> January 2023</h2>
				<p>Lunes, 9 Enero, 2023</p>
			</div>
			<SearchButton onSearch={handleSearch} />
		</div>
	);
};

export default NavBar;
