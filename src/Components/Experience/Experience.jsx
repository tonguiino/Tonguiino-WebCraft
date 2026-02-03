import "./Experience.scss"
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll"
import { useRef } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import { experienceData } from "./experienceData";
// import Stack from '@mui/material/Stack';


const Experience = () => {

    const experienceRef = useRef()
    useRevealOnScroll(experienceRef)

    return (
        <section ref={experienceRef} className='experience' >
            <Box>
                <Grid container spacing={2}

                >
                    <Grid size={8}>
                        <Box sx={{ height: '100%', boxSizing: 'border-box' }}>
                            <h2>Experiencia laboral</h2>
                            <p>Estos son algunos lugares en donde he aportado valor como Desarrollador profesional</p>
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        {
                            experienceData.map((xp) => (
                                <Card key={xp.id} sx={{
                                    border: "2px solid #3b82f6",
                                    borderRadius: 3,
                                    backgroundColor: "#020617",
                                    color: "#e5e7eb",
                                    transition: "0.3s",
                                    "&:hover": {
                                        borderColor: "#60a5fa",
                                        transform: "translateY(-4px)",
                                    }

                                }}>
                                    <CardContent>
                                        <h3>{xp.title}</h3>
                                        <p>{xp.company}</p>
                                        <p>{xp.time}</p>
                                        <p>{xp.location}</p>
                                        <p>{xp.description}</p>
                                    </CardContent>
                                </Card>
                            ))
                        }
                    </Grid>
                </Grid>
            </Box>
        </section>
    )
}

export default Experience