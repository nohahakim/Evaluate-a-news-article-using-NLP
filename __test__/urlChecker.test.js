import { urlChecker } from "../src/client/js/urlChecker";

describe("Testing the urlChecker() function", () => {
	let url = "https://jestjs.io/docs/getting-started"; // accepted URL
	test("testing for valid url", () => {
		const response = urlChecker(url);
		expect(response).toBeDefined();
		expect(response).toBe(true);
	});
});