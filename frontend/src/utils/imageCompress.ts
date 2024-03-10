// import imageCompression from 'browser-image-compression';

// interface CompressFileOptions {
//     maxWidth?: number;
//     maxHeight?: number;
//     quality?: number;
// }

// const compressFile = (
//     file: File,
//     options: CompressFileOptions = {}
// ): Promise<File> => {
//     return new Promise((resolve, reject) => {
//         const { maxWidth = 400, maxHeight = 400, quality = 0.8 } = options;

//         const compressionOptions = {
//             maxSizeMB: 1, // Set your desired maximum file size after compression
//             maxWidthOrHeight: Math.max(maxWidth, maxHeight),
//             useWebWorker: true,
//             onProgress: (percent: number) => {
//                 // Handle compression progress if needed
//                 console.log(`Compression Progress: ${percent}%`);
//             },
//         };

//         imageCompression(file, compressionOptions)
//             .then((compressedFile) => {
//                 resolve(compressedFile as File);
//             })
//             .catch((error) => {
//                 reject(error);
//             });
//     });
// };

// export default compressFile;
