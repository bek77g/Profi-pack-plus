function PageLoading() {
  const styles = `.loader {
        width: 100vw;
        height: 100vh;
        display: grid;
        place-items: center;
        --color: #1c62cd;
        --pos-1: -8vmin;
        --pos-2: -2.66vmin;
        --pos-3: 2.66vmin;
        --pos-4: 8vmin;
        --pos-a: 5.33vmin;
        --pos-b: 16vmin;
        --pos-c: 10.66vmin;
        box-sizing: border-box;
        font-size: 10vmin;
        color: #1c62cd;
      }
      .loader:before {
        content: 'loading';
        font-family: fantasy;
        display: block;
        width: 40vmin;
        height: 20vmin;
        position: absolute;
        text-align: center;
      }
      .loader:after {
        display: block;
        content: ' ';
        background: #f000;
        width: 5vmin;
        height: 5vmin;
        box-shadow: var(--pos-1) var(--pos-c) var(--color),
          var(--pos-2) var(--pos-c) var(--color),
          var(--pos-3) var(--pos-c) var(--color),
          var(--pos-4) var(--pos-c) var(--color),
          var(--pos-1) var(--pos-b) var(--color);
        animation: 6s infinite loader;
        position: absolute;
      }

      @keyframes loader {
        0% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-b) var(--color);
        }
        4.16% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-b) var(--color);
        }
        8.33% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-a) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-c) var(--color);
        }
        12.5% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-a) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-c) var(--color);
        }
        16.66% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-b) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-c) var(--color);
        }
        20.83% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-b) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-c) var(--color);
        }
        25% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-a) var(--color),
            var(--pos-2) var(--pos-c) var(--color);
        }
        29.16% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-a) var(--color),
            var(--pos-2) var(--pos-c) var(--color);
        }
        33.33% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-b) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-c) var(--color);
        }
        37.5% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-b) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-c) var(--color);
        }
        41.66% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-a) var(--color);
        }
        45.83% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-a) var(--color);
        }
        50% {
          box-shadow: var(--pos-1) var(--pos-b) var(--color),
            var(--pos-2) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-c) var(--color);
        }
        54.16% {
          box-shadow: var(--pos-2) var(--pos-b) var(--color),
            var(--pos-2) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-c) var(--color);
        }
        58.33% {
          box-shadow: var(--pos-2) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-a) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-c) var(--color);
        }
        62.5% {
          box-shadow: var(--pos-2) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-a) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-c) var(--color);
        }
        66.66% {
          box-shadow: var(--pos-2) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-b) var(--color),
            var(--pos-1) var(--pos-c) var(--color);
        }
        70.83% {
          box-shadow: var(--pos-2) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-b) var(--color),
            var(--pos-1) var(--pos-c) var(--color);
        }
        75% {
          box-shadow: var(--pos-2) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-a) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-c) var(--color);
        }
        79.16% {
          box-shadow: var(--pos-2) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-a) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-c) var(--color);
        }
        83.33% {
          box-shadow: var(--pos-2) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-b) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-c) var(--color);
        }
        87.5% {
          box-shadow: var(--pos-2) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-b) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-c) var(--color);
        }
        91.66% {
          box-shadow: var(--pos-2) var(--pos-a) var(--color),
            var(--pos-2) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-c) var(--color);
        }
        95.83% {
          box-shadow: var(--pos-1) var(--pos-a) var(--color),
            var(--pos-2) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-c) var(--color);
        }
        100% {
          box-shadow: var(--pos-1) var(--pos-c) var(--color),
            var(--pos-2) var(--pos-c) var(--color),
            var(--pos-3) var(--pos-c) var(--color),
            var(--pos-4) var(--pos-c) var(--color),
            var(--pos-1) var(--pos-b) var(--color);
        }
      }`;
  return (
    <>
      <style>{styles}</style>
      <div class='loader'></div>
    </>
  );
}

export default PageLoading;
