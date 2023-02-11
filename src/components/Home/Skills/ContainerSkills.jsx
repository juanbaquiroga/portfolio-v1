import React, { useState, useEffect} from "react";
import { db } from '../../../firebase/firebase';
import {getDocs, collection} from 'firebase/firestore'

import Skills from './Skills'

const ContainerSkills =() => {
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
        <main id="courses">
        {loading ?(
            <h1>cargando</h1>
        ):error ?(
            <h1> errorrrrrrr</h1>
        ):(
        <>
            <h1 className="subtitle">courses</h1>
            <Skills cursos={cursos}/>
        </>
        )}
        </main>
    )
}
export default ContainerSkills