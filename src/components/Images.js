import React, { useState, useEffect } from 'react';
import Image from './Image';

export default function Images(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const apiKey = 'lFhsYol7x8Wu9SeQdpxqKjlov9bcugtXUHgHf6jZd8Y';
    let page = Math.floor(Math.random() * 20) + 1;
    const per_page = 50;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${props.query}&per_page=${per_page}&client_id=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-2 max-w-7xl mx-auto text-center mt-10">
        {
          images.map((image) => (<Image key={image.id} src={image.urls.regular} alt={image.alt_description} likes={image.likes} username={image.user.name}
            proimg={image.user.profile_image.large} profile={image.user.social.portfolio_url} visit={image.links.html} location={image.user.location}
          />
          ))
        }
      </div>
    </>
  );
}


