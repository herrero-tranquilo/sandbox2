# docker rm -f $(docker ps -a | grep docker-db-container | awk "{print \$1}")

# # 기존 컨테이너는 제거
docker rm -f docker_db_container

# 컨테이너실행
docker run --name docker_db_container -itd -p 5432:5432 -e POSTGRES_PASSWORD=test1234 \
-v c:\pg_test_db_data\:/var/lib/postgresql/data \
--restart unless-stopped docker_db



# docker logos