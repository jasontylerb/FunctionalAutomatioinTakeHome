	const openPositionsCta = 'body > div.elementor.elementor-3179 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-3496abf.elementor-section-full_width.header.text-white.overlay.opacity-95.elementor-section-height-default.elementor-section-height-default > div.elementor-container.elementor-column-gap-default > div > div > div > div > div > section > div > div > div > div > div > a';
	const workingAtDrata = 'body > div.elementor.elementor-3179 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-e8f95e3.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > div > section > div > div > div > section.elementor-section.elementor-inner-section.elementor-element.elementor-element-7054b3d7.section-header.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div.elementor-element.elementor-element-69936f29.elementor-widget.elementor-widget-heading > div > h2';
	const readyToJoin = 'body > div.elementor.elementor-3179 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-acab231.section.text-white.bg-fixed.text-center.py-11.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div.elementor-container.elementor-column-gap-default > div > div > div > div > h2';
	const healthAndWellness = '[data-id="2a677fbe"]';
	const learningAndDevelopment = '[data-id="ed15a93"]';
	const unlimitedPto = '[data-id="521bf244"]';
	const workRemotely = '[data-id="21654935"]';
	const fourOhOneKay = '[data-id="2193048d"]';
	const hsaFsaAndDcfsa = '[data-id="2bdedfee"]';

class Careers{
	getOpenPositionsCta(){
		it('Open Positoins CTA should be visible', () => {
			return cy.get(openPositionsCta).should('be.visible')
		})
	}
	getWorkingAtDrata(){
		it('Working at drata header should be visible', () => {
			return cy.get(workingAtDrata).should('be.visible')
		})
	}
	getReadyToJoin(){
		it('Ready to Join splash banner should be visible', () => {
			return cy.get(readyToJoin).should('be.visible')
		})
	}
	getHealthAndWellness(){
		it('Benefits > Health and Wellness icon should be visible', () => {
			return cy.get(healthAndWellness).should('be.visible')
		})
	}
	getLearningAndDevelopment(){
		it('Benefits > Learning and Developemtn icon should be visible', () => {
			return cy.get(learningAndDevelopment).should('be.visible')
		})
	}
	getUnlimitedPto(){
		it('Benefits > Unlimited PTO icon should be visible', () => {
			return cy.get(unlimitedPto).should('be.visible')
		})
	}
	getWorkRemotely(){
		it('Benefits > Work Remotely icon should be visible', () => {
			return cy.get(workRemotely).should('be.visible')
		})
	}
	getFourOhOneKay(){
		it('Benefits > 401k icon should be visible', () => {
			return cy.get(fourOhOneKay).should('be.visible')
		})
	}
	getHsaFsaAndDcfsa(){
		it('Benefits HSA, FSA, and DCFSA icon should be visible', () => {
			return cy.get(hsaFsaAndDcfsa).should('be.visible')
		})
	}
}

export default Careers;