export const Home = (): JSX.Element => (
  <div className="placeholderPage">
    <main className="main">
      <h1 className="title">👷‍♀️🚧</h1>
      <h2 className="title">Under construction</h2>
    </main>

    <style jsx>{`
      .placeholderPage {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: rgb(1, 99, 177);
        background: linear-gradient(
          349deg,
          rgba(1, 99, 177, 1) 0%,
          rgba(0, 212, 255, 1) 100%
        );
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        text-align: center;
        width: 100%;
        padding: 0.2em 0;
      }
    `}</style>
  </div>
)

export default Home
