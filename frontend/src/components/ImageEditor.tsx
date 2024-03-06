// Import the editor styles
import "@pqina/pintura/pintura.css";

// Import the editor default configuration
import { getEditorDefaults } from "@pqina/pintura";

// Import the editor component from `react-pintura`
import { PinturaEditor } from "@pqina/react-pintura";
import { useEffect, useState } from "react";

// get default properties
const editorConfig = getEditorDefaults();

function ImageEditor({ imageFile, createReport }) {
  const [imageUrl, setImageUrl] = useState("");

  const changeFileToUrl = (file: File) => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageSrc = e.target.result;
        setImageUrl(imageSrc as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const onProcess = (params) => {
    console.log(params);
    createReport(params.dest);
  };

  useEffect(() => {
    if (imageFile) changeFileToUrl(imageFile);
  }, [imageFile]);

  return (
    imageUrl && (
      <div className="" style={{ height: "600px" }}>
        <PinturaEditor
          {...editorConfig}
          src={imageUrl}
          imageCropAspectRatio={1}
          onProcess={onProcess}
        ></PinturaEditor>
      </div>
    )
  );
}

export default ImageEditor;
