# Step 1: Pull latest version of project
git pull

# Step 2: Build the Docker image
docker build -t magescam .

# Step 3: Create a temporary container from the image
docker create --name magescam-container magescam

# Step 4: Remove old files from the Nginx directory
rm -rf /var/www/magescam/*

# Step 5: Copy the build files from the container to your Nginx directory
docker cp magescam-container:/app/dist/ /var/www/magescam/

# Step 6: Remove the temporary container
docker rm magescam-container

# Step 7: (Optional) Reload or restart Nginx to apply the changes
nginx -s reload

echo "Deployment completed successfully."