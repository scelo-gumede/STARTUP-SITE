import { Box, Button, TextareaAutosize, TextField } from "@mui/material"




const Form = () => {
  return (
    <section className="flex flex-col  my-10">
        <p className="text-center text-secondary text-mediumFont font-bold">FORM</p>
        <p className="text-center text-bigFont font-bold">LEAVE A MESSAGE</p>
        <Box className="flex items-center space-y-5  flex-col">
            <TextField variant="outlined" label="first name" type="text" className="w-[50vw]"  />
            <TextField variant="outlined" type="text" label="last name" className="w-[50vw]"/>
            <TextField variant="outlined" type="text" label="company" className="w-[50vw]"/>
            <TextField variant="outlined" type="email" label="email" className="w-[50vw]"/>
            <TextField variant="outlined"  label="phone" className="w-[50vw]"/>
            <TextField multiline maxRows={5}  label="comment" className="w-[50vw]"/>
            <Button size="large" variant="contained">Submit</Button>
        </Box>
    </section>
  )
}

export default Form