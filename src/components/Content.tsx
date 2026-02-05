'use client'

import { useSelector } from "react-redux"
import { type RootState } from "@/store"



export function Content() {
    const permissions = useSelector((s: RootState) => s.user.permissions)


    if (permissions === undefined) return null

    return (
        <div className="contentRoot">
            <p className="permissionText">
                {permissions.includes('admin')
                    ? 'Some important stuff that only an admin can do'
                    : 'Insufficient permissions'}
            </p>

            <div className="postsColumn">
            </div>
        </div>
    )
}

