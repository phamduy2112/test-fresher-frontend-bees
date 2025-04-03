import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: '1', label: '1' },
  { value: '5', label: '5' },
  { value: '10', label: '10' },
  { value: '15', label: '15' },
  { value: '20', label: '20' },
];

interface MySelectProps {
  handleRowsPage: (value: number) => void;
}

const MySelect: React.FC<MySelectProps> = ({ handleRowsPage }) => {
  const [selectedValue, setSelectedValue] = useState<string>("5"); 

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    handleRowsPage(+newValue); 
  };

  return (
    <div>
      Page Size:
      <select value={selectedValue} onChange={handleChange} className='border ml-[.5rem]'>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
