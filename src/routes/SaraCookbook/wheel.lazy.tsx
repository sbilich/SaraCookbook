import { createLazyFileRoute } from '@tanstack/react-router'
import { WheelPage } from '../../pages/wheel-page'

export const Route = createLazyFileRoute('/SaraCookbook/wheel')({
  component: RouteComponent,
})

function RouteComponent() {
  return <WheelPage />
}
