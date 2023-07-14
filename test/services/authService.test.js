const { loginService, registerService } = require("../../services/authService")
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeEach(async() => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

it('test_valid_credentials', async () => {
    const req = {
        value: {
            email: 'test@test.com',
            password: 'password'
        }
    }
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    }
    await registerService(req, res)
    await loginService(req, res)
    await mongoose.disconnect();
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({
        token: expect.any(String)
    })
}, 15000)

it('test_successful_registration', async () => {
    const req = {
        value: {
            email: 'test@test.com',
            password: 'password'
        }
    }
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    }
    await registerService(req, res)
    
    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalledWith({ message: 'User created succesfully' })
})