// import React, { useState } from 'react';

// const GroupedContent: React.FC = () => {
//   const languages: string[] = ['En', 'Mk'];
//   const [selectedLanguage, setSelectedLanguage] = useState<string>('En');


//   return (
//     <div >
//       {/* Language Selector krijon button per secilen gjuhe*/}
//       <div >
//         {languages.map((lang) => (
//           <button
//             key={lang}
//             onClick={() => setSelectedLanguage(lang)}
//           >
//             {lang}
//           </button>
//         ))}
//       </div>

//       {/*Shfaq inputet bazuar te gjuha */}
//       {selectedLanguage && (
//         <div >
//           <div >
//             <label>
//               {selectedLanguage} Name:
//               <input type="text" />
//             </label>
//           </div>

//           <div >
//             <label>
//               {selectedLanguage} Description:
//               <input type="text" />
//             </label>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GroupedContent;


import React, { useState } from 'react';
import { Button , Input, Form, } from 'antd';

interface GroupedContentProps {
  languages: string[];
  fields: string[];
}

const GroupedContent: React.FC<GroupedContentProps> = ({languages, fields}) => {
  
  const [selectedLanguage, setSelectedLanguage] = useState<string>('En');

  const [data, setData] = useState<any>({}); //usestate per ti rujt krejt submissions

  const handleSubmit = (values: any) => {
    const updated = { ...data, [selectedLanguage]: values }; //it updated data state takin previous values with rest operator and overwrites new ones
    setData(updated);  //store updated data

    const result = languages.map((lang) => {
      const entry = updated[lang] || {};  //get the languages submitted data
      const item: any = { lang };  //starts to build an object
      fields.forEach((field) => {
        const key = `${lang}-${field.toLowerCase()}`;  //for each filed grabs the value and adds it to item
        item[field.toLowerCase()] = entry[key] || '';
      });
      return item;
    });

    console.log(result);
  };


  return (
    <div className="space-y-6">
      {/* Language Selector */}
      <div className="flex gap-3">
        {languages.map((lang) => (
          <Button
            key={lang}
            type={selectedLanguage === lang ? 'primary' : 'default'}
            onClick={() => setSelectedLanguage(lang)}
          >
            {lang}
          </Button>
        ))}
      </div>

      {/* Input Fields for selected language */}
      <Form layout="vertical" className="mt-4" onFinish={handleSubmit}>
        {fields.map((field) => (
          <Form.Item
            key={`${selectedLanguage}-${field}`}
            label={`${selectedLanguage} ${field}`}
            name={`${selectedLanguage}-${field.toLowerCase()}`}
          >
            <Input placeholder={`Enter ${selectedLanguage} ${field.toLowerCase()}`} />
        </Form.Item>
        ))}

        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>

      </Form>
    </div>
  );
};

export default GroupedContent;
