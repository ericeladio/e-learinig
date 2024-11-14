import React from 'react'

export const CustomSection = ({ title, description, isPricning ,children }) => {
    return (
        <section className="mt-24 m-8">
            <div>
                <h3 className="text-3xl">{title}</h3>
                <div className="flex mt-2 justify-between">
                    <p className="text-sm  w-9/12">
                        {description}
                    </p>
                    {
                        isPricning ?
                        <div className='flex gap-x-2'>
                            <button className="bg-orangeShade-50 text-sm text-absoluteBlack rounded-sm px-2 h-[30px]">Monthly</button>
                            <button className="bg-orangeShade-50 text-sm text-absoluteBlack rounded-sm px-2 h-[30px]">Yearly</button>
                        </div>
                        :
                        <button className="bg-absoluteWhite text-sm text-absoluteBlack rounded-sm px-2 h-[30px]">View All</button>
                    }
                </div>
            </div>
            <div className=" mt-8 flex justify-between flex-wrap gap-y-4">
                {children}
            </div>
        </section>
    )
}
