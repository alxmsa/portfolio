import { Col } from 'react-bootstrap';

export const ProjectCard = ({title, description, imgUrl, path}) => {
    const filePath = `https://alxmsa.github.io/${path}`;
    console.log("Lien du projet :", filePath); // 🔍 Vérifie le chemin généré

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
               <img src={imgUrl} alt=''/>
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a 
                        href={filePath}
                        target="_blank"
                        rel="noopener noreferrer">See Project</a>
                </div>
            </div>
        </Col>
    )
}