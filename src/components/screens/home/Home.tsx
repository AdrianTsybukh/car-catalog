import styles from './Home.module.css'

function App() {
  return (
    <div>
      <h1>Cars catalog</h1>
      <div>
        <div>
          <div className={styles.item}>
            <h2>Car 1</h2>
            <p>100 000$</p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App