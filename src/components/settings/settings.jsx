import Dropdown from "../../ui/dropdown/dropdown";
import {v4 as uuidv4} from "uuid";

function Settings() {
  const randomId = uuidv4();
  const currencies = [
    {
      'name': 'USD',
    },
    {
      'name': 'EURO',
    },
    {
      'name': 'RUB',
    }
  ];

  return (
    <div>
      <div className={'flex'}>
        <div className={'w-1/2 relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10 mx-5'}>
          <div>
            <div className={'mb-5 text-4xl capitalize'}>Profile</div>
            <div className={'flex justify-between border-b-2 pb-5 mb-5'}>
              <div>User</div>
              <div>Id</div>
            </div>
            <div className={'flex justify-between border-b-2 pb-5 mb-5'}>
              <div>Change password</div>
              <div>click</div>
            </div>
            <div className={'flex justify-between'}>
              <div>Currency</div>
              <Dropdown toggleName={'USD'} items={currencies}/>
            </div>
          </div>
          <button type='button' className={'mt-5 text-white rounded-md border border-transparent bg-red-400 py-2 px-8 font-medium hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'}>Delete</button>
        </div>
        <div className={'w-1/2 relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10 mx-5'}>
          <div>
            <div className={'mb-5 text-4xl capitalize'}>Report Period</div>
            <div className={'flex justify-between'}>
              <div>User</div>
              <div>Id</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
