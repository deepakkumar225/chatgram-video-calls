import { BellIcon } from 'lucide-react'

const NoNotificationsFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <BellIcon className="h-12 w-12 text-base-content/30 mb-4" />
            <h3 className="text-lg font-semibold mb-1">No notifications yet</h3>
            <p className="text-base-content/60">
                When someone sends you a friend request, it will appear here.
            </p>
        </div>
    )
}

export default NoNotificationsFound