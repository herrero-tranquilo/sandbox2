# 이미지 빌드
docker build -t reactindocker .

# 기존 컨테이너는 제거
docker rm -f reactindocker-container

# 컨테이너실행
docker run --name reactindocker-container -itd --restart no -p 3001:3000 reactindocker

