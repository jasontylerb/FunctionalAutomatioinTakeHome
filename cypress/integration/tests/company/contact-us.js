import {Navigation} from '../../../page-objects/globals'
import {GlobalElements} from '../../../page-objects/globals'
import ContactUs from '../../../page-objects/CompanyPage/ContactUs'

describe('Navigate to the "Contact Us" page', () => {
	context('720p resolution', () => {
		const nav = new Navigation();
		const glo = new GlobalElements();
		const con = new ContactUs();
		beforeEach(() => {
			cy.viewport(1280, 720)
		})
		nav.visitDrataHomePage();
		nav.navigateToContactUsPage();
		
		// Check for console erros
		glo.checkForConsoleErrors();

		// Verify the display  of global elements
		glo.checkForDrataLogo();
		glo.checkForNavBar();
		glo.checkforGetStartedCTA();

		// // Verify the display of page unique elements
		con.getEmailCta();
		con.getMediaCta();
		con.getPartnershipCta();
		con.getReportIssuesCta();
		con.getSupportCta()
	})
})
