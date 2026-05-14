import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/settings')({
  component: Settings,
})

function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <p>Manage your application settings here.</p>
    </div>
  )
}
