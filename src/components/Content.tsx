export function Content({
    permissions,
}: {
    permissions: undefined | string[]
}) {
    if (permissions === undefined) {
        return null
    }
    return (
        <p>
            {permissions.includes('admin') ? 'Some important things only admins can see' : 'Insufficient permissions'
            } 
        </p>
    )
}
