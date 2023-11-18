import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getStats, getToken } from '../../backend/main.js'

function SearchButton(props) {
  const [isLoading, setLoading] = useState(false);
  const id = props.data;

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    // send stuff to drawer and code maker here
    console.log(`sending! here's id: ${id}`);
    // grab stats using id from max's backend main.js
    // const token = getToken();
    // console.log(`TOKEN: ${token}`);
    // const stats = getStats(token, id);
    // console.log(`STATS: ${JSON.stringify(stats)}`);
    // TODO: current bug where main.js import doesn't work bc require() can't work in web browser -- need to webpack

    // send stats over to parth's drawing
    // here!
  }

  return (
    <Button
      variant="primary"   
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {/* define button words */}
      {isLoading ? 'Loading…' : 'Create Poster!'}
    </Button>
  );
}

export default SearchButton;