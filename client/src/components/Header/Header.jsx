import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  ShoppingBagIcon,
  HomeIcon,
  SparklesIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
  LifebuoyIcon,
  CakeIcon,
  MagnifyingGlassIcon

} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const categories = [
  { name: 'Mobile Phones', href: '#', icon: DevicePhoneMobileIcon },
  { name: 'Laptops and Computers', href: '#', icon: ComputerDesktopIcon },
  { name: 'Tech Accessories', href: '#', icon: CodeBracketIcon },
  { name: 'Fashion', href: '#', icon: ShoppingBagIcon },
  { name: 'Home and Decor', href: '#', icon: HomeIcon },
  { name: 'Beauty and Health', href: '#', icon: SparklesIcon },
  { name: 'Books', href: '#', icon: BookOpenIcon },
  { name: 'Toys and Games', href: '#', icon: PuzzlePieceIcon },
  { name: 'Sports and Outdoors', href: '#', icon: LifebuoyIcon },
  { name: 'Food and Grocery', href: '#', icon: CakeIcon },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between items-center p-4">
      {/* Categories List */}
      <Popover className="relative">
        <Popover.Button className="pl-1 flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900 focus:outline-none">
          Categories
          <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-72 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
            <div className="p-3">
              {categories.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-4 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="flex-auto">
                    <a href={item.href} className="block font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-full border-2 border-gray-200 w-2/3 sm:w-4/5 ">
        <input type="text" className="w-full rounded-full rounded-r-none py-2.5 px-4 text-gray-700 leading-tight focus:outline-none border-" placeholder="Search..." />
        <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}