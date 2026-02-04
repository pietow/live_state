import { use } from "react"
import { UserContext } from '@/state/UserContext';

export function Content() {
    const { permissions } = use(UserContext)
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
