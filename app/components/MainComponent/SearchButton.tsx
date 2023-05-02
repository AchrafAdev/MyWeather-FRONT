"use client";

import React, { ChangeEvent, useState } from "react";

interface SearchBarProps {
	onSearch: (query: string) => void;
}

const SearchButton: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};
	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		onSearch(searchQuery);
	};
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handleSearch(event);
		}
	};

	return (
		<form onSubmit={handleSearch}>
			<input
				type="text"
				placeholder="Buscar ciudad..."
				value={searchQuery}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
		</form>
	);
};

export default SearchButton;
