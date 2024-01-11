import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Product from './pages/Product'
import CreateProduct from './pages/CreateProduct'
import ProductDetails from './pages/ProductDetails'
import ProductList from './pages/ProductList'
import NotFound from './NotFound'
import CryptoDetail from './CryptoDetail'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route
					path='/cryptoDetail/:cryptoSymbol/:id'
					element={<CryptoDetail />}
				></Route>
				<Route path='/cryptoDetail' element={<CryptoDetail />}></Route>
				<Route
					path='/cryptoDetail/:cryptoSymbol'
					element={<CryptoDetail />}
				></Route>

				<Route path='product'>
					<Route path='' element={<Product />}></Route>
					<Route path='create' element={<CreateProduct />}></Route>
					<Route path='details' element={<ProductDetails />}></Route>
					<Route path='list' element={<ProductList />}></Route>

					<Route path='details/:productId' element={<ProductDetails />}></Route>
				</Route>
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
