import supertest from 'supertest'
import app from '../src'


try {
    
    describe('Testes GitHub API',()=>{

        it('Deve retornar status 200',async ()=>{

            await supertest(app)
            .get('/github/cards')
            .expect(200)

        })

    })      
        
} catch (error) {
    console.log(error)
}