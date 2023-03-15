import React, { useState, useEffect} from "react";
import { db } from '../../../firebase/firebase';
import {getDocs, collection} from 'firebase/firestore';
import {Skeleton } from "@mui/material";
import Cursos from './Cursos';

const ContainerCursos =() => {
    const [loading, setLoading] = useState(true)
    const [cursos, setCursos] = useState([])
    const [error, setError] = useState(false);

    
    useEffect(()=>{
        const cursosCollection = collection(db, 'cursos')
        getDocs(cursosCollection)
        .then((data)=>{
            const lista = data.docs.map((item)=>{
                return {
                    ...item.data(),
                    id: item.id
                }
            })
            setCursos(lista)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{setLoading(false)})
    },[])

    return(
        <section id="courses">
        {loading ?(
            <>
            <h1 className="subtitle">courses</h1>
            <div className="cardList">
                <div className="card">
                    <figure className="cardImage">
                        <Skeleton variant="rounded" width={'100%'} height={'200px'} />
                    </figure>
                    <div className="cardHeader">
                        <Skeleton variant="h3" sx={{ fontSize: '25px' }} width={250} />
                        <Skeleton variant="circular" width={40} height={40} />
                    </div>
                    <div className="cardContent">
                        <Skeleton variant="text" sx={{ fontSize: '18px' }}  width={150}/>
                    </div>
                    <div className="cardFooter">
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={150}/>
                    </div>
                </div>
                <div className="card">
                    <figure className="cardImage">
                        <Skeleton variant="rounded" width={'100%'} height={'200px'} />
                    </figure>
                    <div className="cardHeader">
                        <Skeleton variant="h3" sx={{ fontSize: '25px' }} width={250} />
                        <Skeleton variant="circular" width={40} height={40} />
                    </div>
                    <div className="cardContent">
                        <Skeleton variant="text" sx={{ fontSize: '18px' }}  width={150}/>
                    </div>
                    <div className="cardFooter">
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={150}/>
                    </div>
                </div>
                <div className="card">
                    <figure className="cardImage">
                        <Skeleton variant="rounded" width={'100%'} height={'200px'} />
                    </figure>
                    <div className="cardHeader">
                        <Skeleton variant="h3" sx={{ fontSize: '25px' }} width={250} />
                        <Skeleton variant="circular" width={40} height={40} />
                    </div>
                    <div className="cardContent">
                        <Skeleton variant="text" sx={{ fontSize: '18px' }}  width={150}/>
                    </div>
                    <div className="cardFooter">
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={150}/>
                    </div>
                </div>
            </div>
            </>
        ):error ?(
            <h1 style={{textAlign: 'center'}}> error</h1>
        ):(
        <>
            <h1 className="subtitle">courses</h1>
            <Cursos cursos={cursos}/>
        </>
        )}
        </section>
    )
}
export default ContainerCursos