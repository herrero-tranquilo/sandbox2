FROM postgres:12

ADD init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432

# 자동실행
# ENTRYPOINT ["/bin/bash","./docker-entrypoint.sh" ] 