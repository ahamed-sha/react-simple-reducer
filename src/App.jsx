import React from 'react'

function reducer(state, action) {
	switch (action.type) {
		case 'deposit':
			return {
				moneyWithMe: state.moneyWithMe - 100,
				moneyInBank: state.moneyInBank + 100
			}
		case 'withdraw':
			return {
				moneyWithMe: state.moneyWithMe + 100,
				moneyInBank: state.moneyInBank - 100
			}
		case 'reset':
			return {
				moneyWithMe: 1000,
				moneyInBank: 0
			}
		default:
			throw new Error()
	}
}

function App() {
	const initialState = { moneyInBank: 0, moneyWithMe: 1000 }

	//const [state, dispatch] = useReducer(reducer, initialArg, init)
	const [state, dispatch] = React.useReducer(reducer, initialState)

	const depositMoney = () => {
		dispatch({ type: 'deposit' })
	}

	const withdrawMoney = () => {
		dispatch({ type: 'withdraw' })
	}

	const reset = () => {
		dispatch({ type: 'reset' })
	}

	return (
		<div>
			<h1>Bank Account: {state.moneyInBank}</h1>
			<h1>My Account: {state.moneyWithMe}</h1>
			<button onClick={depositMoney}>
				Deposit Money in the Bank
			</button>
			<br />
			<button onClick={withdrawMoney}>
				Withdraw Money from the Bank
			</button>
			<br />
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default App
