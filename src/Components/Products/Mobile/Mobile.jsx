import React from 'react';

const Mobile = () => {
    const mobilefakeData = [
        {
            title: 'Google Pixel',
            image: 'https://i.ibb.co/PDqNFC0/pixel.jpg',
            price: '45999'
        },
        {
            title: 'One Plus',
            image: 'https://i.ibb.co/FxkC8TZ/oneplus.webp',
            price: '55999'
        },
        {
            title: 'IQOO 7',
            image: 'https://i.ibb.co/Hz7v7CL/iqoo.jpg',
            price: '39999'
        },
        {
            title: 'Infinix Hot',
            image: 'https://i.ibb.co/ThXRJWQ/infinix.png',
            price: '19999'
        },
        {
            title: 'Oppo F21 pro',
            image: 'https://i.ibb.co/FBZFChq/oppo.webp',
            price: '29999'
        },
        {
            title: 'Samsung s23',
            image: 'https://i.ibb.co/52fCwvj/samsung.webp',
            price: '57999'
        },
        {
            title: 'XIAOMI MI 12',
            image: 'https://i.ibb.co/vZ8tB92/xiaomi.png',
            price: '23999'
        }
    ]
    return (
        <div className='py-6 bg-white'>
            <div>
                <h1 className='text-center text-black text-4xl font-bold'>Mobile Zone</h1>
                <p className='text-center text-black text-xl py-3'>We Have {mobilefakeData.length} mobile in our stock</p>
            </div>
            <div className='grid grid-cols-3 ml-4'>
                {
                    mobilefakeData.map(mobile => <MobileDisplay mobile={mobile} key={mobile.title}></MobileDisplay>)
                }
            </div>
        </div>
    );
};

const MobileDisplay = ({ mobile }) => {
    const { title, image, price } = mobile;
    return (
        <div className='m-2'>
            <div className="card w-96 border-2 border-gray-600 h-[500px] py-2">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-black">
                    <h2 className="card-title">{title}</h2>
                    <p className='py-2 font-bold'>Price : {price} BDT</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile;