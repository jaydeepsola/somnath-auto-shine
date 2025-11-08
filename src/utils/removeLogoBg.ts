import { removeBackground, loadImage } from './imageProcessing';

export async function processLogoRemoveBg(logoPath: string): Promise<string> {
  try {
    console.log('Loading logo image...');
    
    // Fetch the logo image
    const response = await fetch(logoPath);
    const blob = await response.blob();
    
    // Load as HTMLImageElement
    const img = await loadImage(blob);
    
    // Remove background
    console.log('Removing background...');
    const processedBlob = await removeBackground(img);
    
    // Create object URL for the processed image
    const url = URL.createObjectURL(processedBlob);
    
    console.log('Logo background removed successfully!');
    return url;
  } catch (error) {
    console.error('Error processing logo:', error);
    throw error;
  }
}
