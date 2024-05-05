FROM debian

RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    curl

RUN curl -fsSL https://bun.sh/install | bash && \
ln -s $HOME/.bun/bin/bun /usr/local/bin/bun

WORKDIR /app
COPY . /app

RUN ~/.bun/bin/bun install