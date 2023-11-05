import styles from './Home.module.css'

function App() {
  return (
    <div>
      <h1>Cars catalog</h1>
      <div>
        <div>
          <div className={styles.item}>
            <div
              className={styles.image}
              style={{
                backgroundImage: 'url(/bmw-x7.jpg)',
              }}
            />

            <div className={styles.info}>
              <h2>Car 1</h2>
              <p>100 000$</p>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
