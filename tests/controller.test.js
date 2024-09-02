import supertest from 'supertest'
import app from '../src'
import { response } from 'express'


try {
    
    describe('GET /github/project/:idProject/items ',()=>{

        it('Deve retornar status 200',async ()=>{

            const response =await supertest(app)
            .get('/github/project/13/items')
            .expect(200)
            
            expect(response.body).toEqual(            
                expect.objectContaining({
                organization: expect.objectContaining({
                  projectV2: expect.objectContaining({
                    id: expect.any(String),
                    title: expect.any(String),
                    url: expect.any(String),
                    items: expect.objectContaining({
                      nodes: expect.arrayContaining([
                        expect.objectContaining({
                          id: expect.any(String),
                          content: expect.objectContaining({
                            id: expect.any(String),
                            title: expect.any(String),
                            url: expect.any(String),
                            repository: expect.objectContaining({
                              name: expect.any(String)
                            }),
                            number: expect.any(Number),
                            state: expect.any(String),
                            stateReason: expect.any(String),
                            createdAt: expect.any(String),
                            updatedAt: expect.any(String)
                          }),
                          fieldValueByName: expect.objectContaining({
                            name: expect.any(String),
                            field: expect.objectContaining({
                              name: expect.any(String)
                            })
                          })
                        })
                      ])
                    })
                  })
                })
              }))
        })

        describe('POST /webhook/github',()=>{

        })
        describe('POST /webhook/jira',()=>{

        })
    })      
        
} catch (error) {
    console.log(error)
}