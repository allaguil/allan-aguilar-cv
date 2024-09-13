// Secuencia de Renderizado de un Functional Component 
//debugger;
// 1. Se importan todas las dependencias al principio del archivo
import { FC, useState } from 'react';
import { Container, Typography, TextField, Button, FormControlLabel, Radio, RadioGroup, FormGroup, Checkbox, FormLabel, Box } from '@mui/material';
import { DB_HOST, DB_PORT } from '../config';

import { globalComponentTitle } from '../styles/styles';
import { textFieldStyles, textFormLabel, formControlLabel, formRadio } from './ContactFormGrid.styles';

// 2. Se declara el Functional Component
export const ContactFormGrid: FC = () => {


  // 3. Se inicializan los estados del Functional Component
  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    modality: '',
    jobPosition: '',
    company: '',
    companyUrl: '',
    jobType: '',
    skills: [] as string[],
    jobDescription: ''
  });

  // Estado de los errores del formulario
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    modality: false,
    jobPosition: false,
    company: false,
    jobType: false,
    jobDescription: false
  });



  // 4. Se declaran los handlers del Functional Component
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter(t => t !== value)
    }));
  };

  const validateForm = () => {
    const errors = {
      name: formData.name === '',
      email: formData.email === '',
      modality: formData.modality === '',
      jobPosition: formData.jobPosition === '',
      company: formData.company === '',
      jobType: formData.jobType === '',
      jobDescription: formData.jobDescription === ''
    };
    setFormErrors(errors);
    return !Object.values(errors).includes(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log(formData.skills);  // Check what's in skills before submitting

    try {
      const response = await fetch(`http://${DB_HOST}:${DB_PORT}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');

        setFormData({
          name: '',
          email: '',
          modality: '',
          jobPosition: '',
          company: '',
          companyUrl: '',
          jobType: '',
          skills: [],
          jobDescription: ''
        });

      } else {
        alert('Error submitting the form.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // 5. Se retorna el JSX del Functional Component
  return (

    <Container>
      <Typography variant="h2" mb={3} mt={4} sx={globalComponentTitle}>Contact Form</Typography>

      <form onSubmit={handleSubmit}>

        {/* 1st Row */}
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>

          <Box sx={{ flex: 1 }}>
            <TextField
              id="name"
              label="Name"
              name="name"
              type="text"
              variant="standard"
              value={formData.name}   // estado
              onChange={handleChange} // handler
              error={formErrors.name} // Estado de error
              helperText={formErrors.name && 'Name is required'} // Texto de ayuda
              sx={textFieldStyles}    // Estilos personalizados
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <TextField
              id="email"
              label="Email"
              name="email"
              type="email"
              variant="standard"
              value={formData.email}       // estado
              onChange={handleChange}      // handler
              error={formErrors.email}     // Estado de error
              helperText={formErrors.email && 'Valid email is required'} // Texto de ayuda
              sx={textFieldStyles}         // Estilos personalizados
            />
          </Box>

          <RadioGroup name="modality" value={formData.modality} onChange={handleChange} sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 2,
            gap: 1,
            flex: 0.7,
          }}>
            <FormLabel sx={textFormLabel}>Modality</FormLabel>
            <FormControlLabel value="remote" control={<Radio sx={formRadio} />} label="Remote" sx={formControlLabel} />
            <FormControlLabel value="hybrid" control={<Radio sx={formRadio} />} label="Hybrid" sx={formControlLabel} />
          </RadioGroup>
        </Box>


        {/* 2nd Row */}
        <RadioGroup name="jobPosition" value={formData.jobPosition} onChange={handleChange} sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 2,
            gap: 1,
            flex: 0.7,
          }}>
            <FormLabel sx={{ ...textFormLabel, marginRight: -2 }}>Job Position</FormLabel>
            <FormControlLabel value="frontEnd" control={<Radio sx={formRadio} />} label="Front End Developer" sx={formControlLabel} />
            <FormControlLabel value="backEnd" control={<Radio sx={formRadio} />} label="Back End Developer" sx={formControlLabel} />
            <FormControlLabel value="fullStack" control={<Radio sx={formRadio} />} label="Full Stack Developer" sx={formControlLabel} />
          </RadioGroup>
          {formErrors.jobPosition && <p style={{ color: 'red' }}>Job position is required</p>}





        <TextField
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          error={formErrors.company}
          helperText={formErrors.company && 'Company is required'}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Company URL"
          name="companyUrl"
          value={formData.companyUrl}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />






        {/* 3rd Row */}
        <RadioGroup name="jobType" value={formData.jobType} onChange={handleChange} sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 1,
          gap: 2,
        }}>
          <FormLabel sx={{ ...textFormLabel, marginRight: -2 }}>Job Type</FormLabel>
          <FormControlLabel value="full-time" control={<Radio sx={formRadio} />} label="Full-time" sx={formControlLabel} />
          <FormControlLabel value="part-time" control={<Radio sx={formRadio} />} label="Part-time" sx={formControlLabel} />
          <FormControlLabel value="contract" control={<Radio sx={formRadio} />} label="Contract" sx={formControlLabel} />
          <FormControlLabel value="temporary" control={<Radio sx={formRadio} />} label="Temporary" sx={formControlLabel} />
          <FormControlLabel value="freelance" control={<Radio sx={formRadio} />} label="Freelance" sx={formControlLabel} />
          <FormControlLabel value="seasonal" control={<Radio sx={formRadio} />} label="Seasonal" sx={formControlLabel} />
        </RadioGroup>





















        <FormGroup>
          <FormLabel>Skills Required</FormLabel>
          {['HTML', 'CSS', 'Sass / Less', 'JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'React Native', 'VueJS', 'Angular', 'AEM', 'Adobe Target', 'Adobe Analytics', 'Git', 'Material UI', 'Tailwind CSS', 'Bootstrap', 'Chakra UI', 'Tealium', 'NodeJS', 'NestJS', 'ExpressJS', 'AWS', 'REST APIs', 'GraphQL', 'Jest', 'MongoDB'].map((tech) => (
            <FormControlLabel
              control={
                <Checkbox
                  value={tech}
                  checked={formData.skills.includes(tech)}
                  onChange={handleCheckboxChange}
                />
              }
              label={tech}
              key={tech}
            />
          ))}
        </FormGroup>
        <TextField
          label="Job Description"
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          error={formErrors.jobDescription}
          helperText={formErrors.jobDescription && 'Job description is required'}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

    </Container>
  )
}