import {React} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/gefGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category); 

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className='card-grid'>
                <ol>{
                        images.map( images =>( 
                            <GifGridItem 
                                key ={images.id}
                                {...images} 
                            /> 
                    ))
                }
                </ol>
            </div>
        </>
    )
}
