import React from 'react'
import './Ticket.css'
export default function Ticket() {
  const tickets = [
    { count: '10', label: 'AI Call', bgClass: 'bg-yellow' },
    { count: '05', label: 'Whatsapp', bgClass: 'bg-bottlegreen' },
    { count: '02', label: 'Chat Support', bgClass: 'bg-peach' },
  ];

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-0">
          <div className="flex flex-col pt-10 font-bold text-3xl">Tickets</div>
          <div className="flex font-normal text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className="flex justify-between pt-7">
          {tickets.map((ticket, index) => (
            <div key={index} className="flex bg-white rounded-3xl justify-between p-9 w-24 gap-x-8">
              <div className={`flex flex-col w-3 gap-0 `}>
                <div className="flex font-medium text-xl remove-margin">{ticket.count}</div>
                <div className="flex color font-semibold remove-margin">
                  <p className="remove-margin ">{ticket.label}</p>
                </div>
              </div>
              <div className={`flex w-1 rounded-2xl ${ticket.bgClass}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}