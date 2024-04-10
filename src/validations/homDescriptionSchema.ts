import { z } from "zod"

export const homeDescriptionSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    price: z.number().positive().min(10),
    image: z.any().refine(value => value instanceof File, { message: 'Image is required' }),
    rooms: z.number().int().positive('Number of rooms must be a positive number'),
    bathrooms: z.number().int().positive('Number of rooms must be a positive number'),
})

export type HomeDescriptionType = z.infer<typeof homeDescriptionSchema>

import { bytesToMB } from "@/lib/helper";

export const homeSchema = z.object({
  title: z.string().min(5).max(40),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  price: z.number().nonnegative().refine(value => !isNaN(value), {
    message: "Amount should be a number",
  }),
  description: z.string().min(10).max(20000),
  categories: z.array(z.string()).nonempty('Please select at least one categories'),
  image: z.any().refine(file => {
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    return validTypes.includes(file?.type);
  }, { message: 'Only JPEG or PNG images are allowed' }).refine(file => {
    return bytesToMB(file?.size) <=  2;
  }, { message: 'Image must be less than  2 MB' }),
});

export type HomeSchemaType = z.infer<typeof homeSchema>;



// const FormSchema = z.object({
//     homeId: z.string(), // Assuming homeId is a string, adjust as necessary
//     title: z.string().nonempty({ message: 'Title is required' }),
//     description: z.string().nonempty({ message: 'Description is required' }),
//     price: z.number().min(10, { message: 'Price must be at least $10' }),
//     image: z.any().refine(value => value instanceof File, { message: 'Image is required' }),
//     // Assuming guests, rooms, and bathrooms are handled elsewhere
//    });






// import { z } from 'zod';

// const FormSchema = z.object({
//  homeId: z.string(), // Assuming homeId is a string, adjust as necessary
//  title: z.string().nonempty({ message: 'Title is required' }),
//  description: z.string().nonempty({ message: 'Description is required' }),
//  price: z.number().min(10, { message: 'Price must be at least $10' }),
//  image: z.any().refine(value => value instanceof File, { message: 'Image is required' }),
//  // Assuming guests, rooms, and bathrooms are handled elsewhere
// });

// // Example usage
// const formData = {
//  homeId: '123',
//  title: 'Cozy Home',
//  description: 'A small, cozy home with a private garden.',
//  price: 15,
//  image: new File([], 'image.jpg'),
// };

// try {
//  FormSchema.parse(formData);
//  console.log('Form data is valid');
// } catch (error) {
//  console.error('Form data is invalid:', error);
// }
