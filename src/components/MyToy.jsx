import React from 'react';

const MyToy = ({mytoy}) => {
    const{ _id, img, name, sellername, email, price, quantity, rating, description, category }  = mytoy;
    return (
<tr>
    <td>
        {name}
    </td>
    {/* <td>
        {category}
    </td> */}
    <td>

    </td>
</tr>
    );
};

export default MyToy;