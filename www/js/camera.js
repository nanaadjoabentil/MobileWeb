 //TAKE A PICTURE

/*Before you can take a picture, you need to set some Camera plugin options to pass into the Camera plugin's getPicture function.
Here is a common set of recommendations. In this example, you create the object that you will use for the Camera options,
and set the sourceType dynamically to support both the Camera app and the file picker.
*/

function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
}

// You take a picture by passing in the options object to getPicture, which takes a CameraOptions object as the third argument.
// When you call setOptions, pass Camera.PictureSourceType.CAMERA as the picture source.

function openCamera(selection) {

    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        displayImage(imageUri);
        // You may choose to copy the picture, save it somewhere, or upload.
        func(imageUri);

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}

function openCameraPreview(){
  let options = {
  x: 0,
  y: 0,
  width: window.screen.width,
  height: window.screen.height,
  camera: CameraPreview.CAMERA_DIRECTION.BACK,
  toBack: false,
  tapPhoto: true,
  previewDrag: false
};

CameraPreview.startCamera(options);
}
// Once you take the picture, you can display it or do something else.
//In this example, call the app's displayImage function from the preceding code.

function displayImage(imgUri) {

    var elem = document.getElementById('imageFile');
    elem.src = imgUri;
}

// GET A PICTURE FROM THE ALBUM

function openFilePicker(selection) {

    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        // Do something

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}


init: function()
{
  document.getElementById('video').addEventListener('click', this.openCamera, false);
  document.getElementById('pic').addEventListener('click', this.openCamera, false);
};

document.addEventListener('deviceready', function(){
  init();
}, false);
