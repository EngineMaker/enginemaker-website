FROM oven/bun:1.1.7

WORKDIR /app

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        openssh-client \
        git \
        curl \
        ca-certificates && \
    update-ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Install GitHub CLI (detect architecture)
RUN ARCH=$(uname -m) && \
    if [ "$ARCH" = "x86_64" ]; then \
        GITHUB_CLI_ARCH="amd64"; \
    elif [ "$ARCH" = "aarch64" ]; then \
        GITHUB_CLI_ARCH="arm64"; \
    else \
        GITHUB_CLI_ARCH="amd64"; \
    fi && \
    curl -fsSL https://github.com/cli/cli/releases/download/v2.74.2/gh_2.74.2_linux_${GITHUB_CLI_ARCH}.tar.gz | tar -xz -C /tmp && \
    mv /tmp/gh_2.74.2_linux_${GITHUB_CLI_ARCH}/bin/gh /usr/local/bin/ && \
    rm -rf /tmp/gh_2.74.2_linux_${GITHUB_CLI_ARCH}
    
# Claude Codeをインストール
RUN curl -fsSL https://claude.ai/install.sh | bash && \
echo "Installation completed"
    
# SSH directory setup
RUN mkdir -p /root/.ssh && chmod 700 /root/.ssh

# PATHを設定
ENV PATH="/root/.local/bin:${PATH}"

