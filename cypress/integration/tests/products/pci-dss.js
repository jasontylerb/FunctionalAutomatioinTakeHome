import {Navigation} from '../../../page-objects/globals'
import {GlobalElements} from '../../../page-objects/globals'

describe('Navigate to the "PCI DSS" page', () => {
	context('720p resolution', () => {
		const nav = new Navigation();
		const glo = new GlobalElements();
		beforeEach(() => {
			cy.viewport(1280, 720)
		})
		nav.visitDrataHomePage();
		nav.navigateToPCIDSSPage();
		
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
