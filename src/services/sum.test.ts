import { expect, test } from 'vitest'
import { Sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3)
 })

 test('adds 1 + 3 to equal 4', () => {
    expect(Sum(1, 3)).toBe(4)
 })
