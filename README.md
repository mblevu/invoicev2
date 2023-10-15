# invoicev2


## enhancements
### enhancement0: conditional rendering approach to check if links exists before mapping
1)           {links ? (
            links.map(({ id, title, url }) => (
              <React.Fragment key={id}>
                <li key={id} className="list-item">
                  <Link to={url} className="text-base text-slate-700">
                    {title}
                  </Link>
                </li>
              </React.Fragment>
            ))
          ) : null}

            {/* {links.map(({ id, title, url }) => (
              <React.Fragment key={id}>
                <li key={id} className="list-item">
                  <Link to={url} className="text-base text-slate-700">
                    {title}
                  </Link>
                </li>
              </React.Fragment>
            ))} */}

- conditionally render the navigation items based on the existence of links. You can use a conditional rendering approach to check if links exists before mapping over it

## Bugs

### bug0: calculates total price per instead of total batch price
2)   // Use collect.js to calculate the total amount of items in the table
  const calculateTotal = () => {
    const allItems = list.map((item) => item.price);

    setTotal(collect(allItems).sum());
  };

  useEffect(() => {
    calculateTotal();
  });

- replaced item.price to get the total amount instead of price