import React, { useState, useEffect } from 'react';

const WorkModal = ({ project, closeModal }) => {
  if (!project) return null; // Prevent rendering if no project is selected

  const [selectedImage, setSelectedImage] = useState(project.modalImages[0]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageChange = (newImage) => {
    setImageLoaded(false); // Start fading out the current image

    setTimeout(() => {
      setSelectedImage(newImage); // Change the image after fading out
      setImageLoaded(true); // Fade in the new image
    }, 300); // Match this duration with your CSS transition duration
  };

  useEffect(() => {
    setImageLoaded(false); // Hide the image initially
    const timer = setTimeout(() => {
      setImageLoaded(true); // Show the image after a short delay
    }, 50);

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts
  }, [selectedImage]);


  return (
    <div className="work_modal active-modal">
      <div className="work_modal-content">
        <i className="uil uil-times work_modal-close" onClick={closeModal}></i>
        
        {/* Title */}
        <h3 className="work_modal-title">{project.title}</h3>
        
        {/* Description */}
        <p className="work_modal-description">{project.modalDescription}</p>
        
        {/* Images Section */}
        <div className="work_modal-body">
          <div className="work_modal-thumbnails">
            {project.modalImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Project ${idx + 1}`}
                className={`work_modal-thumbnail ${selectedImage === img ? 'selected' : ''}`}
                onClick={() => handleImageChange(img)}
              />
            ))}
          </div>
          
          <div className="work_modal-large-image">
            <img src={selectedImage} alt="Selected"  className={imageLoaded ? 'show' : ''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;
