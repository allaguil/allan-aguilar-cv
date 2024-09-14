// Secuencia de Renderizado de un Functional Component 
//debugger;
// 1. Se importan todas las dependencias al principio del archivo
import { FC, useState } from 'react';
import { Container, Typography, TextField, Button, FormControlLabel, Radio, RadioGroup, FormGroup, Checkbox, FormLabel, Box } from '@mui/material';
import { DB_HOST, DB_PORT } from '../config';

import { globalComponentTitle, textErrors } from '../styles/styles';
import { textFieldStyles, textFormLabel, formControlLabel, formRadio } from './ContactFormGrid.styles';

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  modality: string;
  jobPosition: string;
  jobType: string;
  company: string;
  companyUrl: string;
  jobLevel: string;
  skills: string[];
  jobDescription: string;
}

// Define the initial form data
const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  modality: '',
  jobPosition: '',
  jobType: '',
  company: '',
  companyUrl: '',
  jobLevel: '',
  skills: [],
  jobDescription: ''
};

// 2. Se declara el Functional Component
export const ContactFormGrid: FC = () => {

  // 3. Se inicializan los estados del Functional Component
  // Estado del formulario
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  // Estado de los errores del formulario
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    modality: false,
    jobPosition: false,
    jobType: false,
    company: false,
    companyUrl: false,
    jobLevel: false,
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
      jobType: formData.jobType === '',
      company: formData.company === '',
      companyUrl: formData.companyUrl === '',
      jobLevel: formData.jobLevel === '',
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

    console.log(formData.name);  // Check what's in skills before submitting
    console.log(formData.email);  // Check what's in skills before submitting
    console.log(formData.modality);  // Check what's in skills before submitting
    console.log(formData.jobPosition);  // Check what's in skills before submitting
    console.log(formData.jobType);  // Check what's in skills before submitting
    console.log(formData.company);  // Check what's in skills before submitting
    console.log(formData.companyUrl);  // Check what's in skills before submitting
    console.log(formData.jobLevel);  // Check what's in skills before submitting
    console.log(formData.skills);  // Check what's in skills before submitting
    console.log(formData.jobDescription);  // Check what's in skills before submitting

    try {
      // Peticion fetch a mi server
      const response = await fetch(`http://${DB_HOST}:${DB_PORT}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');

        setFormData(INITIAL_FORM_DATA); // Regresa los inputs a sus valores iniciales por defecto

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

        {/* Name, Email, Modality */}
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
              FormHelperTextProps={{ sx: textErrors }}
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
              FormHelperTextProps={{ sx: textErrors }}
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

        {/* Job Position, Job Type */}
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

          {/* name="jobPosition" tiene que ser igual a la propiedad del state */}
          <RadioGroup name="jobPosition" value={formData.jobPosition} onChange={handleChange} sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 2,
            gap: 1,
          }}>
            <FormLabel sx={textFormLabel}>Job Position</FormLabel>
            <FormControlLabel value="front-end" control={<Radio sx={formRadio} />} label="Front End Developer" sx={formControlLabel} />
            <FormControlLabel value="back-end" control={<Radio sx={formRadio} />} label="Back End Developer" sx={formControlLabel} />
            <FormControlLabel value="full-stack" control={<Radio sx={formRadio} />} label="Full Stack Developer" sx={formControlLabel} />
          </RadioGroup>
          {formErrors.jobPosition && <Typography variant="body1" sx={textErrors}>Job Position is required</Typography>}

          <RadioGroup name="jobType" value={formData.jobType} onChange={handleChange} sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 1,
            gap: 1,
          }}>
            <FormLabel sx={textFormLabel}>Job Type</FormLabel>
            <FormControlLabel value="full-time" control={<Radio sx={formRadio} />} label="Full-time" sx={formControlLabel} />
            <FormControlLabel value="part-time" control={<Radio sx={formRadio} />} label="Part-time" sx={formControlLabel} />
            <FormControlLabel value="freelance" control={<Radio sx={formRadio} />} label="Freelance" sx={formControlLabel} />
          </RadioGroup>

        </Box>

        {/* Company, CompanyURL, Job Level */}
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2, gap: 5 }}>

          <Box sx={{ flex: 1 }}>
            <TextField
              id="company"
              label="Company"
              name="company"
              type="text"
              variant="standard"
              value={formData.company}   // estado
              onChange={handleChange} // handler
              error={formErrors.company} // Estado de error
              helperText={formErrors.company && 'Company is required'} // Texto de ayuda
              FormHelperTextProps={{ sx: textErrors }}
              sx={textFieldStyles}    // Estilos personalizados
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <TextField
              id="email"
              label="Company URL"
              name="companyUrl"
              type="text"
              variant="standard"
              value={formData.companyUrl}       // estado
              onChange={handleChange}      // handler
              error={formErrors.email}     // Estado de error
              helperText={formErrors.email && 'Valid email is required'} // Texto de ayuda
              FormHelperTextProps={{ sx: textErrors }}
              sx={textFieldStyles}         // Estilos personalizados
            />
          </Box>

          {/* name="jobLevel" tiene que ser igual a la propiedad del state */}
          <RadioGroup name="jobLevel" value={formData.jobLevel} onChange={handleChange} sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 2,
            gap: 1,
            justifyContent: 'flex-end',
          }}>
            <FormLabel sx={textFormLabel}>Job Level</FormLabel>
            <FormControlLabel value="senior" control={<Radio sx={formRadio} />} label="Senior" sx={formControlLabel} />
            <FormControlLabel value="mid" control={<Radio sx={formRadio} />} label="Mid" sx={formControlLabel} />
            <FormControlLabel value="junior" control={<Radio sx={formRadio} />} label="Junior" sx={formControlLabel} />
          </RadioGroup>
        </Box>

        {/* Skills Required */}
        <Box sx={{ marginTop: 2 }}>
          <FormLabel sx={textFormLabel}>Skills Required</FormLabel>
          <FormGroup sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
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
                sx={formControlLabel}
              />
            ))}
          </FormGroup>
        </Box>

        {/* Job Description */}
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
          <TextField
            id="jobDescription"
            label="Job Description"
            name="jobDescription"
            type="text"
            variant="outlined"
            value={formData.jobDescription}
            onChange={handleChange}
            error={formErrors.jobDescription}
            helperText={formErrors.jobDescription && 'Job description is required'}
            FormHelperTextProps={{ sx: textErrors }}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            sx={textFieldStyles}
          />
        </Box>

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" sx={{ fontFamily: 'Pangolin', marginTop: 2 }}>
          Submit
        </Button>

      </form>
    </Container>
  )
}