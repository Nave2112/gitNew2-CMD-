

describe('element test',()=>{
    const login = [
        //valid login
        {'user':'student','pwd':'Password123'},
        //invalid login
        {'user':'student','pwd':'Password1234'},
        {'user':'student1','pwd':'Password123'}]


    beforeEach(()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')

    })
     //valid login
      
    it('testing valid login',()=>{
        
            login.forEach((users)=>{
                cy.get('[type="text"]').type(users.user)
                cy.get('[type="password"]').type(users.pwd)
                cy.get('[id="submit"]').click()
                cy.get('body').then(($body)=>{
                    if($body.text().includes('Your username is invalid!')){
                        cy.log(`invalid user ${users.user}`)
                        cy.contains('Your username is invalid!').should('be.visible')
                    }else{ cy.url().should('include','successfully').then(()=>{
                        cy.get('[style="color:#ffffff"]').click() 
                    })

                    }
                })
               
             
                
                 //reload page
                // cy.reload()
            //     cy.wait(2000)
            //   
           

            // above 3 diffrent login need to put individual test cases
        
        // cy.get('[type="text"]').type('student')
        // cy.get('[type="password"]').type('Password123')
        // cy.get('[id="submit"]').click()
        // cy.url().should('include','successfully')
        // cy.get('[style="color:#ffffff"]').click()


    })
    
    
     })

     it('valid loign',()=>{
        cy.get('[type="text"]').type(login[0].user)
        cy.get('[type="password"]').type(login[0].pwd)
        cy.get('[id="submit"]').click()
        cy.get('body').then(($body)=>{
            if($body.text().includes('Congratulations student')){
                cy.url().should('include','successfully')
                    cy.get('[style="color:#ffffff"]').click() 
                
        }else{
            cy.contains('Your username is invalid!').should('be.visible')
            }
        })
    })

    it('Invalid loign 1',()=>{
        cy.get('[type="text"]').type(login[1].user)
        cy.get('[type="password"]').type(login[1].pwd)
        cy.get('[id="submit"]').click()
        cy.get('body').then(($body)=>{
            if($body.text().includes('Congratulations student')){
                cy.url().should('include','successfully')
                    cy.get('[style="color:#ffffff"]').click() 
                
        }else{
            cy.contains('Your username is invalid!').should('be.visible')
            }
        })
        
    })
    it('Invalid loign 2',()=>{
        cy.get('[type="text"]').type(login[2].user)
        cy.get('[type="password"]').type(login[2].pwd)
        cy.get('[id="submit"]').click()
        cy.get('body').then(($body)=>{
            if($body.text().includes('Congratulations student')){
                cy.url().should('include','successfully')
                    cy.get('[style="color:#ffffff"]').click() 
                
        }else{
            cy.contains('Your username is invalid!').should('be.visible')
            }
        })
    })
    
  
    // { "username": "user1", "password": "pass1" },
    // { "username": "user2", "password": "pass2" },
    // { "username": "Admin", "password": "admin123"},
    // { "username": "student", "password": "Password123"},
    // { "username": "user2", "password": "pass2" },
    // { "username": "student", "password": "Password123"}

    it.skip('mock',()=>{
        cy.login()
        cy.intercept('GET','https://practicetestautomation.com/courses/','Set up test automation framework with cypress WebDriver')
       // cy.get('[aria-current="page"]').click()
        cy.url().should('include', 'successfully')
        cy.get('#menu-item-21 > a').click({ force: true })
        cy.get(':nth-child(1)>[class="wp-block-list"]').should('contain','Set up test automation framework with cypress WebDriver') 
        //cy.get('div.tag-list').should('contain','ApiGit').and('contain','ApiYouTube')
      })
    


})


