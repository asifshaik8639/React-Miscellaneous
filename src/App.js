import { useState } from 'react';

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];


  function ProductRow({product}) {
    let name = product.stocked ? product.name : 
    <span  style={{ color: 'red' }}>
        {product.name}
    </span>

    return(
        <tr>
            <td>
                {name}
            </td>
            <td>
                {product.price}
            </td>
        </tr>
    );
  }

  function ProductCategory({category}) {
    return(
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
  }

 function ProductTable({products, filterText, inStockOnly}){
     let rows = [];
     let lastCategory = null;
     !!products.forEach(product => {

        if(product?.name?.toLowerCase().indexOf(filterText?.toLowerCase()) === -1) {
            return;
        } else if(inStockOnly && !product.stocked) {
            return;
        }

        if(product.category !== lastCategory) {
            rows.push(<ProductCategory category={product.category} key={product.category}/>);

        }
        rows.push(<ProductRow product={product} key={product.name}/>);
        lastCategory = product.category;
    });

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
 }

  function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockCheckBoxChange}) {
    return(
        <div>
            <form>
                <input type="text" placeholder="Search..."
                       value ={filterText} 
                       onChange={((e) => onFilterTextChange(e.target.value))}
                       />
                <label>
                    <input type="checkbox" 
                           checked ={inStockOnly}
                           onChange={((e) =>  onInStockCheckBoxChange(e.target.checked))}
                    />
                    {' '}
                    Only show products in stock
                </label>
            </form>
        </div>
    );
  }

  function FilteredProducteTable({products}) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return(
        <div>
            <SearchBar filterText={filterText} 
                       inStockOnly={inStockOnly}
                       onFilterTextChange={setFilterText}
                       onInStockCheckBoxChange={setInStockOnly}
            />
            <ProductTable   products={products}
                            filterText={filterText} 
                            inStockOnly={inStockOnly}
            />
        </div>
    );
  }

  export default function App() {
    return(<FilteredProducteTable products={PRODUCTS}/>);
  }