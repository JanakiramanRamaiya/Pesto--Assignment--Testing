const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

const expect = (exp) => matchers(exp)

function adder(a, b) {
  return a + b 
}
function Subract(a, b) {
  return a - b 
}
function multiply(a, b) {
  return a*b 
}
function divide (a, b) {
  return a/b 
}
describe('adder', () => {
  it('adds two numbers', () => {
    const result = adder(1, 2)
    expect(result).toBe(3)
  })
})
describe('Subract', () => {
  it('Subract two numbers', () => {
    const result = Subract(3, 1)
    expect(result).toBe(2)
  })
})
describe('multiply', () => {
  it('multiply two numbers', () => {
    const result = multiply(3, 2)
    expect(result).toBe(6)
  })
})
describe('divide ', () => {
  it('divide  two numbers', () => {
    const result = divide (6, 2)
    expect(result).toBe(3)
  })
})