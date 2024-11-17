import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/SaraCookbook/drinks')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /drinks!'
}
