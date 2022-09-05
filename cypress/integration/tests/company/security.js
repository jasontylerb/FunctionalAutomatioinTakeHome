import {Navigation} from '../../../page-objects/globals'
import {GlobalElements} from '../../../page-objects/globals'
import Security from '../../../page-objects/CompanyPage/Security'

describe('Navigate to the "Security" page', () => {
	context('720p resolution', () => {
		const nav = new Navigation();
		const glo = new GlobalElements();
		const sec = new Security();
		beforeEach(() => {
			cy.viewport(1280, 720)
		})
		nav.visitDrataHomePage();
		nav.navigateToSecurityPage();
		
		// Check for console erros
		glo.checkForConsoleErrors();

		// Verify the display  of global elements
		glo.checkForDrataLogo();
		glo.checkForNavBar();
		glo.checkforGetStartedCTA();

		// // Verify the display of page unique elements
		sec.getReportSecurityIssuesCta();
		sec.getTrustCenterHeader();
		sec.getTrustCenterBody();
		sec.getTrustCenterCta();
	})
})
