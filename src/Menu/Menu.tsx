export const Menu = ({ categories }) => {
    return (
      <ul>
        {categories.map((item) => (
          <li key={item.id}> {item.label} </li>
        ))}
      </ul>
    );
  };
  