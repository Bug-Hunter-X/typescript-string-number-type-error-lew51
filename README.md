# TypeScript Type Error: Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript type error and its solution.

## The Bug
The `combine` function is intended to concatenate two arrays of numbers. However, `arr2` contains a string element ('6'), leading to a type error because TypeScript enforces type safety.