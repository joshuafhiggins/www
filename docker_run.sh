docker run -d \
  --name=realm-homepage \
  -p 3000:3000 \
  --restart unless-stopped \
  git.abunchofknowitalls.com/joshuafhiggins/realm-homepage:latest
