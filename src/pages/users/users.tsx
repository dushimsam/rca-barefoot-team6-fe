
import Button from '../../components/atoms/Button';

import DashboardLayout from '../../layout/DashboardLayout';

const User = () => {
	
	return (
		<DashboardLayout>
			<div className='pt-5 px-2 mr-96'>
      <div className='flex justify-between'>
			<div className='grid grid-cols-2 gap-3'>
				<div className='bg-violet-200 px-4 py-3 rounded-lg cursor-pointer'>
					<h6 className='text-blue-600'>Users Registered</h6>
					<div className='flex mt-3'>
						<div className='border-l-4 pr-1 border-blue-600'></div>
						<p className='text-blue-600 font-bold text-lg'>4</p>
					</div>
				</div>
				<div className='bg-violet-200 px-4 py-3 rounded-lg cursor-pointer'>
					<h6 className='text-blue-600'>Active Users</h6>
					<div className='flex mt-3'>
						<div className='border-l-4 pr-1 border-blue-600'></div>
						<p className='text-blue-600 font-bold text-lg'>2</p>
					</div>
				</div>
			</div>
			<div className='w-64'>				
        <Button className='mr-8'>
					Add User
				</Button>
			</div>
		</div>
				<div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-2'>
					<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
						<thead className='text-xs text-gray-700 uppercase bg-white '>
							<tr>
								<th scope='col' className='px-6 py-3'>
									#
								</th>

								<th scope='col' className='px-6 py-3'>
									User Names
								</th>
								<th scope='col' className='px-6 py-3'>
									Status
								</th>
								<th scope='col' className='px-6 py-3'>
									Email
								</th>
								     
								<th scope='col-span-2' className='px-6 py-3'>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
								<tr	className='bg-white border-b drop-shadow-xl py-1 rounded text-gray-900'>
									<td className='px-6 py-4'>1</td>
									<th	scope='row'className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '> Jane Doe</th>
									<td className='px-6 py-4 text-gray-900'>active</td>		
                  <td className='px-6 py-4 text-gray-900'>janedoe@gmail.com</td>								
									<td className='px-6 py-4 text-gray-900'>
									<Button	className='bg-green-600/50 mr-2 w-50'>Edit User</Button>			
									</td>
								</tr>
                <tr	className='bg-white border-b drop-shadow-xl py-1 rounded text-gray-900'>
									<td className='px-6 py-4'>2</td>
									<th	scope='row'className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>Jane Doe</th>
									<td className='px-6 py-4 text-gray-900'>active</td>		
                  <td className='px-6 py-4 text-gray-900'>admin@example.com</td>								
									<td className='px-6 py-4 text-gray-900'>
									<Button	className='bg-green-600/50 mr-2 w-50'>Edit User</Button>			
									</td>
								</tr>
								<tr	className='bg-white border-b drop-shadow-xl py-1 rounded text-gray-900'>
									<td className='px-6 py-4'>3</td>
									<th	scope='row'className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>Akeza bwiza</th>
									<td className='px-6 py-4 text-gray-900'>inactive</td>
                  <td className='px-6 py-4 text-gray-900'>bwiza@gmail.com</td>											
									<td className='px-6 py-4 text-gray-900'>
									<Button	className='bg-green-600/50 mr-2 w-50'>Edit User</Button>			
									</td>
								</tr>
                <tr	className='bg-white border-b drop-shadow-xl py-1 rounded text-gray-900'>
									<td className='px-6 py-4'>4</td>
									<th	scope='row'className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>Igiraneza Honorine</th>
									<td className='px-6 py-4 text-gray-900'>active</td>	
                  <td className='px-6 py-4 text-gray-900'>igiraneza@gmail.com</td>									
									<td className='px-6 py-4 text-gray-900'>
									<Button	className='bg-green-600/50 mr-2 w-50'>Edit User</Button>			
									</td>
								</tr>
					
						</tbody>
					</table>
				</div>				
			</div>
		</DashboardLayout>
	);
};

export default User;