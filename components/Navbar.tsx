import {
  ShoppingCartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 py-2 text-white relative">
      <div className="flex flex-row justify-between items-center my-auto mx-5 lg:mx-12">
        <h1 className="text-white text-3xl">Template</h1>
        <ul className="hidden lg:flex flex-row justify-between items-center ">
          <li className="text-xl mx-4">Home</li>
          <li className="text-xl mx-4">About</li>
          <li className="text-xl mx-4">About</li>
          <li className="text-xl mx-4">Contact</li>
        </ul>
        <div className={`hidden lg:flex flex-row justify-between items-center`}>
          <MagnifyingGlassIcon className="h-6 w-6 text-white mx-2" />
          <ShoppingCartIcon className="h-6 w-6 mx-2" />
          <UserCircleIcon className="h-6 w-6 mx-2" />
        </div>

        <Popover className="lg:hidden">
          {({ open }) => (
            <>
              <Popover.Button className="focus:ring-white">
                {open ? (
                  <XMarkIcon className="h-6 w-6 text-black bg-white rounded-sm focus:ring-yellow-600" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-white" />
                )}
              </Popover.Button>
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-30 inset-x-0 top-10 origin-top-right bg-white text-black border-2 py-2 lg:hidden shadow-sm">
                  {open && (
                    <div className="flex lg:hidden flex-col justify-between items-center">
                      <a className="text-xl mx-auto py-4 border-b-2 px-24 border-black">
                        Home
                      </a>
                      <a className="text-xl mx-auto py-4 border-b-2 px-24 border-black">
                        About
                      </a>
                      <a className="text-xl mx-auto py-4 border-b-2 px-24 border-black">
                        About
                      </a>
                      <a className="text-xl mx-auto py-4">Contact</a>
                      <div className="flex justify-between mx-auto">
                        <button className="bg-black p-2 text-white">
                          <UserCircleIcon className="h-6 w-6 mx-2" />
                        </button>
                        <button className="bg-black p-2 text-white">
                          <ShoppingCartIcon className="h-6 w-6 mx-2" />
                        </button>
                      </div>
                    </div>
                  )}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </nav>
  );
}
