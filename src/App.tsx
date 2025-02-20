import './App.css'

import ShopItemClass from './components/ShopItemClass'

import data from '../data.json'

import { useState } from 'react'

import IItem from './interfaces/item.interface'

const App: React.FC = () => {

  const [items] = useState<IItem[]>(data);

  if (!items) return <><h1>Loading...</h1></>

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        {items.map((item: IItem) => <ShopItemClass key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default App
