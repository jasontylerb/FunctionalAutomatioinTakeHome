import {Navigation} from '../../../page-objects/globals'
import {GlobalElements} from '../../../page-objects/globals'
import Careers from '../../../page-objects/CompanyPage/Careers'

describe('Navigate to the "Careers" page', () => {
	context('720p resolution', () => {
		const nav = new Navigation();
		const glo = new GlobalElements();
		const car = new Careers();
		beforeEach(() => {
			cy.viewport(1280, 720)
		})
		nav.visitDrataHomePage();
		nav.navigateToCareersPage();
		
		// Check for console erros
		glo.checkForConsoleErrors();

		// Verify the display  of global elements
		glo.checkForDrataLogo();
		glo.checkForNavBar();
		glo.checkforGetStartedCTA();

		// // Verify the display of page unique elements
		car.getOpenPositionsCta();
		car.getWorkingAtDrata();
		car.getReadyToJoin();
		car.getHealthAndWellness();
		car.getLearningAndDevelopment();
		car.getUnlimitedPto();
		car.getWorkRemotely();
		car.getFourOhOneKay();
		car.getHsaFsaAndDcfsa();
	})
})
