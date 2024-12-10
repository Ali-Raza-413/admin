"use client";
import React from 'react'
import NotificationTabbar from '../components/NotificationsComponents/NotificationTabbar';
import BackButton from '../components/BackButton';
import { useRouter } from 'next/navigation';

const Notifications = () => {
    const router = useRouter();
  return (
    <div>
         <div className="flex justify-between py-5 p-4">
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="text-2xl font-bold text-black">Notification List</h1>
      </div>
      <button
        className="bg-gray-600 text-white px-6 py-2 rounded-lg mt-2"
          onClick={() => router.push("/notifications/addmessage")}
      >
        Add New Message
      </button>
      </div>
        <NotificationTabbar />
    </div>
  )
}

export default Notifications