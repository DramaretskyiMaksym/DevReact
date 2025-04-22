import './App.css';


function App({title, data}) {
  return (
    <div className='container'>
      <h1>
        { title }
      </h1>
      <table className='animal-table'>
        <tbody>
          { data.map((group) => (
            <tr key={group.id}>
              <th className='category-cell'>
                { group.category }
              </th>
              { group.animals.map((animal, index) => (
                <td className='animal-cell'
                  key={ index }
                  style = {{
                    color: animal.color,
                  }}
                >
                  { animal.name }
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default App
