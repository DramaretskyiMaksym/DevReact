function App() {
  const header = "Animal Groups";
  const animalGroups = [
    {
      id: 1,
      category: "Predators",
      animals: [
        { name: "Lion", color: "#E09C53" },
        { name: "Tiger", color: "#FF7F0E" },
        { name: "Wolf", color: "#708090" }
      ]
    },
    {
      id: 2,
      category: "Herbivores",
      animals: [
        { name: "Elephant", color: "#A9A9F5" },
        { name: "Giraffe", color: "#FFC107" },
        { name: "Zebra", color: "#4B0082" }
      ]
    },
    {
      id: 3,
      category: "Domestic",
      animals: [
        { name: "Dog", color: "#FFB6C1" },
        { name: "Cat", color: "#9370DB" },
        { name: "Cow", color: "#8BC34A" }
      ]
    }
  ];
  return (
    <div
      style = {{
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        backgroundColor: "#f0f0f0"
      }}
    >
      <h1
        style = {{
          textAlign: "center",
        }}
      >
        { header }
      </h1>
      <table

        style = {{
          padding: "30px",
          borderCollapse: "collapse",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
      
        <tbody>
          { animalGroups.map((group) => (
            <tr key={group.id}>
              <th
                style = {{
                  border: "1px solid #ddd",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                { group.category }
              </th>
              { group.animals.map((animal, index) => (
                <td key={ index }
                  style = {{
                    color: animal.color,
                    border: "1px solid #ddd",
                    padding: "10px",
                    fontWeight: "bold",
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
