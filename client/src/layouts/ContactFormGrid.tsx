import { FC, useState } from 'react';
import { Container, Typography, TextField, Button, FormControlLabel, Radio, RadioGroup, FormGroup, Checkbox, FormLabel } from '@mui/material';
import { DB_HOST, DB_PORT } from '../config';

import { globalComponentTitle } from '../styles/styles';

export const ContactFormGrid: FC = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    modality: '',
    company: '',
    companyUrl: '',
    role: '',
    skills: [] as string[],
    jobDescription: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    modality: false,
    company: false,
    role: false,
    jobDescription: false
  });

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
      company: formData.company === '',
      role: formData.role === '',
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
          company: '',
          companyUrl: '',
          role: '',
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

  return (
    <Container>

      <Typography variant="h2" mb={3} mt={4} sx={globalComponentTitle}>Contact Form</Typography>


      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={formErrors.name}
          helperText={formErrors.name && 'Name is required'}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={formErrors.email}
          helperText={formErrors.email && 'Valid email is required'}
          fullWidth
          margin="normal"
        />
        <FormLabel>Modality</FormLabel>
        <RadioGroup name="modality" value={formData.modality} onChange={handleChange}>
          <FormControlLabel value="remote" control={<Radio />} label="Remote" />
          <FormControlLabel value="hybrid" control={<Radio />} label="Hybrid" />
        </RadioGroup>
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
        <TextField
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          error={formErrors.role}
          helperText={formErrors.role && 'Role is required'}
          fullWidth
          margin="normal"
        />
        <FormGroup>
          <FormLabel>Skills Required</FormLabel>
          {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'NodeJS', 'AWS', 'AEM', 'VueJS', 'Adobe Target', 'Adobe Analytics', 'Git', 'Material UI', 'Tailwind CSS', 'Bootstrap', 'Tealium', 'Angular', 'GraphQL', 'NextJS', 'NestJS', 'React Native', 'Jest'].map((tech) => (
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