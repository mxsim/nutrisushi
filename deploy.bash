#!/bin/bash

# === CONFIG ===
REPO_URL="https://github.com/mxsim/nutrisushi.git"  # Replace this
BRANCH="main"
COMMIT_MSG=${1:-"Update project"}

# === LOGIC ===

# Check if .git exists (i.e., repo already initialized)
if [ ! -d ".git" ]; then
  echo "Initializing Git repository..."
  git init
  git branch -M $BRANCH
  git remote add origin $REPO_URL
else
  echo "Git repository already initialized."
fi

# Stage, commit, push
echo "Staging all changes..."
git add .

echo "Committing with message: '$COMMIT_MSG'"
git commit -m "$COMMIT_MSG"

echo "Pushing to $REPO_URL on branch $BRANCH..."
git push -u origin $BRANCH

echo "✅ Done."
