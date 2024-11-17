import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/pasta')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /pasta!'
}
