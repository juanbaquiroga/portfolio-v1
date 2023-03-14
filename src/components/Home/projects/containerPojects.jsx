import React, { useState, useEffect} from "react";
import { db } from '../../../firebase/firebase';
import {getDocs, collection, query, where} from 'firebase/firestore';
import {LinearProgress } from "@mui/material";
import Projects from './Projects';

const ContainerProjects =() => {
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(false);
    useEffect(()=>{
        const projectCollections = collection(db, 'projects')
        getDocs(projectCollections)
        .then((data)=>{
            const lista = data.docs.map((item)=>{
                return {
                    ...item.data(),
                    id: item.id
                }
            })
            setProjects(lista)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{setLoading(false)})
    },[])

    return(
        <section id="projects">
            {loading ?(
                <>
                <LinearProgress></LinearProgress>
                </>
            ):error ?(
                <h1 style={{textAlign: 'center'}}> error</h1>
            ):(
                <>
                    <h1 className="subtitle">Projects</h1>
                    <div className="projectsList">
                        <Projects projects={projects} />
                    </div>
                </>
                )}
        </section>
    )}

export default ContainerProjects