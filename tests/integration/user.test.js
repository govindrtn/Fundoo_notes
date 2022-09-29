import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../src/index';

let loginToken, noteId




describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => { });
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      // clearCollections();
    }

    done();
  });
  describe(' User register', () => {
    it('should return user registeration.....done ', (done) => {
      const RegisterUser = {
        firstName: "sumit",
        lastName: "pal",
        email: "sumitpal12@gmail.com",
        password: "qazplm1232@"
      }
      request(app)
        .post('/api/v1/users/register')
        .send(RegisterUser)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(201);
        });
      done();
    });
    it('when user enter valid details login sucess....', (done) => {
      const loginUser = {
        email: "sumitpal12@gmail.com",
        password: "qazplm1232@"
      }
      request(app)
        .post('/api/v1/users/login')
        .send(loginUser)
        .end((err, res) => {
          loginToken = res.body.data
          console.log("login toekn ----------> ", loginToken)
          expect(res.statusCode).to.be.equal(200)
        })
      done()
    });
    it('when user enter valid details not valid login fali....', (done) => {
      const loginfail = {
        email: "sachinchouksey",
        password: "qazplm1@"
      }
      request(app)
        .post('/api/v1/users/login')
        .send(loginfail)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(400)
        })
      done()
    })
    // ---->
    describe(' Create Note ', () => {
      it('should return note created .....done ', (done) => {
        const Note = {
          Title: "Greet..",
          Descreption: "Good morning.."
        }
        request(app)
          .post('/api/v1/notes/createnote')
          .send(Note)
          .set('Authorization', `bearer ${loginToken}`)
          .end((err, res) => {
            // console.log("----- ----->  ", res.body);
            noteId = res.body.data._id
            // console.log(noteId);
            expect(res.statusCode).to.be.equal(201);
          });
        done();
      });
      it('should return fatch all notes... ', (done) => {
        request(app)
          .get('/api/v1/notes/getall')
          .set('Authorization', `bearer ${loginToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200); 
          });
        done();
      })
      it('should return fatch a single notes by id... ', (done) => {
        request(app)
          .get(`/api/v1/notes/${noteId}`)
          .set('Authorization', `bearer ${loginToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
          });
        done();
      })
      it('should return when note update ..... ', (done) => {
        const Note = {
          Title: "hello..",
          Descreption: "Good afternoon.."
        }
        request(app)
          .put(`/api/v1/notes/${noteId}`)
          .send(Note)
          .set('Authorization', `bearer ${loginToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(202);
          });
        done();
      });
      it('should return when note delete ..... ', (done) => {
        request(app)
          .delete(`/api/v1/notes/${noteId}`)
          .set('Authorization', `bearer ${loginToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
          });
        done();
      });
    })
    // --
  })
});
