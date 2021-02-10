export const selectImage = (image) => {
    console.log("You clicked on Image name: ", image);
    return {
        type: 'Image_Selected',
        payload: image
    }
};