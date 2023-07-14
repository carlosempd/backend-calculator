const getRandomString = require("../../services/randomOrg");

it('test_happy_path_retrieves_string', async () => {
    const result = await getRandomString();
    expect(typeof result).toBe('string');
});
