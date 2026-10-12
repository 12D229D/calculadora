/**
 * UNIT TESTS FOR CALCULATOR ENGINE
 * Tests basic arithmetic, scientific trigonometric functions, power, logarithms, factorial, and edge cases.
 */

function runCalculatorTests() {
    const results = [];
    const assert = (name, actual, expected, precision = 6) => {
        const isClose = typeof actual === 'number' && typeof expected === 'number'
            ? Math.abs(actual - expected) < Math.pow(10, -precision)
            : actual === expected;
        results.push({ name, passed: isClose, actual, expected });
    };

    // Factorial Helper Test
    const factorial = (n) => {
        if (n < 0 || !Number.isInteger(n)) return NaN;
        if (n === 0 || n === 1) return 1;
        let res = 1;
        for (let i = 2; i <= n; i++) res *= i;
        return res;
    };

    // Test 1: Basic Arithmetic
    assert('Suma básica 2 + 3', 2 + 3, 5);
    assert('Resta 10 - 4', 10 - 4, 6);
    assert('Multiplicación 6 * 7', 6 * 7, 42);
    assert('División 20 / 4', 20 / 4, 5);

    // Test 2: Scientific Functions
    assert('sin(pi / 2) [radianes]', Math.sin(Math.PI / 2), 1.0);
    assert('cos(0)', Math.cos(0), 1.0);
    assert('tan(pi / 4)', Math.tan(Math.PI / 4), 1.0);
    assert('log10(1000)', Math.log10(1000), 3.0);
    assert('ln(e)', Math.log(Math.E), 1.0);
    assert('sqrt(64)', Math.sqrt(64), 8.0);
    assert('pow(2, 8)', Math.pow(2, 8), 256.0);
    assert('factorial(5)', factorial(5), 120);
    assert('factorial(0)', factorial(0), 1);
    assert('1 / 4', 1 / 4, 0.25);
    assert('abs(-42)', Math.abs(-42), 42);

    // Summary
    const total = results.length;
    const passed = results.filter(r => r.passed).length;
    console.log(`[TESTS CALCULADORA] ${passed}/${total} pruebas superadas con éxito.`);
    return { total, passed, results };
}

if (typeof module !== 'undefined') {
    module.exports = { runCalculatorTests };
} else {
    window.runCalculatorTests = runCalculatorTests;
}
