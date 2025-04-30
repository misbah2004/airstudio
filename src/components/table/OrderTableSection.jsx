import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const OrderTableSection = () => {
  const columns = useMemo(() => [
    {
      accessorKey: 'name.firstName',
      header: 'First Name',
      size: 150,
    },
    {
      accessorKey: 'name.lastName',
      header: 'Last Name',
      size: 150,
    },
    {
      accessorKey: 'address',
      header: 'Address',
      size: 200,
    },
    {
      accessorKey: 'city',
      header: 'City',
      size: 150,
    },
    {
      accessorKey: 'state',
      header: 'State',
      size: 150,
    },
  ], []);

  const data = []; // Empty data

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <div className='p-10 mt-10'>
       <button className='bg-[#236EDE] px-5 p-1 mb-3 rounded-full text-white'>Back</button>
      <MaterialReactTable  table={table}  />
    </div>
  );
};

export default OrderTableSection;
