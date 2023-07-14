const User = require('../../models/user')
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { updateUserBalance } = require('../../services/userService');

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


it('test_balance_updated', async () => {
    const user = new User({ 
        email: 'test@test.com',
        password: '123456',
        status: 'active',
        balance: 10
     })
    await user.save()
    const result = await updateUserBalance(user._id, 5)
    const updatedUser = await User.findById(user._id)
    expect(result).toBe(5)
    expect(updatedUser.balance).toBe(5)
, 30000})
