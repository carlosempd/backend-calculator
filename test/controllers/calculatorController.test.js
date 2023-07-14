

it('test_addition_positive_integers', () => {
    const req = {
        value: {
            firstDigit: 2,
            secondDigit: 3
        }
    }

    expect(5).toBe(req.value.firstDigit + req.value.secondDigit)
})

it('test_addition_negative_integers', () => {
    const req = {
        value: {
            firstDigit: -2,
            secondDigit: -3
        }
    }
    expect(-5).toBe(req.value.firstDigit + req.value.secondDigit)
})

it('test_addition_floating_point_numbers', () => {
    const req = {
        value: {
            firstDigit: 2.5,
            secondDigit: 3.5
        }
    }
    expect(6).toBe(req.value.firstDigit + req.value.secondDigit)
})


it('test_substraction_positive_integers', () => {
    const req = {
        value: {
            firstDigit: 5,
            secondDigit: 3
        }
    }

    expect(2).toBe(req.value.firstDigit - req.value.secondDigit)
})

it('test_substraction_negative_result', () => {
    const req = {
        value: {
            firstDigit: 3,
            secondDigit: 5
        }
    }
    expect(-2).toBe(req.value.firstDigit - req.value.secondDigit)
})

it('test_edge_case_substraction_positive_result', () => {
    const req = {
        value: {
            firstDigit: -3,
            secondDigit: -5
        }
    }
    expect(2).toBe(req.value.firstDigit - req.value.secondDigit)
})

it('test_multiplication_positive_integers', () => {
    const req = { value: { firstDigit: 2, secondDigit: 3 } }
    expect(6).toBe(req.value.firstDigit * req.value.secondDigit)
})

it('test_multiplication_negative_integers', () => {
    const req = { value: { firstDigit: -2, secondDigit: -3 } }
    expect(6).toBe(req.value.firstDigit * req.value.secondDigit)
})

it('test_multiplication_decimal_numbers', () => {
    const req = { value: { firstDigit: 2.5, secondDigit: 3.5 } }
    expect(8.75).toBe(req.value.firstDigit * req.value.secondDigit)
})

it('test_multiplication_one_digit_zero', () => {
    const req = { value: { firstDigit: 0, secondDigit: 3 } }
    expect(0).toBe(req.value.firstDigit * req.value.secondDigit)
})