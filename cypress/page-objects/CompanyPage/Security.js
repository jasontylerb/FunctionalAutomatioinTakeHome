const reportSecurityIssueCta = 'body > div.elementor.elementor-3437 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-56515ca.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > section > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-299d5950.col-md-7.mobile-w100 > div > div.elementor-element.elementor-element-892b5ab.elementor-widget.elementor-widget-text-editor > div > a'
const trust ={
	header:'body > div.elementor.elementor-3437 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1528e86.header.pb-10.shadow-7.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div.elementor-element.elementor-element-0e7e714.elementor-widget.elementor-widget-heading > div > h2',
	body:'body > div.elementor.elementor-3437 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1528e86.header.pb-10.shadow-7.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div.elementor-element.elementor-element-33d67b2.elementor-widget.elementor-widget-text-editor > div > p.lead-2.center-text-on-mobile',
	visitOurTrustCenterCta:'body > div.elementor.elementor-3437 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1528e86.header.pb-10.shadow-7.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div.elementor-element.elementor-element-33d67b2.elementor-widget.elementor-widget-text-editor > div > p:nth-child(3) > a'
}

class Security{
	getReportSecurityIssuesCta(){
		it('Report Security Issues Cta Shoudl Be Visible', () => {
			return cy.get(reportSecurityIssueCta).should('be.visible')
		})
	}
	getTrustCenterHeader(){
		it('Trust Center Header should be visible', () => {
			return cy.get(trust.header).should('be.visible')
		})
	}
	getTrustCenterBody(){
		it('Trust Center Body Copy should be visible', () => {
			return cy.get(trust.body).should('be.visible')
		})
	}
	getTrustCenterCta(){
		it('Trust Center CTA should be visible', () => {
			return cy.get(trust.visitOurTrustCenterCta).should('be.visible')
		})
	}
}

export default Security;