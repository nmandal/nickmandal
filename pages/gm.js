import Link from 'next/link'
import { Fragment, useState, useEffect } from 'react'

import { Disclosure, Menu, RadioGroup, Transition } from '@headlessui/react'
import { HomeIcon, PlusIcon, SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

import TextArea from '../components/TextArea'
import Feed from '../components/Feed'

export default function GM() {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account: ", account);
        setCurrentAccount(account)
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          blue: colors.blue,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const user = {
  name: 'Floyd Miles',
  email: 'floydmiles@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
]
const breadcrumbs = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const team = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bessie Richards',
    email: 'bessie.richards@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Black',
    email: 'floyd.black@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const settings = [
  { name: 'Public access', description: 'This project would be available to anyone who has the link' },
  { name: 'Private to Project Members', description: 'Only members of this project would be able to access' },
  { name: 'Private to you', description: 'You are the only one able to access this project' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  const [selected, setSelected] = useState(settings[0])

  return (
    <>


      {/* TODO import breadcrumb */}

      <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
        <form>
          <div className="space-y-6">
            <div>
              <h1 className="text-lg leading-6 font-medium text-gray-900">Project Settings</h1>
              <p className="mt-1 text-sm text-gray-500">
                Let’s get started by filling in the information below to create your new project.
              </p>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex indigo justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create this project
              </button>
            </div>

            <TextArea />

            <div className="space-y-2">
              <div className="space-y-1">
                <label htmlFor="add-team-members" className="block text-sm font-medium text-gray-700">
                  Add Team Members
                </label>
                <p id="add-team-members-helper" className="sr-only">
                  Search by email address
                </p>
                <div className="flex">
                  <div className="flex-grow">
                    <input
                      type="text"
                      name="add-team-members"
                      id="add-team-members"
                      className="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Email address"
                      aria-describedby="add-team-members-helper"
                    />
                  </div>
                  <span className="ml-3">
                    <button
                      type="button"
                      className="bg-white inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <PlusIcon className="-ml-2 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span>Add</span>
                    </button>
                  </span>
                </div>
              </div>

              <div className="border-b border-gray-200">
                <ul role="list" className="divide-y divide-gray-200">
                  {team.map((person) => (
                    <li key={person.email} className="py-4 flex">
                      <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                      <div className="ml-3 flex flex-col">
                        <span className="text-sm font-medium text-gray-900">{person.name}</span>
                        <span className="text-sm text-gray-500">{person.email}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Feed />


            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                Tags
              </label>
              <input
                type="text"
                name="tags"
                id="tags"
                className="mt-1 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
              />
            </div>


          </div>
        </form>
      </main>
    </>
  )
}
