import React, { useState, useEffect} from "react";
import { db } from '../../../firebase/firebase.js';
import {getDocs, collection, query, where} from 'firebase/firestore';
import Skills from './Skills.jsx';

const ContainerSkills =() => {
    const [loading, setLoading] = useState(true)
    const [frontend, setFrontend] = useState([]);
    const [backend, setBackend] = useState([])
    const [design, setDesign] = useState([])
    const [error, setError] = useState(false);

    useEffect(()=>{
        const frontendCollections = query(collection(db, 'skills'), where ("type", "==", "frontend"))
        getDocs(frontendCollections)
        .then((data)=>{
            const lista = data.docs.map((item)=>{
                return {
                    ...item.data(),
                    id: item.id
                }
            })
            setFrontend(lista)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{setLoading(false)})
    },[])
    useEffect(()=>{
        const backendCollections = query(collection(db, 'skills'), where ("type", "==", "backend"))
        getDocs(backendCollections)
        .then((data)=>{
            const lista = data.docs.map((item)=>{
                return {
                    ...item.data(),
                    id: item.id
                }
            })
            setBackend(lista)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{setLoading(false)})
    },[])
    useEffect(()=>{
        const designCollections = query(collection(db, 'skills'), where ("type", "==", "design"))
        getDocs(designCollections)
        .then((data)=>{
            const lista = data.docs.map((item)=>{
                return {
                    ...item.data(),
                    id: item.id
                }
            })
            setDesign(lista)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{setLoading(false)})
    },[])

    return(
        <section id="skills">
            {loading ?(
                <>
                </>
            ):error ?(
                <h1 style={{textAlign: 'center'}}> error</h1>
            ):(
                <>
                    <h1 className="subtitle">Skills</h1>
                    <div className="skillsList">
                        <Skills skills={frontend} type={'Frontend'}/>
                        <Skills skills={backend} type={'Backend'}/>
                        <Skills skills={design} type={'Design'}/>
                    </div>
                </>
                )}
        </section>)
}
export default ContainerSkills