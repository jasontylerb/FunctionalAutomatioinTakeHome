const options = {
	
	email:'[data-id="7b990cd6"]',
	media:'[data-id="1814354"]',
	parnership:'[data-id="a320ba2"]',
	reportIssues:'[data-id="094a5d9"]',
	support:'[data-id="fd8aefe"]'

}

class ContactUs{
	getEmailCta(){
		it('Email CTA cluster should be visible', () => {
			return cy.get(options.email).should('be.visible')
		})
	}
	getMediaCta(){
		it('Media CTA cluster should be visible', () => {
			return cy.get(options.media).should('be.visible')
		})
	}
	getPartnershipCta(){
		it('Partnership CTA cluster should be visible', () => {
			return cy.get(options.parnership).should('be.visible')
		})
	}
	getReportIssuesCta(){
		it('Report Security Issues CTA cluster should be visible', () => {
			return cy.get(options.reportIssues).should('be.visible')
		})
	}
	getSupportCta(){
		it('Support CTA cluster should be visible', () => {
			return cy.get(options.support).should('be.visible')
		})
	}
}

export default ContactUs;