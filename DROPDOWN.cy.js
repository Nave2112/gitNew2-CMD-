describe('checking dropdown,',()=>{

    const testResults = [];
    after(() => {
    // Output the traceability matrix at the end of the test suite
    cy.writeFile('traceability-matrix.json', testResults);
    })

    it('check drop down using traceability matrix',()=>{
        const testCase = {'requirementId' : 'R1', 'TESTcaseId' :'TC1', 'Description':'Dropdown validate'}
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        let totalPrice = 0;
        cy.get('[class="table-display"] >tbody >tr').each(($el)=>{
            if($el.find('td:nth-child(2)').text().includes('SQL')){
                const price = parseInt($el.find('td:nth-child(3)').text().trim())
                   totalPrice += price;
              
             //cy.contains('Mouse Hover Example').scrollIntoView()

            }
        }).then(()=>{
            cy.log(`totalprices is ${totalPrice}`)
            try {
                expect(totalPrice).to.be.greaterThan(0);
                expect(totalPrice).to.eq(500);  // This will fail

                // If assertions pass, set the test case status to 'Pass'
                testCase.status = 'Pass';
            } catch (error) {
                // If an error occurs (assertion fails), set the test case status to 'Fail'
                testCase.status = 'Fail';
                cy.log('Test failed due to error:', error.message);
            } finally {
                // Push the result to the traceability matrix
                testResults.push(testCase);
            }
            ;
            cy.log('Test Case:', JSON.stringify(testCase, null, 2));


        })
    })
})