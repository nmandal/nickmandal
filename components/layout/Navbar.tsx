import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

const navigation = [{ name: 'Blog', href: '/blog' }];

export const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="py-2 px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/">
                  <a className="flex-shrink-0 flex items-center">
                  ⌘
                  </a>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                    {status === 'authenticated' ? (
                      <Link href="/">
                        <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white">
                          Data
                        </a>
                      </Link>
                    ) : (
                      <Link href="/">
                        <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white">
                          Projects
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {status === 'authenticated' ? (
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white"
                    onClick={() => signOut()}
                  >
                    Log out
                  </a>
                ) : (
                  <Link href="/login">
                    <a> Log in</a>
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/* Mobile Navbar links */}
          <Disclosure.Panel className="sm:hidden shadow">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                    {item.name}
                  </a>
                </Link>
              ))}
              {status === 'authenticated' ? (
                <div>
                  <Link href="/">
                    <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                      Data
                    </a>
                  </Link>
                </div>
              ) : (
                <Link href="/">
                  <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                    Projects
                  </a>
                </Link>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
