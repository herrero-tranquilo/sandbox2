
# docker rmi -f $(docker images | grep "<none>" | awk "{print \$3}")

docker build -t docker_db .