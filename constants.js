// initialize math constants
let pi = Math.PI;                               // pi
let e = Math.E;                                 // natural log base e

// initialize electromagnetic constants
let c0 = 2.99792458e8                         // speed of light in vacuum in m/s
let mu0 = 4 * pi * 1.00000000082e-7;          // magnetic permeability in vacuum in H/m per 2019 revised SI
let epsilon0 = 1 / (mu0 * c0 * c0);           // electric permittivity in vacuum in F/m
let Z0 = Math.sqrt(mu0 / epsilon0);           // wave impedance in vacuum in Ohms

// export all the math and electromagnetic constants
module.exports = {pi, e, c0, mu0, epsilon0, Z0};
