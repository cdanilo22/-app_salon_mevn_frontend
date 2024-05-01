import { generateClasses } from "@formkit/themes"
const config = {
   config: {
      classes: generateClasses({
         global: {
            wrapper: 'space-y-2 mb-3',
            message: 'bg-red-500 text-white text-center text-sm font-bold uppercase p-2 my-5',
            label: 'block mb-1 text-white text-lg font-bold',
            input: 'w-full p-3 border border-gray-300 rouded-lg text-gray-700 placeholder-400'
         },
         submit: {
            input: '$reset bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-bold w-full p-3 mt-10'
         }
      })
   } 
}

export default config