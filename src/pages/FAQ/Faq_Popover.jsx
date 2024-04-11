import React, { useState } from "react";
import axios from 'axios';
import msgImage from './message.svg'; // Import the image

import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Input,
    Textarea,
    Typography,
  } from "@material-tailwind/react";
   
  export function SubscriptionPopover() {
    const [concernDetail, setConcernDetail] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        try {
          await axios.post('http://localhost:5000/submitConcern', { 
            email: email, 
            concernDetail: concernDetail });
          alert('Concern submitted successfully!');
          setEmail('');
          setConcernDetail('');
        } catch (error) {
          console.error('Error submitting concern:', error);
          alert('Concern cannot be empty! Please share your concern');
        }
      };


    return (
        <div style={{ position: 'fixed', right: '25px', bottom: '25px' }}>
        <Popover placement="bottom">
          <PopoverHandler>
            <Button

        color="orange"
        style={{
        width: '60px',
        height: '60px',
        borderRadius: '999px',
        backgroundColor:'#FF7A00',
        backgroundImage: `url(${msgImage})`,
        backgroundSize: '50%', // Adjust the background size here, for example, 50%
        backgroundRepeat: 'no-repeat', // Ensure the background doesn't repeat
        backgroundPosition: 'center', // Position the background image at the center
      }}
    >
    </Button>

          </PopoverHandler>

          
          <PopoverContent className="w-96 p-4 absolute ">
  <div className="flex flex-col items-center mt-2">
  
    <h2 className="text-lg font-bold mb-2 text-orange-500">Share your thoughts with us!</h2>
    
    <div className="relative w-full min-w-[200px] mb-4">
    <Typography variant="h6" color="gray" className="mb-1">
    Email (optional)
  </Typography>
      <Input
        className="input-field text-black"
        placeholder="Input your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

    </div>
    
    <div className="relative w-full min-w-[200px] mb-4">
    <Typography variant="h6" color="gray" className="mb-1">
    Share your thoughts with us
  </Typography>
      <Textarea
        className="input-field text-black"
        placeholder="Share us your concern"
        value={concernDetail}
        onChange={(e) => setConcernDetail(e.target.value)}
      ></Textarea>
  
      <svg
        className="ross absolute bottom-0 right-0 m-2 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={handleSubmit}
      >
        <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
      </svg>
    </div>
  </div>
</PopoverContent>

        </Popover>
      </div>
    );
  }