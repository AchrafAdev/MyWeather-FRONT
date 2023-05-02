import { fireEvent, render, screen } from "@testing-library/react";

import SearchButton from "@/app/components/MainComponent/SearchButton";

test("renders search input", () => {
	render(
		<SearchButton
			onSearch={() => {
				"test callback";
			}}
		/>
	);

	const searchInput = screen.getByPlaceholderText("Buscar ciudad...");

	expect(searchInput).toBeInTheDocument();
});

test("calls onSearch prop when form is submitted", () => {
	const onSearch = jest.fn();
	render(<SearchButton onSearch={onSearch} />);

	const searchInput = screen.getByPlaceholderText("Buscar ciudad...");

	fireEvent.change(searchInput, { target: { value: "React" } });
	fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter" });

	expect(onSearch).toHaveBeenCalledTimes(1);
	expect(onSearch).toHaveBeenCalledWith("React");
});
