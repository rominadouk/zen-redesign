import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const FeelingsDropdown = () => {
    return ( 
        <div>
            <Menu as="div" className="relative inline-block text-left">
            <div className='flex flex-col w-60 lg:w-96'>
                <Menu.Button className="inline-flex gap-x-1.5 rounded-md bg-white pl-3 py-2 pl-3 text-sm font-semibold shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50">Select an emotion
                    <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 bg-pure-white">
                    <Menu.Item>
                    {({ active }) => (
                            <li className={( active ? 'px-4 py-2 bg-off-white list-none' :'px-4 py-2 text-sm list-none'
                        )}>Happy</li>
                        )}

                    </Menu.Item>
                    {/* Improve my Skin Care Item */}
                    <Menu.Item>
                        {({ active }) => (
                            <li className={( active ? 'px-4 py-2 bg-off-white list-none' :'px-4 py-2 text-sm list-none'
                            )}>Sad</li>
                        )}
                    </Menu.Item>
                    {/* Laugh Item */}
                    <Menu.Item>
                    {({ active }) => (
                            <li className={( active ? 'px-4 py-2 bg-off-white list-none' :'px-4 py-2 text-sm list-none'
                            )}>Angry</li>
                    )}
                    </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <li className={( active ? 'px-4 py-2 bg-off-white list-none' :'px-4 py-2 text-sm list-none'
                            )}>Content</li>
                            )}
                        </Menu.Item>
                </div>
            </Menu.Items>
        </Transition>
        </Menu>

            </div>
     );
}
 
export default FeelingsDropdown;