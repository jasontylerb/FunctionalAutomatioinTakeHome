import {Navigation} from '../../../../page-objects/globals'
import {GlobalElements} from '../../../../page-objects/globals'

describe('Navigate to the "7 Pro Tips for SOC 2" page', () => {
	context('720p resolution', () => {
		const nav = new Navigation();
		const glo = new GlobalElements();
		beforeEach(() => {
			cy.viewport(1280, 720)
		})
		nav.visitDrataHomePage();
		nav.navigateTo7ProTipsforSOC2Page();
		
		// Check for console erros
		glo.checkForConsoleErrors();

		// Verify the display  of global elements
		glo.checkForDrataLogo();
		glo.checkForNavBar();
		glo.checkforGetStartedCTA();

		// // Verify the display of page unique elements
		// TODO: ...
	})
})
