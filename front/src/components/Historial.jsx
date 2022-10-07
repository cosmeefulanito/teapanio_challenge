import React from 'react'

const Historial = ({cryptos}) => {
  return (
    <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Cryptomoneda</th>
                <th>Precio actual</th>
                <th>Precio apertura</th>
                <th>Precio cierre</th>
            </tr>
        </thead>
        <tbody>            
                {cryptos.length > 0 ? 
                (
                    cryptos.map( (crypto) => {
                        return <tr key={crypto.id}>
                            <td>{crypto.id}</td>
                            <td>{crypto.name}</td>
                            <td>{crypto.price}</td>
                            <td>{crypto.open_day}</td>
                            <td>{crypto.low_day}</td>
                        </tr>
                    })

                ) : 'No hay informacion histórica para mostrar'}                
        </tbody>

    </table>
  )
}

export default Historial