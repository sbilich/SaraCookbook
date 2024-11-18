import { createFileRoute } from '@tanstack/react-router'
import { WheelPage } from '../../pages/wheel-page'

export const Route = createFileRoute('/SaraCookbook/wheel')({
  component: RouteComponent,
})

function RouteComponent() {
  return <WheelPage />
}
