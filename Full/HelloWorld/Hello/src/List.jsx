function List(props) {
  //   const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
  const category = props.category;
  const itemList = props.items;
  //   fruits.sort();
  //   const listItems = fruits.map((fruit) => <li>{fruit}</li>);
  //   const fruits2 = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "orange", calories: 45 },
  //     { id: 3, name: "banana", calories: 105 },
  //     { id: 4, name: "coconut", calories: 159 },
  //     { id: 5, name: "pineapple", calories: 37 },
  //   ];

  //   fruits2.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
  //   fruits2.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical

  //   fruits2.sort((a, b) => a.calories - b.calories); // numeric order ascending

  //   const lowCalFruits = fruits2.filter((fruit) => fruit.calories < 100, {});

  const listItems2 = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));
  return (
    <>
      <h1 className="list-category">{category}</h1>
      <ol className="list-items">{listItems2}</ol>
    </>
  );
}

export default List;
