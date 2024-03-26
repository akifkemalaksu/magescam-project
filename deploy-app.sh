# Step 1: Build the Docker image
docker build -t magescam .

# Step 2: Create a temporary container from the image
docker create --name magescam-container magescam

# Step 3: Remove old files from the Nginx directory
rm -rf /var/www/magescam/*

# Step 4: Copy the build files from the container to your Nginx directory
docker cp magescam-container:/app/dist /var/www/magescam

# Step 5: Remove the temporary container
docker rm magescam-container

# Step 6: (Optional) Reload or restart Nginx to apply the changes
nginx -s reload

echo "Deployment completed successfully."