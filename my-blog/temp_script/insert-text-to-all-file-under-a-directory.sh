DIRECTORY_PATH="./docs"

find "$DIRECTORY_PATH" -type f -name "*.mdx" -exec sh -c 'printf "%s\n%s\n%s\n" "---" "description: xxx" "---" | cat - "$1" > temp && mv temp "$1" && echo "$1 插入成功"' _ {} \;
