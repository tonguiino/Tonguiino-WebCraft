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
            <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 }, width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={5} sx={{ maxWidth: '1000px', width: '100%' }}>
                    
                    {/* Header Centrado */}
                    <Grid size={{ xs: 12 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 2 }}>
                            <h2 style={{ fontSize: '2.8rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#3b82f6' }}>work</span>
                                Experiencia
                            </h2>
                            <p style={{ color: '#94a3b8', lineHeight: 1.6, maxWidth: '600px' }}>
                                Estos son algunos lugares en donde he aportado valor como Desarrollador profesional.
                            </p>
                        </Box>
                    </Grid>

                    {/* Tarjetas Apiladas */}
                    <Grid size={{ xs: 12 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                            {
                                experienceData.map((xp) => (
                                    <Card key={xp.id} sx={{
                                        width: '100%',
                                        maxWidth: '850px',
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        borderRadius: 4,
                                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                                        backdropFilter: "blur(10px)",
                                        color: "#e5e7eb",
                                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                        "&:hover": {
                                            borderColor: "rgba(59, 130, 246, 0.5)",
                                            transform: "translateY(-5px)",
                                            backgroundColor: "rgba(255, 255, 255, 0.06)",
                                            boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
                                        }

                                    }}>
                                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                            <h3 style={{ fontSize: '1.6rem', color: '#3b82f6', marginBottom: '10px' }}>{xp.title}</h3>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px', fontSize: '0.95rem', fontWeight: 600, color: '#94a3b8' }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                    <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>domain</span> {xp.company}
                                                </span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                    <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>calendar_month</span> {xp.time}
                                                </span>
                                            </div>
                                            <p style={{ lineHeight: 1.7, color: '#cbd5e1', marginBottom: xp.responsibilities?.length > 0 ? '20px' : '0' }}>{xp.description}</p>

                                            {xp.responsibilities && xp.responsibilities.length > 0 && (
                                                <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px', color: '#cbd5e1' }}>
                                                    {xp.responsibilities.map((resp, index) => (
                                                        <li key={index} style={{ lineHeight: 1.6 }}>{resp}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </CardContent>
                                    </Card>
                                ))
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </section>
    )
}

export default Experience