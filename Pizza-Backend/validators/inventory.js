// import { object, string, number } from 'joi';
import pkg from 'joi';
const { object, string, number } = pkg;


export const validateInventoryUpdate = (data) => {
  const schema = object().keys({
    name: string().required(),
    quantity: number().integer().required(),
    // Add more fields as needed
  });

  return schema.validate(data);
};

export default { validateInventoryUpdate };