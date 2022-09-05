const about = {
	header:'body > div.elementor.elementor-2892 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1fcf497.section.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-72e5813 > div > div.elementor-element.elementor-element-23cc314.center-text-on-mobile.elementor-widget.elementor-widget-heading > div > h2',
	body:'body > div.elementor.elementor-2892 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1fcf497.section.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-72e5813 > div > div.elementor-element.elementor-element-e55bb3f.elementor-widget.elementor-widget-text-editor > div > p',
	learnMoreCta:'body > div.elementor.elementor-2892 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1fcf497.section.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-72e5813 > div > div.elementor-element.elementor-element-e55bb3f.elementor-widget.elementor-widget-text-editor > div > p > a',
}
const ourMission = {
	header: 'body > div.elementor.elementor-2892 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-5308eee.section.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-1632128 > div > div.elementor-element.elementor-element-af04c00.elementor-widget.elementor-widget-heading > div > h6',
	body: 'body > div.elementor.elementor-2892 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-5308eee.section.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-1632128 > div > div.elementor-element.elementor-element-515efbd.elementor-widget.elementor-widget-text-editor > div',
}
const ourVision = {
	header: 'body > div.elementor.elementor-2892 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-5308eee.section.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-70fb891 > div > div.elementor-element.elementor-element-d9a2abf.elementor-widget.elementor-widget-heading > div > h6',
	body: 'body > div.elementor.elementor-2892 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-5308eee.section.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-70fb891 > div > div.elementor-element.elementor-element-d9353ae.elementor-widget.elementor-widget-text-editor > div'
}

class AboutDrata{
	getAboutDrataHeader(){
		it('About Drata header displays propelry', () => {
			return cy.get(about.header).should('be.visible')
		})
	};

	getAboutDrataBody(){
		it('About Drata body copy displays propelry', () => {
			return cy.get(about.body).should('be.visible')
		})
	};

	getLearnMoreCta(){
		it('', () => {
			return cy.get(about.learnMoreCta).should('be.visible')
		})
	}

	getOurMissionHeader(){
		it('Our Mission header displays propelry', () => {
			return cy.get(ourMission.header).should('be.visible')
		})
	};

	getOurMissionBody(){
		it('Our Mission body copy displays propelry', () => {
			return cy.get(ourMission.header).should('be.visible')
		})
	};

	getOurVisionHeader(){
		it('Our Vision headers displays propelry', () => {
			return cy.get(ourVision.header).should('be.visible')
		})
	};

	getOurVisionBody(){
		it('Our Vision body copy displays propelry', () => {
			return cy.get(ourVision.header).should('be.visible')
		})
	};
}

export default AboutDrata;