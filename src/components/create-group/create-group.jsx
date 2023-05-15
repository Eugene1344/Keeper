import {useDispatch} from "react-redux";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {addAccount} from "../../store/slices/accountSlice.js";


function CreateGroup() {
  const [groupName, setGroupName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const randomId = uuidv4();

  const handleFileUpload = (event) => setSelectedFile(event.target.files[0]);
  const handleInputChange = (event) => setGroupName(event.target.value);

  const addGroupHandle = () => {
    if (!groupName.length) return;

    const accountItem = {
      'name': groupName,
      'icon': selectedFile,
      'balance': 0,
      'currency': null,
      'id': randomId,
      'type': 'group'
    }

    dispatch(addAccount(accountItem))

    setGroupName('');
    setSelectedFile(null);
  };



  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Add New Group
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Here you can add a group for your expenses.
          </p>
        </div>
        <div className='flex w-full sm:flex-row flex-col mx-auto sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end'>
          <div className='relative flex-grow w-full'>
            <label className='leading-7 text-sm text-gray-600'>Group Name</label>
            <input
              type='text'
              value={groupName}
              onChange={handleInputChange}
              id='groupName'
              name='groupName'
              required
              className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative flex-grow w-full'>
            <label htmlFor="groupIcon" className='leading-7 text-sm text-gray-600'>Icon</label>
            <input
              type='file'
              id='groupIcon'
              name='groupIcon'
              onChange={handleFileUpload}
              className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <button
              onClick={addGroupHandle}
              className='text-white rounded-md border border-transparent bg-blue-100 py-2 px-8 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
            Add
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreateGroup;