FROM --platform=$BUILDPLATFORM denoland/deno:alpine

ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache
RUN apk update && apk upgrade

RUN addgroup --gid 10001 notroot \
    && adduser --uid 10001 --ingroup notroot notroot --disabled-password --no-create-home

WORKDIR /app

COPY src/main.ts src/handler.ts ./

USER notroot:notroot
ENV BLACK_HOLE_PORT=8080

CMD ["deno", "run", "--allow-all", "main.ts"]