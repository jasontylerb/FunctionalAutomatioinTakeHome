import {Navigation} from '../../../page-objects/globals'
import {GlobalElements} from '../../../page-objects/globals'
import AboutDrata from '../../../page-objects/CompanyPage/AboutDrata'

describe('Navigate to the "About Drata" page', () => {
	context('720p resolution', () => {
		const nav = new Navigation();
		const glo = new GlobalElements();
		const about = new AboutDrata();
		beforeEach(() => {
			cy.viewport(1280, 720)
		})
		nav.visitDrataHomePage();
		nav.navigateToAboutDrataPage();

		// Check for console erros
		glo.checkForConsoleErrors();

		// Verify the display  of global elements
		glo.checkForDrataLogo();
		glo.checkForNavBar();
		glo.checkforGetStartedCTA();
		
		// Verify the display of page unique elements
		about.getAboutDrataHeader();
		about.getAboutDrataBody();
		about.getLearnMoreCta();
		about.getOurMissionHeader();
		about.getOurMissionBody();
		about.getOurVisionHeader();
		about.getOurVisionBody();
	})
})
