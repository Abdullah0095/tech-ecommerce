import React from 'react';

const SmartWatch = () => {
    const watchfakeData = [
        {
            title: 'Smart Watch 1',
            image: 'https://i.ibb.co/C6hvrJL/smart-watch-6.jpg',
            price: '4500'
        },
        {
            title: 'Smart Watch 2',
            image: 'https://i.ibb.co/9vMYYyw/smart-watch-5.jpg',
            price: '14500'
        },
        {
            title: 'Smart Watch 3',
            image: 'https://i.ibb.co/YhQ67pT/samrt-watch-3.jpg',
            price: '4500'
        },

        {
            title: 'Smart Watch 4',
            image: 'https://i.ibb.co/fXsYWTk/smaet-watch-2.jpg',
            price: '4500'
        },
        {
            title: 'Smart Watch 5',
            image: 'https://i.ibb.co/ft3JPtq/6.jpg',
            price: '14500'
        }
    ]
    return (
        <div className='py-6 bg-white min-h-screen'>
            <div>
                <h1 className='text-center text-black text-4xl font-bold'>Smart Watch Zone</h1>
                <p className='text-center text-black text-xl py-3'>We Have {watchfakeData.length} Smart Watch in our stock</p>
            </div>
            <div className='grid grid-cols-4 mx-6'>
                {
                    watchfakeData.map(watch => <WatchDisplay watch={watch} key={watch.title}></WatchDisplay>)
                }
            </div>
        </div>
    );
};

const WatchDisplay = ({ watch }) => {
    const { title, image, price } = watch;
    return (
        <div>
            <div className='border-2 border-gray-500 m-2 py-6 rounded-md min-h-96'>
                <img className='h-40 mx-auto' src={image} alt="" />
                <div className='text-black text-center'>
                    <h1 className='text-2xl '>{title}</h1>
                    <p className='text-lg font-semibold'>Price : {price} BDT</p>
                    <button className="btn btn-success my-8 hover:text-orange-400 w-40 hover:animate-pulse">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default SmartWatch;