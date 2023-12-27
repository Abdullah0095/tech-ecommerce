import { Link } from 'react-router-dom';

const HomeMainCarousel = () => {

    return (
        <div className='py-4 bg-white'>
            <div className='mx-16 grid grid-cols-5'>
                <div className='text-center py-24'>
                    <ul>
                        <Link to='/mobile'><li className='text-black text-xl font-semibold border border-gray-400 mx-3 py-2'>Mobile</li></Link>
                        <Link to='/laptop'><li className='text-black text-xl font-semibold border border-gray-400 mx-3 py-2'>Laptop</li></Link>
                        <Link to='/smartWatch'><li className='text-black text-xl font-semibold border border-gray-400 mx-3 py-2'>Smart Watch</li></Link>
                    </ul>
                </div>
                <div className='col-span-4 mx-8'>
                    <div className="carousel w-full h-96">
                        <div id="item1" className="carousel-item w-full">
                            <Link to='/mobile'><img target="_blank" src="https://i.ibb.co/0Q74Wfj/mobile.jpg" className="w-full" /></Link>
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <Link to='/laptop'><img target="_blank" src="https://i.ibb.co/jwXL5pP/laptop.jpg" className="w-full" /></Link>
                        </div>
                        <div id="item3" className="carousel-item w-full">    
                            <Link to='/smartWatch'><img target="_blank" src="https://i.ibb.co/JCPFptW/smartwatch.jpg" className="w-full" /></Link>
                        </div>
                        
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                    </div></div>
            </div>

        </div>
    );

};

export default HomeMainCarousel;