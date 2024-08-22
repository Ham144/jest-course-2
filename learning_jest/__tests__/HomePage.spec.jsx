import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("test Home", () => {
	describe("test home - Rendering", () => {
		it("should show the test h2", () => {
			render(<Home />);
			screen.getByText("Home page");
		});

		it("show login button", () => {
			render(<Home />);
			screen.getByRole("button", { name: "login" });
		});

		it("show multiple input", () => {
			render(<Home />);
			screen.getAllByRole("textbox");
			screen.getByLabelText(/email/);
			screen.getByLabelText(/password/);
		});
	});
	describe("test home - Behaviour", () => {
		it("the button click and show the text", () => {});
	});
});
