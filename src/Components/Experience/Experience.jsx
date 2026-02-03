import { useRevealOnScroll } from "../../hooks/useRevealOnScroll"
import { useRef } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


const Experience = () => {

    const experienceRef = useRef()
    useRevealOnScroll(experienceRef)

    return (
        <section ref={experienceRef} >
            <Box>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Box sx={{ height: '100%', boxSizing: 'border-box' }}>
                            <h2>Experiencia laboral</h2>
                            <p>Estos son algunos lugares en donde he aportado valor como Desarrollador profesional</p>
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        <Stack spacing={2}>
                            <Box>Column 1 - Row 1</Box>
                            <Box>Column 1 - Row 2</Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </section>
    )
}

export default Experience