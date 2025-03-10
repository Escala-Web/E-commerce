import { createContext, useState } from "react";

export const FileManagerContext = createContext();

export const FileManagerProvider = ({ children }) => {
    
  const [folderHistory, setFolderHistory] = useState([1]);
  const [pictures, setPictures] = useState([]);


  function nextFolder(folder) {
    setFolderHistory((history) => [...history, folder]);
  }

  function prevFolder() {
    setFolderHistory((prevHistory) => {
      const updatedHistory = [...prevHistory];
      updatedHistory.pop();
      return updatedHistory;
    });
  }

  function handlePicture(image) {

    setPictures((prevImage) => ([
      ...prevImage,
      image
    ]))

  }

  function handleRemovePicture(image) {
    setPictures((prevImages) => prevImages.filter((img) => img.id !== image.id));
  }
  

  

  return (
    <FileManagerContext.Provider value={{ folderHistory, nextFolder, prevFolder, handlePicture, pictures, handleRemovePicture }}>
      {children}
    </FileManagerContext.Provider>
  );
};
