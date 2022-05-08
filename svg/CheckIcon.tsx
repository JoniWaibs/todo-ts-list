import React from 'react'
import { StylableComponent } from '@/models/misc';

export const CheckIcon: React.FunctionComponent<StylableComponent> = ({customClass}): JSX.Element => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-check"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={customClass}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 12l5 5l10 -10" />
    </svg>
  )
}
