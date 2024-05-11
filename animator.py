from PIL import Image, ImageOps
import os

def rotate_and_move_arm(image, angle):
    """Rotate and move the waving arm in the image by a specific angle."""
    # Adjusted crop coordinates for the waving arm (hand and wrist included)
    arm_crop = image.crop((420, 80, 600, 400))  # Adjust coordinates accordingly
    
    # Ensure there's an alpha channel
    if arm_crop.mode != 'RGBA':
        arm_crop = arm_crop.convert('RGBA')
    
    # Rotate the hand around the wrist
    arm_rotated = arm_crop.rotate(angle, resample=Image.BICUBIC, expand=True)
    arm_mask = arm_rotated.split()[3]  # Extract alpha channel

    # Create a new copy of the base image and paste the rotated arm
    new_image = image.copy()
    # Adjust coordinates where to paste the rotated arm (same position as the crop)
    new_image.paste(arm_rotated, (420, 80), arm_mask)
    return new_image

# Load the base image, ensure it's in RGBA mode
base_image = Image.open('src/assets/me3.png').convert('RGBA')

# Create output directory
output_dir = 'src/assets/waving_hand/'
os.makedirs(output_dir, exist_ok=True)

# Generate frames with varying rotations for the waving effect
angles = [-10, -5, 0, 5, 10, 5, 0, -5]
for index, angle in enumerate(angles):
    frame = rotate_and_move_arm(base_image, angle)
    frame.save(os.path.join(output_dir, f'frame_{index + 1}.png'))

print(f'Frames generated and saved in {output_dir}')
