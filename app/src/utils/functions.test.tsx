import React from 'react'
import { render, screen } from '@testing-library/react'
import { capitalizeFirstLetter, getMonthsFormatted, getTags } from './functions'
import { articleMockData } from '../mocks/articleData'
import { type ITag } from '../interfaces/IArticle'

test('Validar getMonthsFormatted', () => {
  const dateFormatted = getMonthsFormatted('2023-03-06T00:00:00z')

  expect(dateFormatted).toEqual('6 de Marzo de 2023')
})

test('Validar capitalizeFirstLetter', () => {
  const string = capitalizeFirstLetter('test')

  expect(string).toEqual('Test')
})

test('Validar capitalizeFirstLetter', () => {
  const data = getTags(articleMockData)

  const expectedValues: ITag[] = [
    {
      slug: 'arroz-123',
      text: 'Arroz',
      count: 2
    },
    {
      slug: 'leche-123',
      text: 'Leche',
      count: 1
    }
  ]

  expect(data).toEqual(expectedValues)
})
