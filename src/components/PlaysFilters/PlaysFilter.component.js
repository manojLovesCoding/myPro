import { Disclosure } from '@headlessui/react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const PlaysFilter = (props) => {
    return (
        <Disclosure className="bg-slate-400">
            {({ open }) => (
                <>
                    <Disclosure.Button className="py-2 flex items-center gap-3">
                        {open ? <FaChevronUp /> : <FaChevronDown />}
                        <span className={open ? "text-red-600" : "text-gray-700"}>{props.title}</span>

                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        <div className='flex item-center gap-3 flex-wrap'>
                            {
                                props.tags.map((tag) => (
                                    <>
                                        <div className='border-2 border-grap-200 p-2'>
                                            <span className='text-red-600'>{tag}</span>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </Disclosure.Panel>
                </>

            )}
        </Disclosure>
    );
};

export default PlaysFilter;