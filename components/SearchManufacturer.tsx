import { SearchManufacturerProps } from '@/types'
import React, { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constants'


const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, SetQuery] = useState('')

    const filteredManufacturers = query === ""
        ? manufacturers
        : manufacturers.filter((item) => (
            item.toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.toLowerCase().replace(/\s+/g, ""))

        ))
    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            alt='car logo'
                            width={20}
                            height={20}
                            className='ml-4'
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder='Volkswagen'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => SetQuery(e.target.value)} />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom='opacity-100'
                        leaveTo="opacity-0"
                        afterLeave={() => SetQuery('')}
                    >
                        <Combobox.Options>
                            {
                                filteredManufacturers.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active }) => `relative search-manufactuer__option
                                         ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                                        value={item}
                                    >
                                        {item}
                                    </Combobox.Option>
                                )
                                )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer