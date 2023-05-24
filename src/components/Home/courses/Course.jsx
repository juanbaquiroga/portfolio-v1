import React from "react";


const Curso =({curso})=>{

    
    return (
        <>
            <div className="card">
                <a alt={curso.title} href={curso.url} rel="noreferrer" target='_blank'><figure className="cardImage">
                    <img src={curso.img} alt={curso.title} />
                </figure></a>
                <div className="cardHeader">
                    <h3>{curso.title}</h3>
                    <form action={curso.url} target='_blank'>
                    <button className="cardIcon" type="submit">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" viewBox="0 0 24 24" fill="#000" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" display="block">
                                <path d="M910 4674 c-177 -46 -335 -175 -415 -339 -70 -141 -66 -20 -63 -1801 l3 -1609 26 -67 c38 -98 86 -172 155 -242 70 -69 144 -117 242 -155 l67 -26 1625 0 1625 0 70 22 c188 60 337 204 414 401 l26 67 3 1057 c2 1028 2 1059 -17 1095 -83 163 -299 163 -382 1 -18 -36 -19 -73 -19 -1028 0 -726 -3 -1004 -12 -1038 -16 -64 -86 -134 -150 -150 -67 -17 -3029 -17 -3096 0 -64 16 -134 86 -150 150 -9 35 -12 432 -12 1551 0 1694 -6 1574 75 1645 27 23 63 44 90 51 31 8 338 11 1032 11 940 0 990 1 1028 19 164 76 166 298 3 382 -36 18 -73 19 -1075 18 -871 0 -1047 -3 -1093 -15z"/>
                                <path d="M3740 4667 c-25 -13 -58 -43 -75 -66 -27 -39 -30 -50 -30 -120 0 -68 3 -82 27 -117 50 -71 88 -89 201 -92 l100 -4 -795 -796 c-644 -645 -798 -804 -808 -836 -20 -62 -9 -149 26 -198 56 -79 169 -111 262 -73 26 11 274 253 829 807 l791 791 4 -100 c3 -89 6 -104 30 -139 15 -21 44 -50 65 -64 31 -21 48 -25 113 -25 67 0 81 3 116 27 21 15 50 44 64 65 l25 37 0 396 0 396 -25 37 c-14 21 -43 50 -64 65 l-39 27 -386 3 -387 3 -44 -24z"/>
                            </g>
                        </svg>
                    </button>
                    </form>
                </div>
                <div className="cardContent">
                    <p><b>ID:</b> {curso.id2}</p>
                </div>
                <div className="cardFooter">
                {curso.skills.map((skill) => (
                    <div className="cardMeta">
                        <span>{skill}</span>
                    </div>
                ))}
                    
                </div>
            </div>
        </>
    )
}
export default Curso