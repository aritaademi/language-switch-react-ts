// import React from 'react'

// const AllContent:React.FC = () => {
//     const languages: string[] = ["En","Mk"];
//     const fields: string[] = ["name","description"];

//   return (
//     <div >
//       {languages.map((lang) => (
//         <div key={lang}  style={{marginBottom: "5px"}}> {/**per secilen gjuh krijohet div */}
          
//           {fields.map((field) => (
//             <div key={`${lang}-${field}`}  style={{marginBottom: "5px"}}> {/**key={${lang}-${field}} per secilin input field krijon unique identifier */}
//               <label>
//                 {lang} {field}: 
//                 <input type="text" />
//               </label>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default AllContent


import React from 'react';
import { Input, Form,Button } from 'antd';

interface AllContentProps{
  languages: string[],
  fields: string[]
}

const AllContent: React.FC<AllContentProps> = ({languages,fields}) => {

  //const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    const result = languages.map((lang) => {
      const entry: any = {lang};
      fields.forEach((field)=>{
        const key = `${lang}-${field.toLowerCase()}`
        entry[field.toLowerCase()] = values[key] || '';
      })
      return entry;
    })
    console.log(result);
  } 

  return (
      <Form layout='vertical' className='space-y-6' onFinish={handleSubmit}>
        {languages.map((lang) => (
          <div key={lang} className='space-y-4'>
            {fields.map((field) => (
            <Form.Item
              key={`${lang}-${field}`}
              label={`${lang} ${field}`}
              name={`${lang}-${field.toLowerCase()}`} 
            >
              <Input placeholder={`Enter ${lang} ${field.toLowerCase()}`} />
            </Form.Item>
            ))}
          </div>
        ))}

        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
  );
};

export default AllContent;

