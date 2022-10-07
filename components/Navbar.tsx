import {
  ShoppingCartIcon,
  UserCircleIcon,
  DocumentMagnifyingGlassIcon,
  Bars2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";

export default function Navbar() {
  return (
    <Popover as="nav" className="bg-slate-900 py-2 text-white relative">
      <div className="flex flex-row justify-between items-center my-auto mx-4 lg:mx-12">
        <h1 className="text-white text-3xl">Template</h1>
        <ul className="hidden lg:flex flex-row justify-between items-center ">
          <li className="text-xl mx-4">Home</li>
          <li className="text-xl mx-4">About</li>
          <li className="text-xl mx-4">About</li>
          <li className="text-xl mx-4">Contact</li>
        </ul>

        <Popover.Button className="focus:ring-white">
          <Bars2Icon className="h-6 w-6 text-white" />
        </Popover.Button>
        {/* <XMarkIcon className="h-6 w-6 text-white" /> */}

        {(open: boolean) => (
          <Transition>
            <Popover.Panel className="absolute z-10">
              <div
                className={`${
                  open && "hidden"
                } lg:flex flex-row justify-between items-center`}
              >
                <DocumentMagnifyingGlassIcon className="h-6 w-6 text-white mx-2" />
                <ShoppingCartIcon className="h-6 w-6 mx-2" />
                <UserCircleIcon className="h-6 w-6 mx-2" />
              </div>
            </Popover.Panel>
          </Transition>
        )}
      </div>
    </Popover>
  );
}
