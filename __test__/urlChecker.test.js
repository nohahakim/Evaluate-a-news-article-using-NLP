import { urlChecker } from "../src/client/js/urlChecker";

describe("Testing the urlChecker() function", () => {
	let url = "https://webpack.js.org/"; // accepted URL
	test("testing for valid url", () => {
		const response = urlChecker(url);
		expect(response).toBeDefined();
		expect(response).toBe(true);
	});


	let invalidUrl = "webpack.js.org/"; //  test invalid url
	test("testing for false url", () => {
		const response2 = urlChecker(invalidUrl);
		expect(response2).toBeDefined();
		expect(response2).toBe(false);
	});
});