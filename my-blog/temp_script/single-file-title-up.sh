#!/bin/bash

# 指定要处理的 markdown 文件
markdown_file="./06-vue.mdx"

# 使用sed命令升高标题级别
sed -E -i'' 's/^(#+)\s+(.*)$/#\1 \2/' "$markdown_file"

# 输出操作完成的消息
echo "$markdown_file 所有标题已升级！"
