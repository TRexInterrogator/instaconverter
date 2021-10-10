from PIL import Image as IMG
import glob

file_names = glob.glob("./files/*.jpg")

print('Found ' + str(file_names.__len__()) + ' files to convert.')

for f_name in file_names:

    export_name = f_name.split('/')[-1]
    exportSize = (2000, 2000)

    oldImage = IMG.open(f_name)
    oldImage.thumbnail((1900, 1900), IMG.ANTIALIAS)
    oldSize = oldImage.size

    # Create new Image with white color
    newImage = IMG.new("RGB", exportSize)
    newImage.paste((255,255,255), [0,0,newImage.size[0],newImage.size[1]])

    # Calculate the center position of the imported image
    x = int((exportSize[0] - oldSize[0]) / 2)
    y = int((exportSize[1] - oldSize[1]) / 2)

    newImage.paste(oldImage, (x, y))
    newImage.save('./export/' + export_name)

print('Finished export!')
