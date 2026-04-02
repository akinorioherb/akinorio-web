import os
import json

md_path = "../kindle-book/スキンケア引き算の美学.md"
ts_dir = "src/app/secret"
ts_path = os.path.join(ts_dir, "content.ts")

os.makedirs(ts_dir, exist_ok=True)

with open(md_path, "r", encoding="utf-8") as f:
    content = f.read()

# JSON dump to safely escape newlines and quotes
escaped_content = json.dumps(content, ensure_ascii=False)

ts_content = f"export const bookContent: string = {escaped_content};\n"

with open(ts_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Generated {ts_path} successfully.")
