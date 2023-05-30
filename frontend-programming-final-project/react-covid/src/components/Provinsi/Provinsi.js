
import React from 'react';

function Provinsi(props) {  
    const {prov, index} = props
    return (
            <tr key={prov.kota}>
                <td>{index + 1}</td>
                    <td>{prov.kota}</td>
                        <td>{prov.kasus}</td>
                        <td>{prov.sembuh}</td>
                        <td>{prov.meninggal}</td>
                        <td>{prov.dirawat}</td>
                </tr>

    );
}

export default Provinsi;