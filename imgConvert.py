from pathlib import Path
from PIL import Image
import pillow_avif

def convert_to_webp(source):
    """Convert image to webp.

    Args:
        source (pathlib.Path): Path to source image

    Returns:
        pathlib.Path: path to new image
    """
    destination = source.with_suffix(".avif")

    image = Image.open(source)  # Open image
    image.save(destination, format="avif")  # Convert image to webp

    return destination

def main():
    paths = Path("assets/img").glob("**/*.png")
    for path in paths:
        webp_path = convert_to_webp(path)
        print(webp_path)


main()