# docker_vue_nodejs

## 部署步驟

1. build http server image

```bach
$ docker build -t docker-test .
```
2. check image is OK
```bach
$ docker images
```

3. run http server
```bach
$ docker run -itd -p 8080:80 docker-test
```

4. check container is running
```bach
$ docker ps -a
```

5. done!