import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/profile')({
  component: Profile,
})

function Profile() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p>View and edit your profile information.</p>
    </div>
  )
}
