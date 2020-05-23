describe('Test Radio Buttons Page', function() {
	browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");

	it('Should be able to focus on checkbox buttons elements', function(done){

		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.pause(2000);

		browser.click("input[value='option-1']");
		var checkboxButtonOne = browser.hasFocus("input[value='option-1']");
		console.log('Checkbox button one has a value of: ' + checkboxButtonOne);
		expect(checkboxButtonOne, 'The checkbox (one) should have focus!').to.be.true;

		var checkboxButtonTwo = browser.hasFocus("input[value='option-3']");
		console.log('Checkbox button one has a value of: ' + checkboxButtonTwo);
		expect(checkboxButtonTwo, 'The checkbox (two) should have focus!').to.be.false;

	});
});