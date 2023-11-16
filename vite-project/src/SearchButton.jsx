import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import currAlbumID from './SearchBarPro'

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