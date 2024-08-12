import React from 'react';
import { GrCheckbox } from 'react-icons/gr';
import { GrCheckboxSelected } from 'react-icons/gr'
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineEdit } from 'react-icons/md'
import { IoIosSearch } from 'react-icons/io';
import { IoIosArrowDropdown } from 'react-icons/io';
import { FaGreaterThan } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
import { IoAddCircleOutline } from 'react-icons/io5';

interface IconProps {
  type: 'checkBox' | 'clickedCheckBox' | 'unRegisteredUser' | 'editUser' | 'separator' | 'search' | 'dropDown' | 'mayor' | 'menor' | 'add'
}

const icons = {
  checkBox: <GrCheckbox/>,
  clickedCheckBox: <GrCheckboxSelected/>,
  unRegisteredUser: <FaRegUser/>,
  editUser: <MdOutlineEdit/>,
  separator: require('../../../public/images/separator.svg'),
  search: <IoIosSearch />,
  dropDown: <IoIosArrowDropdown />,
  mayor: <FaGreaterThan />,
  menor: <FaLessThan />,
  add: <IoAddCircleOutline />,
};

const Icon: React.FC<IconProps>  = ({ type }) => {
  return (
    icons[type]
  )
};

export default Icon;