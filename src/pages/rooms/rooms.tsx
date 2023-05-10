
import Button from '../../components/atoms/Button';
import DashboardLayout from '../../layout/DashboardLayout';

const User = () => {
	
	return (
		<DashboardLayout>
			<div className='pt-5 px-2'>
      <div className='flex justify-between'>
			<div className='grid grid-cols-2 gap-3'>
				<div className='bg-violet-200 px-4 py-3 rounded-lg cursor-pointer'>
					<h6 className='text-blue-600'>Availabe Rooms</h6>
					<div className='flex mt-3'>
						<div className='border-l-4 pr-1 border-blue-600'></div>
						<p className='text-blue-600 font-bold text-lg'>3</p>
					</div>
				</div>
				<div className='bg-violet-200 px-4 py-3 rounded-lg cursor-pointer'>
					<h6 className='text-blue-600'>Active Hotels</h6>
					<div className='flex mt-3'>
						<div className='border-l-4 pr-1 border-blue-600'></div>
						<p className='text-blue-600 font-bold text-lg'>9</p>
					</div>
				</div>
			</div>
			<div className='w-64'>
				<Button className='mr-8'>
					Create New Room
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
									Room name
								</th>
								<th scope='col' className='px-6 py-3'>
									Accomodate
								</th>
								<th scope='col' className='px-6 py-3'>
									Floor
								</th>
								<th scope='col' className='px-6 py-3'>
									Room Type
								</th>      
                <th scope='col' className='px-6 py-3'>
									Hotel Name
								</th>   
                <th scope='col' className='px-6 py-3'>
									Description
								</th>         
								<th scope='col-span-2' className='px-6 py-3'>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
								<tr	className='bg-white border-b drop-shadow-xl py-1 rounded text-gray-900'>
									<td className='px-6 py-4'>1</td>
									<th	scope='row'className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>Room 1</th>
									<td className='px-6 py-4 text-gray-900'>1</td>
									<td className='px-6 py-4 text-gray-900'>2</td>
									<td className='px-6 py-4 text-gray-900'>SINGLE</td>
                  <td className='px-6 py-4 text-gray-900'>The Grand Hotel</td>
                  <td className='px-6 py-4 text-gray-900'>It is a king size four poster and provides a nice view of the lake.</td>
									<td className='px-6 py-4 text-gray-900'>
									<Button	className='bg-green-600/50 mr-2 w-50'>Book Now</Button>										
										
									</td>
								</tr>
                <tr	className='bg-white border-b drop-shadow-xl py-1 rounded text-gray-900'>
									<td className='px-6 py-4'>2</td>
									<th	scope='row'className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>Room 320</th>
									<td className='px-6 py-4 text-gray-900'>2</td>
									<td className='px-6 py-4 text-gray-900'>4</td>
									<td className='px-6 py-4 text-gray-900'>SUITE</td>
                  <td className='px-6 py-4 text-gray-900'>The Grand Hotel</td>
                  <td className='px-6 py-4 text-gray-900'> This room is configured with an extra roll-away bed for families of 3.</td>
									<td className='px-6 py-4 text-gray-900'>
									<Button	className='bg-green-600/50 mr-2 w-50'>Book Now</Button>										
										
									</td>
								</tr>
                <tr	className='bg-white border-b drop-shadow-xl py-1 rounded text-gray-900'>
									<td className='px-6 py-4'>3</td>
									<th	scope='row'className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>Room 43</th>
									<td className='px-6 py-4 text-gray-900'>3</td>
									<td className='px-6 py-4 text-gray-900'>2</td>
									<td className='px-6 py-4 text-gray-900'>SINGLE</td>
                  <td className='px-6 py-4 text-gray-900'>The Grand Hotel</td>
                  <td className='px-6 py-4 text-gray-900'>It is a Deluxe king size room with a seating area, ample storage, digital safe and mini fridge.</td>
									<td className='px-6 py-4 text-gray-900'>
									<Button	className='bg-green-600/50 mr-2 w-50'>Book Now</Button>										
										
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