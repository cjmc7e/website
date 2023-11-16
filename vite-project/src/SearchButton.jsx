import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import currAlbumID from './SearchBarPro'

function SearchButton() {
  const [isLoading, setLoading] = useState(false);

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
    const id = currAlbumID();
    // send stuff to drawer and code maker here
    console.log(`sending! here's id: ${id}`)
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