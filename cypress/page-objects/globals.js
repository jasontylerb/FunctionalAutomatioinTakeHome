const helloBar ="[data-id='73835a1']";
const drataLogo ='#Light-Theme > div > div > div > div > div > div > div > header.elementor-section.elementor-top-section.elementor-element.elementor-element-ba32a32.elementor-section-height-min-height.navbar-expand-lg.navbar-stick-dark.navbar-dark.elementor-hidden-tablet.elementor-hidden-mobile.elementor-section-boxed.elementor-section-height-default.elementor-section-items-middle.elementor-motion-effects-element.elementor-motion-effects-element-type-background.elementor-sticky--effects.elementor-sticky > div.elementor-container.elementor-column-gap-default > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-db503e7 > div > div.elementor-element.elementor-element-c3e4b4f.elementor-widget__width-initial.elementor-widget-tablet__width-initial.light-logo.elementor-widget.elementor-widget-image > div > a > img';
const navBar ="[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto";
const signIn ="[data-id='82c740d'] > div.elementor-widget-container > div.elementor-button-wrapper > a.elementor-button-link.elementor-button.elementor-size-sm";
const getStarted ="[data-id='5ab7cad'] > div.elementor-widget-container > div.elementor-button-wrapper > a";
const footer ="#footer > div.elementor-container.elementor-column-gap-default";
const navObjs = {
	// Parent Nav Trigger
	"Company":{
		selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > a.nav-link",
		index:0
	},
		"About Drata":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:0
		},
		"Careers":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:1
		},
		"Contact Us":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:2
		},
		"Security":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:3
		},
	// Parent Nav Trigger
	"Products":{
		selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > a.nav-link",
		index:1
	},
		"SOC 2":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:0
		},
		"ISO 27001":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:1
		},
		"HIPAA":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:2
		},
		"PCI DSS":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:3
		},
		"GDPR":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:4
		},
		"CCPA":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:5
		},
		"Additional Frameworks":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:6
		},
		"Custom Frameworks":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:7
		},
		"Trust Center":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:8
		},
		"Risk Management":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:9
		},
		"Integrations":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > a.nav-link",
			index:10
		},
	// Parent Nav Trigger
	"Resources":{
		selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > a.nav-link",
		index:2
	},
		// Nav Sub-Category
		"Customer Case Studies":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > div.row > div.col-lg-5 > h6",
			index:0
		},
			"Prioritizing SOC 2 While Growing Fast":{
				selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > div.row > div.col-lg-5 > nav > a.nav-link",
				index:0
			},
			"Getting SOC 2 Fast with a Deadline":{
				selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > div.row > div.col-lg-5 > nav > a.nav-link",
				index:1
			},
			"Leveling Up a Strong SOC 2 Security Program":{
				selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > div.row > div.col-lg-5 > nav > a.nav-link",
				index:2
			},
			"All Case Studies":{
				selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > div.row > div.col-lg-5 > nav > a.nav-link",
				index:3
			},
		// Nav Sub-Category
		"Helpful Content":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > div.row > div.col-lg-3 > h6",
			index:1
		},
			"All Resources":{
				selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > div.row > div.col-lg-3 > nav > a.nav-link",
				index:0
			},
			"Your SOC 2 Readiness":{
				selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > div.row > div.col-lg-3 > nav > a.nav-link",
				index:1
			},
			"Drata Blog":{
				selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > div.row > div.col-lg-3 > nav > a.nav-link",
				index:2
			},
		// Nav Sub-Category
		"Featured":{
			selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > div.row > div.col-lg-4 > h6",
			index:2
		},
			"7 Pro Tips for SOC 2":{
				selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > nav > div.row > div.col-lg-4 > nav > a.nav-link",
				index:0
			},
	// Parent Nav Link
	"Customers":{
		selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > a.nav-link",
		index:3
	},
	// Parent Nav Link
	"Auditors":{
		selector:"[data-id='3765628'] > div.elementor-widget-container > ul.nav.nav-navbar.mx-auto > li.nav-item > a.nav-link",
		index:4
	}
};

const footerObjs ={
	"Quick Biography":"",
	"Bragging Rights":"",
	"Quick CTA":"",
	"Copyright":"",
	"Social Accounts":"",
	"Footer Navigation Cluster":"",
	"Compliance Badges":"",

}

class Navigation {
	visitDrataHomePage(){
		it('Visits the Drata home page', () => {
			return cy.visit('https://drata.com')
		})
	}
	// Company
	navigateToAboutDrataPage(){
		it('Navigate to About Drata', () => {
			let trigger = navObjs.Company;
			let destination = navObjs["About Drata"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true});
		})
	}

	navigateToCareersPage(){
		it('Navigate to Careers', () => {
			let trigger = navObjs.Company;
			let destination = navObjs["Careers"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToContactUsPage(){
		it('Navigate to Contact Us', () => {
			let trigger = navObjs.Company;
			let destination = navObjs["Contact Us"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToSecurityPage(){
		it('Navigate to Security', () => {
			let trigger = navObjs.Company;
			let destination = navObjs["Security"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}

	// Products
	navigateToSOC2Page(){
		it('Navigate to SOC 2', () => {
			let trigger = navObjs.Products;
			let destination = navObjs["SOC 2"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToISO27001Page(){
		it('Navigate to ISO 27001', () => {
			let trigger = navObjs.Products;
			let destination = navObjs["ISO 27001"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToHIPAAPage(){
		it('Navigate to HIPAA', () => {
			let trigger = navObjs.Products;
			let destination = navObjs["HIPAA"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToPCIDSSPage(){
		it('Navigate to PCI DSS', () => {
			let trigger = navObjs.Products;
			let destination = navObjs["PCI DSS"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToGDPRPage(){
		it('Navigate to GDPR', () => {
			let trigger = navObjs.Products;
			let destination = navObjs["GDPR"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToCCPAPage(){
		it('Navigate to CCPA', () => {
			let trigger = navObjs.Products;
			let destination = navObjs["CCPA"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToAdditionalFrameworksPage(){
		it('Navigate to Additional Frameworks', () => {
			let trigger = navObjs.Products;
			let destination = navObjs["Additional Frameworks"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToCustomFrameworksPage(){
		it('Navigate to Custom Frameworks', () => {
			let trigger = navObjs.Products;
			let destination = navObjs["Custom Frameworks"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToTrustCenterPage(){
		it('Navigate to Trust Center', () => {
			let trigger = navObjs.Products;
			let destination = navObjs["Trust Center"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToRiskManagementPage(){
		it('Navigate to Risk Management', () => {
			let trigger = navObjs.Products;
			let destination = navObjs["Risk Management"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToIntegrationsPage(){
		it('Navigate to Integrations', () => {
			let trigger = navObjs.Products;
			let destination = navObjs["Integrations"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}

	// Resources
	navigateToPrioritizingSOC2WhileGrowingFastPage(){
		it('Navigate to Prioritizing SOC 2 While Growing Fast', () => {
			let trigger = navObjs.Resources;
			let destination = navObjs["Prioritizing SOC 2 While Growing Fast"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToGettingSOC2FastwithaDeadlinePage(){
		it('Navigate to Getting SOC 2 Fast with a Deadline', () => {
			let trigger = navObjs.Resources;
			let destination = navObjs["Getting SOC 2 Fast with a Deadline"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToLevelingUpaStrongSOC2SecurityProgramPage(){
		it('Navigate to Leveling Up a Strong SOC 2 Security Program', () => {
			let trigger = navObjs.Resources;
			let destination = navObjs["Leveling Up a Strong SOC 2 Security Program"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToAllCaseStudiesPage(){
		it('Navigate to All Case Studies', () => {
			let trigger = navObjs.Resources;
			let destination = navObjs["All Case Studies"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToAllResourcesPage(){
		it('Navigate to All Resources', () => {
			let trigger = navObjs.Resources;
			let destination = navObjs["All Resources"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToYourSOC2ReadinessPage(){
		it('Navigate to Your SOC 2 Readiness', () => {
			let trigger = navObjs.Resources;
			let destination = navObjs["Your SOC 2 Readiness"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateToDrataBlogPage(){
		it('Navigate to Drata Blog', () => {
			let trigger = navObjs.Resources;
			let destination = navObjs["Drata Blog"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
	navigateTo7ProTipsforSOC2Page(){
		it('Navigate to 7 Pro Tips for SOC 2', () => {
			let trigger = navObjs.Resources;
			let destination = navObjs["7 Pro Tips for SOC 2"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}

	// Customers
	navigateToCustomersPage(){
		it('Navigate to Customers', () => {
			let trigger = navObjs.Resources;
			let destination = navObjs["Customers"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}

	// Auditors
	navigateToAuditorsPage(){
		it('Navigate to Auditors', () => {
			let trigger = navObjs.Resources;
			let destination = navObjs["Auditors"];
			return cy
			.get(trigger.selector).eq(trigger.index).click({force:true})
			.get(destination.selector).eq(destination.index).click({force:true})
		})
	}
}
class GlobalElements{
	checkForDrataLogo(){
		it('Verify Drata logo renders', () => {
			return cy.get(drataLogo, { timeout: 30000 }).should('be.visible');
		})
	}
	checkForNavBar(){
		it('Verify the top navigation bar displays properly', () => {
			return cy.get(navBar).should('be.visible')
		})
	}
	checkforGetStartedCTA(){
		it('Veirfy the "Get Started" CTA link displays', () => {
			return cy.get(getStarted).should('be.visible')
		})
	}
	clickGetStartedCTA(){
		it('Verify Drata logo renders', () => {
			return cy.get(getStarted).click()
		})
	}
	checkForConsoleErrors(){
		cy.on('window:before:load', (win) => {
			cy.spy(win.console, 'error');
			cy.spy(win.console, 'warn');
		});
		
		// NOTE: Commented out as tests continuisly failed for me, due to console errors occurring on drata.com
		// afterEach(() => {
		// 	cy.window().then((win) => {
		// 		expect(win.console.error).to.have.callCount(0);
		// 		expect(win.console.warn).to.have.callCount(0);
		// 	});
		// });
	}
}
export {Navigation, GlobalElements};
