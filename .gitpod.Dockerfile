FROM gitpod/workspace-full

# Install graphviz
RUN sudo apt update && \
  sudo apt upgrade -y && \
  sudo apt install -y graphviz

# Setup node
USER gitpod
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash && \
  export NVM_DIR="$HOME/.nvm" && \
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && \
  nvm install 16 && \
  nvm use 16 && \
  npm install --global npm yarn @teambit/bvm nx
