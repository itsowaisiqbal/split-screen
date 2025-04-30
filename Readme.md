# Split Screen Lens Studio Project

A split screen effect project built using Lens Studio, allowing you to create two separate scenes with a customizable split effect between them.

## Preview

![Split Screen Preview](/split-screen-demo.gif)

## Features

- Create two separate scenes using different render targets
- Customizable split effect using the split screen shader
- Adjustable line width and color
- Support for custom split line images/animations

## How to Use

1. Create two separate scenes using different render targets
2. Apply the split screen shader to create the split effect
3. Customize the split line:
   - Adjust width and color in the shader settings
   - For custom images/animations, reference them in the "Custom-Line (EDIT ME)" screen transform
4. The split-line image screen transform is linked to the material's `split_line_position` parameter

## Developer

Developed by [@itsowaisiqbal]
