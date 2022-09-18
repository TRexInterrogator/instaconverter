# /bin/bash
docker buildx build --platform linux/arm64 -t instaconverter:latest .

docker save -o instaconverter.tar instaconverter:latest
docker image rm instaconverter

echo "Build done: Instaconverter"